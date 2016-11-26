# Predicting Seizures and Epilepsy Milestones 4 & 5

## Harvard CS 109A

### November 27, 2016

###### Sean Keery & Shivas Jayaram

### Exploring various factors that might affect epilepsy and seizure recurrence

#### Milestone 4 - Proposal

Propose methodologies and ideas to be implemented, tested and interpreted for your final project.

Provide a roughly 1 page
outline of what approaches, models, etc. you would like to use for the final project results.

Data Set 1 Thall & Vail

This dataset gives a two-week seizure counts for 59 epileptics. The number of seizures was recorded for a baseline period of 8 weeks, and then patients were randomly assigned to a treatment group or a control group. Counts were then recorded for four successive two-week periods. The subject's age is the only covariate.

Data Set 2 NCDS Sweeps 0 to 3

The National Child Development Study (NCDS) originated in the Perinatal Mortality Survey, which examined social and obstetric factors associated with still birth and infant mortality among over 17,000 babies born in Britain in one week in March 1958.  The study has broadened in scope to chart many aspects of the health, educational, and social development of cohort members as they passed through childhood and adolescence. We used date collected during the first three sweeps (1965 at age 7, 1969 at age 11, 1974 at age 16) in addition to the birth data.

Surviving members of this birth cohort have been surveyed on five more occasions in order to monitor their changing health, education, social and economic circumstances.  We have excluded these datasets at this time in order to establish our baselines models.



#### Milestone 5 - Baselines

Fit a specic model provided in your
project topic's guidelines, provide the results from Python along with a roughly half page
write-up of what you notice. Visuals are helpful here too.

• Decide on the performance metric to evaluate prediction.
• Feature extraction: Extract a set of basic features from past data
• Implement the following baseline techniques:
o Linear regression: Train a linear regression model on features extracted from seizure data.
o Logistic regression: Using logistic regression to predict the occurrence of subsequent seizures following the first occurrence.
o Linear discriminant analysis: Using LDA to parse the textual data and categorize factors effecting seizure occurrence into certain groups and with demographics.


#### Sources

Thall, P. F. and Vail, S. C. (1990) Some covariance models for longitudinal count data with over-dispersion. Biometrics 46, 657–671.

University of London. Institute of Education. Centre for Longitudinal Studies. (2014). National Child Development Study: Childhood Data, Sweeps 0-3, 1958-1974. [data collection]. 3rd Edition. National Birthday Trust Fund, National Children's Bureau, [original data producer(s)]. UK Data Service. SN: 5565, http://dx.doi.org/10.5255/UKDA-SN-5565-2
