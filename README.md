3/10/18:

`microqero` has the important Docker info in its solitary Issue.

`microqoder` has the interesting capture-sha-in-code and write to CloudWatch Logs.

3/24/18:
greendots-golang:

  ./bin/rquery <judy access token>
    This creates Polly mp3 files and stores them in ~environment/greendots-golang/static/img/.

3/25/18:
editor-mysql:
  Be sure to use the same dbpassword in the next two CF commands:

```
# Create editordb in RDS.
aws cloudformation create-stack --stack-name editordb --template-body file://cf.yml \
    --region us-west-2 --parameter ParameterKey=dbusername,ParameterValue=editoruser \       
    ParameterKey=dbpassword,ParameterValue=REDACTED
```

```
# Create yacback (both Datatables/Express and supporting Golang).
aws cloudformation create-stack --stack-name editor-EC2 --template-body file://df.yml \
    --region us-west-2 --capabilities CAPABILITY_NAMED_IAM \
    --parameter ParameterKey=IP22,ParameterValue=`curl 169.254.169.254/latest/meta-data/public-ipv4` \      
    ParameterKey=dbendpoint,ParameterValue=`aws cloudformation describe-stacks --stack-name editordb --region us-west-2 | jq '.Stacks[].Outputs[0].OutputValue' | sed s/\"//g` \
    ParameterKey=IP8081,ParameterValue=REDACTED ParameterKey=dbpassword,ParameterValue=REDACTED \
    ParameterKey=githubpassword,ParameterValue=REDACTED
```
The above stack creation succeeds without intervention, i.e. its student.html connects with the :8077 server accessing the mysql database.

To check:
* ssh in
* `ps -ef | grep "node index.js"`
* `ps -ef | grep yacback`


  To run manually:

```
cd ~/editor-mysql/scotSpryMedia
node index.js
```

I don't know what this is:
```
http://yacback.redf4rth.net:8081/inline-editing/mytab.html
```

```
http://yacback.redf4rth.net:8081/inline-editing/student.html
http://yacback.redf4rth.net:8081/inline-editing/admin.html
```

```
# Starting the db takes about six minutes.
aws rds start-db-instance     --db-instance-identifier editordb

aws rds describe-db-instances --db-instance-identifier editordb | \
    jq '.DBInstances[0].DBInstanceStatus' | sed s/\"//g

mysql editordb \
    --host=`aws rds describe-db-instances --db-instance-identifier editordb | \
    jq '.DBInstances[0].Endpoint.Address' | sed -e "s/\"//g"` \
    --user=editoruser --password=REDACTED
```

```
cd editor-mysql
./init-cloud9 <browser IP address> <editordb password> <AWS password for Polly>
```

If you are updating the Go, then kill the existing Go process, and re-run as follows:
```
ps -ef | grep yacback
#-->Kill the yacback job.
cd greendots-golang
export GOROOT=/usr/local/go
export GOPATH=/home/ec2-user/environment/greendots-golang
export PATH=$PATH:$GOROOT/bin
go install yacback
./bin/yacback <editordb password>
```

http://yacback.redf4rth.net:8077/static/img/student.html
http://yacback.redf4rth.net:8077/static/img/admin.html
