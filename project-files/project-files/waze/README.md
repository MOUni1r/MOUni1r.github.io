# Waze User Churn Prediction

## Project Overview

This case study investigates monthly user churn using exploratory analysis, statistical testing, feature engineering, and machine learning.

The workflow compares Logistic Regression, Random Forest, and XGBoost, with model selection performed on validation data and the final test set kept separate until the end.

> **Important:** The Waze scenario and dataset are educational/fictitious. The results should not be interpreted as real Waze performance.

## Key Results

- 14,999 original records
- 14,299 labeled users used for supervised modeling
- 17.74% churn rate
- Welch test for average monthly drives by device: p = 0.093651
- XGBoost selected among ensemble models by validation recall
- Final test ROC AUC: 0.7318
- Default threshold 0.50: recall 0.1716, precision 0.4555, F1 0.2493
- Validation-selected threshold 0.223: recall 0.5247, precision 0.3595, F1 0.4266

## Technical Workflow

1. Data quality checks
2. Exploratory analysis
3. Device-level statistical testing
4. Behavioral feature engineering
5. Train/validation/test split
6. Training-only outlier capping
7. Logistic Regression baseline
8. Random Forest tuning
9. XGBoost tuning
10. Validation-based model selection
11. Validation-based threshold selection
12. Final test evaluation
13. Feature importance
14. Model persistence

## Files

- `Waze_Project.ipynb` — full technical case study
- `Executive_Summary.pdf` — concise stakeholder summary
- `Job_Proposal.pdf` — freelancing-oriented project proposal
- `images/` — selected project visuals
