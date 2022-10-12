# Demo-credit-api

### Tech Stack
-NodeJS 

-KnexJS ORM

-MySQL database
 
### Postman documentation
https://documenter.getpostman.com/view/16044663/2s83zmMN4Q

#Link to Api
https://fadlullah-lendsqr-be-test.herokuapp.com/v1/lendsqr/

### How to setup project
- Clone the repo and open the folder using vscode or any other ide of choice
- Run npm install in your terminal to install packages in package.json
- Create a config.env file and fill in values for the following variables:
MYSQL_DEV_HOST,
MYSQL_DEV_USER,
MYSQL_DEV_PASSWORD,
MYSQL_DEV_DATABASE,
NODE_ENV,
PORT,
JWT_SECRET,
JWT_EXPIRES_IN,
-Finally run npm start in your terminal

### Endpoints
The following endpoints are available on this server:
- `/user/signup`: registers a new user.
- `/user/login`: logs in a user.
- `/user/createPin`: to create a user's transacting pin.
- `/user/Profile/`: to get a user's profile.
- `/user/All`: to get all users.
- `/wallet/deposit` :  to deposit funds into a user's account.
- `/wallet/transfer` :  to transfer funds from a user's account into another account.
- `/wallet/withdraw`: to withdraw funds from a user account.
- `/transactions/account-statement`: to get a user transaction history
