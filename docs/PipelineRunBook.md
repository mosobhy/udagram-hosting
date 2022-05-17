# CircleCI Pipeline for automated deployment
Inside of `.circleci/config.yml` I have configured CircleCI with this application repostitory to be triggered wherever it receives a new commit and start the pipeline

## 1. Orbs
In this section of the `config.yml` file, we list all the application dependancies which will be loaded on the `CircleCI` server and installed in order to be able to serve our application needs. and these dependancies are `Node.js` for the serving all the frontend and backend dependancies, `AWS CLI` for serving the static file hosting on `S3` and uploading the files there, and `EB CLI` for backend deployment to the `EC2` that we have configured using the `AWS console`

```
    node: circleci/node@4.1.0
    aws-cli: circleci/aws-cli@1.3.1
    eb: circleci/amazon-elasitic-beanstalk
```

## 2. Installing the Orbs
Installing the application dependancies such as `Node.js` and `AWS CLi` and `AWS Elastic Beanstalk` on `Cirlce CI` servers

```
    - node/install:
          node-version: "16.13.2"
    - checkout
    - aws-cli/setup
    - eb/setup
```

## 2. jobs
It is comprised of the following steps.
* Install the Frontend dependancies on `circleci`
* this command accesses the main `package.json` file loacted in the root directory, which redirects to the `udagram-frontend/package.json` file, and then executes the installation conmmand `npm install` which will install the frontend dependancies on `circle ci`

```
    - run:
        name: Front-End Install
        command: |
            npm run frontend:install
```

* Install the Backend dependancies on `circleci`
*  this command accesses the main `package.json` file loacted in the root directory, which redirects to the `udagram-api/package.json` file, and then executes the installation conmmand `npm install` which will install the backend dependancies on `circle ci`


```
    - run:
        name: Back-End Install
        command: |
            npm run backend:install
```

* Build the Frontend 
* this command accesses the main `package.json` file located in the root directory, which redirects to the `udagram-frontend/package.json` file, and then executes the build command `ng build` which will package up all the frontend files in a more compact format that is yet readable and performant for the server, it packages it up into the folder `./www` which will be later uploaded to the static web hosting on `S3`

``` 
    - run:
        name: Front-End Build
        command: |
            npm run frontend:build
```

* Build the Backend
* this command accesses the main `package.json` file located in the root directory, which redirects to the `udagram-api/package.json` file, and then it executes the `npm run build` script, which packages up all the server files inside of the `./www` folder where it contanis a `Archive.zip` file which we will later deploy to `Elastic Beanstalk`
```
    - run:
        name: Back-End Build
        command: |
            npm run backend:build

```

* Finally Deploy the Frontend
* This command executes the `aws s3 cp --recusive --acl public-read ./www s3://udagram-bucket123` command, It does the following things upload the files:
    1.  Compress the files inside of `./www` direcotry
    2. upload the zipped file to the `S3` bucket named `udagram-bucket123` which stores our frontend app.
```
    - run:
        name: Deploy Front-End 
        command: |
            npm run frontend:deploy
```

* Deploying the application server on Elastic Beanstalk
* this command executes the `eb deploy udagram-api2-dev` command, which uploads the `Archive.zip` file inside of `udagram-api/www` folder to the `EB environment` that I have created using the `EB CLI`.
```
- run:
    name: Backend Deploy
    command: |
        npm run backend:deploy
```