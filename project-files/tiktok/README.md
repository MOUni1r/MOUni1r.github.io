# TikTok Claims Classification | Portfolio Case Study

## Overview
This project develops a machine learning workflow to classify reported TikTok videos as **claims** or **opinions**. The analysis combines exploratory analysis, statistical testing, NLP feature extraction, model comparison, validation, final holdout evaluation, and model interpretation.

## Business question
Can the available video, engagement, author, and transcription features distinguish claims from opinions well enough to support review prioritization?

## Workflow
1. Data inspection and quality assessment
2. Missing-value handling
3. Exploratory analysis of claim status and engagement
4. Welch's two-sample t-test
5. Logistic regression analysis of verification status
6. Transcription-length feature analysis
7. Stratified train/validation/test split
8. CountVectorizer with unigrams and bigrams
9. Random Forest and XGBoost with cross-validation
10. Validation-based model selection
11. Final test evaluation
12. Feature importance and business interpretation
13. Model artifact export

## Executed results
- Original dataset: **19,382 rows × 12 columns**
- Incomplete records removed: **298**
- Modeling dataset after cleaning: **19,084 rows**
- Claim videos: **9,608**
- Opinion videos: **9,476**
- CountVectorizer vocabulary: **4,014 features**
- Final Random Forest: **99.95% accuracy, 100.00% precision, 99.90% recall, 99.95% F1**
- Final test observations: **3,817**
- Final test errors: **2**

## Interpretation
The final model shows an extremely strong predictive signal within this dataset. Model-based feature importance is dominated by engagement variables, particularly video views and likes. This describes how the trained model uses the available variables; it is not evidence that engagement causes claim status.

## Limitations
The dataset is simulated for educational purposes. In a real deployment, the availability timing of engagement variables would need to be checked to avoid temporal leakage. Additional real-world evaluation would be required before deployment.
