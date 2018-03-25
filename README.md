3/10/18: This repo can probably be deleted. 

`microqero` has the important Docker info in its solitary Issue.

`microqoder` has the interesting capture-sha-in-code and write to CloudWatch Logs.

3/24/18:
greendots-golang:

  ./bin/rquery <judy access token>
    This creates an Polly audio file and stores it in ~/result.mp3.
    Play the audio file in the Chromebook.

  ./bin/jquery
    This runs an example web page and then plays Billy Abel music.
    Run it like this: http://54.201.97.190:8077/

3/25/18:
editor-mysql:
  Be sure to use the same dbpassword in the next two CF commands:

  aws cloudformation create-stack --stack-name editordb --template-body file://cf.yml --region us-west-2 --parameter ParameterKey=dbusername,ParameterValue=editoruser ParameterKey=dbpassword,ParameterValue=REDACTED

  aws cloudformation create-stack --stack-name editor-EC2 --template-body file://df.yml --region us-west-2 --capabilities CAPABILITY_NAMED_IAM --parameter ParameterKey=dbendpoint,ParameterValue=`aws cloudformation describe-stacks --stack-name editordb --region us-west-2 | jq '.Stacks[].Outputs[0].OutputValue' | sed s/\"//g` ParameterKey=dbpassword,ParameterValue=REDACTED


spryMedia:
  (only exists in today's gocontainer instance)
  cd ~/spryMedia
  
cd /home/ec2-user
git clone https://github.com/craigwongva/editor-mysql

#Populate a database with sample data
curl https://editor.datatables.net/examples/sql/mysql.sql > mysql.sql
sudo yum install mysql -y
#@TODO: Remove hardcoded keditor in next two lines:
echo "create database editordb" | mysql --host=keditor.c7goimpdknhj.us-west-2.rds.amazonaws.com --user=editoruser --password=editorpassword
mysql editordb --host=jeditor.c7goimpdknhj.us-west-2.rds.amazonaws.com --user=editoruser --password=editorpassword < mysql.sql 

#Install NodeJS
# See https://stackoverflow.com/questions/42749326/installing-node-7-on-centos-machine:
curl https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
source ~/.nvm/nvm.sh
nvm install 7
nvm use 7

#Get Editor examples
mkdir spryMedia
aws s3 cp s3://redf4rth-root-oregon/polly-kaitlin/Editor-NodeJS-1.7.3.zip spryMedia/
cd spryMedia
unzip Editor-NodeJS-1.7.3.zip

npm install
sed -i "s/8081, 'localhost',/8081,/" index.js
sed -i "s/new Field('readingOrder').validator(Validate.notEmpty()),/new Field('readingOrder').validator(Validate.notEmpty())/" controllers/sequence.js
cp /home/ec2-user/editor-mysql/db.js .
#-->Replace the four variables in db.js
#7. to run, "npm start"
#http://54.201.97.190:8081/simple/simple.html 

