import glob
from subprocess import check_call

files = glob.glob('./*.ipynb')

for file in files:
    print("Converting File:",file)
    check_call(['jupyter', 'nbconvert', '--to', 'html', '--template' ,'basic' , file])