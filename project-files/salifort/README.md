# Salifort Motors | Employee Turnover Prediction

## Portfolio case study

An end-to-end employee turnover analysis and classification case study built around the Salifort Motors educational HR dataset.

### Business question
Which employee characteristics are most useful for identifying turnover risk, and how can those signals support retention-focused HR investigation?

### Dataset
- 14,999 employee records
- 10 variables
- Target: `left` (1 = left, 0 = stayed)
- Educational dataset, not real Salifort Motors workforce data

### Workflow
Business problem → data quality → EDA → feature engineering → baseline logistic regression → tree-based modeling → holdout evaluation → feature interpretation → recommendations

### Final saved holdout result
Feature-engineered Random Forest:
- Accuracy: 96.2%
- Precision: 87.0%
- Recall: 90.4%
- F1-score: 88.7%
- AUC: 93.8%

### Key model signals
The saved feature-importance analysis highlights `last_evaluation`, `number_project`, `tenure`, and `overworked` as major predictive variables.

### Important interpretation note
These are predictive signals within an educational dataset. They should not be interpreted as causal explanations or used to automate employment decisions.

### Files
- `Salifort_Motors_Project.ipynb` — technical notebook
- `Executive_Summary.pdf` — concise business-facing summary
- `Job_Proposal.pdf` — freelancing-oriented proposal
- `images/` — selected analysis visuals
