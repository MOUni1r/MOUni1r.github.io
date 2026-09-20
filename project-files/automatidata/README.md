# Automatidata | NYC Taxi Fare & Tipping Analysis

## Portfolio Case Study

This project analyzes an educational NYC taxi dataset from three complementary angles:

1. Whether observed fares differ by payment method.
2. Whether trip-level information can be used to estimate taxi fares.
3. Whether trip characteristics can help identify generous tipping.

The notebook is presented as a portfolio case study and does not represent work performed for Automatidata.

## Dataset

- 22,699 rows
- 18 columns
- No missing values
- 0 duplicate rows

Initial data-quality checks identified negative values in several monetary fields and one negative trip duration. The notebook documents the cleaning rules and verifies the post-cleaning state.

## Statistical Analysis

A Welch two-sample test was used to compare observed fare means between credit-card and cash payment groups.

- Observed mean difference: approximately $1.22
- 95% confidence interval: approximately $0.87 to $1.56
- p-value: approximately 6.8 × 10^-12

The analysis is observational and therefore does not establish that payment method causes the fare difference. A sensitivity analysis restricted to positive fares produced a very similar estimate.

## Fare Regression

The regression workflow compares:

- Linear Regression
- Random Forest
- XGBoost
- Gradient Boosting

Model selection was performed on validation data using MAE. Gradient Boosting was selected.

Final untouched-test performance:

- MAE: $3.55
- RMSE: $16.41
- R²: 0.182

The diagnostics show substantially larger error in the highest-fare segment, which helps explain the gap between MAE and RMSE.

## Generous-Tipping Classification

A Random Forest classifier was selected using cross-validated F1.

Final test performance:

- Accuracy: 0.603
- Precision: 0.456
- Recall: 0.731
- F1: 0.562
- ROC AUC: 0.645

Confusion matrix:

- True positives: 778
- False negatives: 286
- False positives: 927
- True negatives: 1,062

The model is best treated as an exploratory signal rather than a high-confidence customer-level decision rule.

## Key Technical Practices

- Explicit data-quality checks before modeling
- Validation-based model selection
- Untouched test set for final evaluation
- Route-level features learned from the training partition
- Regression diagnostics beyond a single average metric
- Statistical sensitivity analysis
- Clear separation between association and causation
- Documented limitations and production considerations

## Limitations

The dataset is educational. The train/validation/test split is random rather than time-based. Route aggregates can require historical or out-of-fold construction in a production pipeline. Prediction-time availability of tipping-related fields would also need to be verified before operational use.

## Files

- `Automatidata_Project.ipynb` — full technical case study
- `Executive_Summary.pdf` — concise business/technical summary
- `Job_Proposal.pdf` — freelance-oriented project description
- `images/` — selected executed visuals from the notebook
