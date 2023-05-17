# MERN JWT Auth Job Tracker

This is a full-stack web application that allows users to track job applications and interviews. The application is built using the MERN stack (MongoDB, Express, React, Node.js) and JWT authentication.

## Features

-   User authentication and authorization using JWT tokens
-   Ability to register and login
-   Create, read, update, and delete job applications and interviews
-   Filter and sort job applications by status, company, and date
-   Pagination and infinite scrolling for job applications list
-   Responsive design using Bootstrap 4

## Requirements

-   Node.js and npm
-   MongoDB instance (local or cloud-based)

## Getting started

1. Clone the repository:

```
git clone https://github.com/arnoldsouth/mern-jwt-auth-job-tracker.git
```

2. Navigate to the project directory:

```
cd mern-jwt-auth-job-tracker
```

3. Install server dependencies:

```
npm install
```

4. Navigate to the client directory:

```
cd client
```

5. Install client dependencies:

```
npm install
```

6. In the root directory, create a .env file and add the following environment variables:

```
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
```

7. Start the development server:

```
npm run server
```

8. Open your browser and go to http://localhost:5000 to view the application.

## Deployment

To deploy the application to a production environment, you can use a cloud platform like Heroku. Make sure to set the MONGO_URI and JWT_SECRET environment variables in your cloud provider's dashboard.

### License

This project is licensed under the MIT License - see the LICENSE file for details.
