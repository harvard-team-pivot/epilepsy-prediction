# Predicting Seizures and Epilepsy Milestones 4 & 5

## Harvard CS 109A

### November 27, 2016

###### Sean Keery & Shivas Jayaram


### Exploring various factors that might affect epilepsy and seizure recurrence

Well since milestone 3, we've obtained more data.  The  EEG and drug study data we used for that milestone was very limited in it's predictive ability for general populations.  The additional data was from the UK data service.  It consisted of the 1958 birth sweep and three more sweeps over the next twenty-one years.  It included almost 1800 variables over 19000 unique cases.  We had gone to the other end of the spectrum.
+However, after inspecting the data, we determined that values for many of the variables were not present.  Due to time constraints, we used means and medians to fill in the absent values.  Input from two ancillary surveys were merged with the original file to enhance demographic components.
After our initial review, we identified some variables which allowed us to categorize subjects with epilepsy or a history of seizures.  Fitting our models based on these categorizations helped us to identify variables with predictive power.  Unfortunately, we had missed some variables which should have been used in our first classification.  So we excluded these from our model too.  After re-fitting, there are still some questions in our minds whether we are able to effectively identify factors in recurrence.  We believe that some of the factors identified through Principal Component Analysis and sklearn feature selection aren't necessarily causes of recurrence.  We will continue to explore this moving forward.

### Milestone 4 - Baseline Models

#### Data Set 1 Thall & Vail

This dataset gives a two-week seizure counts for 59 epileptics. The number of seizures was recorded for a baseline period of 8 weeks, and then patients were randomly assigned to a treatment group or a control group. Counts were then recorded for four successive two-week periods. The subject's age is the only covariate.

#### Data Set 2 NCDS Sweeps 0 to 3

The National Child Development Study (NCDS) originated in the Perinatal Mortality Survey, which examined social and obstetric factors associated with still birth and infant mortality among over 17,000 babies born in Britain in one week in March 1958.  The study has broadened in scope to chart many aspects of the health, educational, and social development of cohort members as they passed through childhood and adolescence. We used results from the first three sweeps (1965 at age 7, 1969 at age 11, 1974 at age 16) in addition to the birth data.

Surviving members of this birth cohort have been surveyed on five more occasions in order to monitor their changing health, education, social and economic circumstances.  We have excluded these datasets at this time in order to establish our baselines models.

##### Models

We have decided that the performance metric to evaluate prediction will be seizure recurrence.

Features extracted using PCA and SelectKBest include:

Linear regression provided us with about sixty percent accuracy using the features we had selected above.

LDA, QDA, Trees and others also provided the same accuracy.

### Milestone 5 - Proposal

Propose methodologies and ideas to be implemented, tested and interpreted for your final project.  Provide a roughly 1 page
outline of what approaches, models, etc. you would like to use for the final project results.

For the final project, we need to work on the following.

#### Data Management

We will supplement the process where we used means and medians to compute missing values.  K-Nearest Neighbor will be used to estimate values for blanks,'none' and 'NA'.  As KNN is compute intensive it will be used for our predictive features only.

We will also separate some of the categorical values which have been encoded as numerical.  This will allow us to better evaluate their effect on our models.  In addition, by recoding them, we can use linear discriminant analysis of the textual data to better categorize factors affecting seizure occurrence into certain groups and with demographics.

#### Feature Selection

Cross-validation will be used to get a more accurate feature set.  The methods we used were valid, but may be biased as we only used a single sample to compute them. Further comparison of ensemble selectors will help us pinpoint the best cluster.

Sweeps will be separated from each other so we can better evaluate correlation between predictors.  It appears that some of our features aren't clearly predictors.  In the case of hospital stays, seizures may be the cause instead of the effect.

#### Models

We can optimize all our models with enhanced cross-validation. Our first pass will leverage KFold for train and test splits.  Another approach we have discussed is to take the per-sweep data and build separate models, then combine them to have a model which can be extended to non-adolescent subjects.

Our linear prediction model can be improved by further distillation of our features as discussed above.  Further gains should be had through better imputation of missing values using KNN.  Our model using logistic regression for categorization can be improved by the recoding above, and should also benefit from feature scrubbing.

#### Sources

Thall, P. F. and Vail, S. C. (1990) Some covariance models for longitudinal count data with over-dispersion. Biometrics 46, 657–671.

University of London. Institute of Education. Centre for Longitudinal Studies. (2014). National Child Development Study: Childhood Data, Sweeps 0-3, 1958-1974. [data collection]. 3rd Edition. National Birthday Trust Fund, National Children's Bureau, [original data producer(s)]. UK Data Service. SN: 5565, http://dx.doi.org/10.5255/UKDA-SN-5565-2
