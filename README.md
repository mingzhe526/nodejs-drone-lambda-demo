# project
nodejs-drone-lambda-example

## setp 
### create aws lambda function

### create a aws user and use aws configure
```
aws configure
```
YOUR_AWS_ACCESS_KEY_ID
YOUR_AWS_SECRET_ACCESS_KEY
YOUR_REGION

### deploy to lambda test
npm run deploy
```
"deploy": "zip -r function.zip . && aws lambda update-function-code --function-name helloWorld --zip-file fileb://function.zip"
```

### commit source code to github


### Open cloud drone
https://cloud.drone.io/

1. link your lambda github project: nodejs-drone-lambda-example
2. In nodejs-drone-lambda-example setting page, 

   in 'Secrets' Section, add two secret name / secret value: 
    
     aws_access_key_id / YOUR_AWS_ACCESS_KEY_ID
     aws_secret_access_key / YOUR_AWS_SECRET_ACCESS_KEY





