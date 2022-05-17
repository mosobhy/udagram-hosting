# CircleCI Pipeline for automated deployment
Inside of `.circleci/config.yml` I have configured CircleCI with this application repostitory to be triggered wherever it receives a new commit and start the pipeline

## 1. Orbs
Installing the application dependancies such as `Node.js` and `AWS CLi`
```
    node: circleci/node@4.1.0
    aws-cli: circleci/aws-cli@1.3.1
```
## 2. jobs
It is comprised of the following steps.
* Install the application dependancies on `circleci`

```
    - node/install:
          node-version: "16.13.2"
    - checkout
    - aws-cli/setup
```

* Install the Frontend dependancies on `circleci`

```
    - run:
        name: Front-End Install
        command: |
            npm run frontend:install
```

* Install the Backend dependancies on `circleci`
```
    - run:
        name: Back-End Install
        command: |
            npm run backend:install
```

* Build the Frontend 
``` 
    - run:
        name: Front-End Build
        command: |
            npm run frontend:build
```

* Build the Backend
```
    - run:
        name: Back-End Build
        command: |
            npm run backend:build

```

* Finally Deploy the Frontend
```
    - run:
        name: Deploy Front-End 
        command: |
            npm run frontend:deploy
```