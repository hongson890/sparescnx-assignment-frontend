# Sparescnx Assignment Frontend

In this project, I'm gonna build a React Application example with some features, including React Router, ContextAPI, MaterialUI, etc. 
The following functions has been implemented:

- Raise an incident as an admin
- Assign the incident to a user
- Assign the incident to a user
- Delete an incident
- Index incidents (includes filtering, sorting by date created/updated and incident type and paging)
- Responsive Design
- Unit Test, with coverage setup
- ESLint, Typescript

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Make sure you have installed Node.js in your machine, it recommends the Node version 12 and older.

```
# to check node version in your local machine
node -v
```

## Installing & Starting

Please install and start the project by following command:

- Install node_modules by using yarn
```
yarn
```

- Start application
```
yarn start
```

## Running the tests
```
yarn test
```

## Deployment
```
yarn build
```

Builds the app for production to the `build` folder.\

## Docker file
```
docker pull hongson890/sparescnx-assignment-frontend:latest
docker run -d -it  -p 3005:80/tcp --name sparescnx-assignment-frontend hongson890/sparescnx-assignment-frontend:latest
```


## Demo
Using existed account (ADMIN role) to login into system
```
email: admin@gmail.com,
password: 123456
```

## Screenshots
1._Login Page_

![ScreenShot](https://raw.githubusercontent.com/hongson890/sparescnx-assignment-frontend/main/src/screenshots/login.png)

2._List Incidents & Filter_

![ScreenShot](https://raw.githubusercontent.com/hongson890/sparescnx-assignment-frontend/main/src/screenshots/home.png)

3._View Incident detail and assign to the user_

![ScreenShot](https://raw.githubusercontent.com/hongson890/sparescnx-assignment-frontend/main/src/screenshots/assignment.png)

4._Coughdb Console_

![ScreenShot](https://raw.githubusercontent.com/hongson890/sparescnx-assignment-frontend/main/src/screenshots/couchdb.png)



## Authors

* **Son Pham** - *Initial work* - [Son Pham](https://github.com/hongson890)

