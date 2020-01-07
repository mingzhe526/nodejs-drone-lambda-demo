# project
nodejs-drone-lambda-example

## setp 
### create aws lambda function
helloWorld

### create a aws user and use aws configure
```
aws configure
```
inputs:
- YOUR_AWS_ACCESS_KEY_ID
- YOUR_AWS_SECRET_ACCESS_KEY
- YOUR_REGION


### unit test (mocha)
```
npm test
```

test input data
```
{
  "data": {
    "num1": 1,
    "num2": 2
  }
}
```


### deploy to lambda test
in pakage.json add
```
"deploy": "zip -r function.zip . && aws lambda update-function-code --function-name helloWorld --zip-file fileb://function.zip"
```
run command below to test delopy this lambda function to aws
```
npm run deploy
```

### add .drone.yml and commit source code to github
```
kind: pipeline
name: default

steps:

  - name: test
    image: mhart/alpine-node:12
    commands:
      - npm install      
      - npm test

  - name: zip
    image: alpine
    commands:
      - apk update && apk add zip
      - zip -r function.zip *

  - name: deploy-lambda
    image: mesosphere/aws-cli
    environment:
      AWS_ACCESS_KEY_ID:
        from_secret: aws_access_key_id
      AWS_SECRET_ACCESS_KEY:
        from_secret: aws_secret_access_key
      AWS_DEFAULT_REGION: ap-northeast-1
    commands:
      - aws lambda update-function-code --function-name helloWorld --zip-file fileb://./function.zip

```


### Open cloud drone
https://cloud.drone.io/

1. link your lambda github project: nodejs-drone-lambda-example
2. In nodejs-drone-lambda-example setting page, 

   in 'Secrets' Section, add two secret name / secret value: 
    
     - aws_access_key_id / YOUR_AWS_ACCESS_KEY_ID
     - aws_secret_access_key / YOUR_AWS_SECRET_ACCESS_KEY





