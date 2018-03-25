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

spryMedia:
  (only exists in today's gocontainer instance)
  cd ~/spryMedia
  
cd /home/ec2-user

#Populate a database with sample data
curl https://editor.datatables.net/examples/sql/mysql.sql > mysql.sql
sudo yum install mysql
echo "create database editordb" | mysql --host=keditor.c7goimpdknhj.us-west-2.rds.amazonaws.com --user=editoruser --password=editorpassword
mysql editordb --host=jeditor.c7goimpdknhj.us-west-2.rds.amazonaws.com --user=editoruser --password=editorpassword < mysql.sql > output.tab

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

#Do these manually:
#5. vi index.js: remove the extra comma before the )
#6. vi index.js: change the listen command in index.js from "8081, 'localhost', function" to "8081, function"
#7. to run, "npm start"
#http://54.201.97.190:8081/simple/simple.html 

