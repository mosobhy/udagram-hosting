
# Application Infrastructure

## 1. PostgreSQL on RDS (Relation Database Service)
Its a `postgreSQL` database engine that is hosted on `Amazon Web Services`, and it connects on the port `5342` and to the main database `postgres`


## 2. Nodejs on EB (Elastic Beanstalk)
The main application server and API that is the frontend is going to use to post images and do login and register is host on `EC2` on `AWS` due to its elasticity and autoscaling capabilities


## 3. Frontend on S3 (Simple Store Service)
The frontend static files that is writen using `Angular` is hosted on an `S3` bucket that has `public access` ACL to allow public users from accessing our application


## 4. Media storage on S3
The images and photos that the users are going to post will be stored inside of another `S3` bucket


