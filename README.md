# Zelaya Roofing
This an app built to help my parents out with their roofing business. It is a web application that allows them to manage customer information, track projects. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Node.js
- npm or yarn

### Installing

A step by step series of examples that tell you how to get a development environment running:

1. Clone the repository:
   ```bash
   git clone https://github.com/DougAlex32/Zelaya-Roofing

   sever dependencies:
   cd server
   npm install

   client dependencies:
   cd zelaya-roofing
   npm install

   start server:
   npm start

   open new terminal, start client:
   npm start

## Screenshots 

# Passport
![Screenshot 2024-02-28 210438](https://github.com/DougAlex32/Zelaya-Roofing/assets/142261380/379bffd2-d3e8-43a0-bfee-c6c8badff193)

# JWT
![Screenshot 2024-02-28 210854](https://github.com/DougAlex32/Zelaya-Roofing/assets/142261380/d457f239-21b3-4305-b4cc-0edf6349d2e8)

# Home webpage
![Screenshot 2024-02-28 211047](https://github.com/DougAlex32/Zelaya-Roofing/assets/142261380/2dc1a2ef-9dde-4da8-9395-5a04951d7931)

# Home moblie page
![Screenshot 2024-02-28 211219](https://github.com/DougAlex32/Zelaya-Roofing/assets/142261380/aafb8f33-cd8b-49cd-8fa1-888b9d541ed0)
![Screenshot 2024-02-28 211237](https://github.com/DougAlex32/Zelaya-Roofing/assets/142261380/4ede6f44-f85e-4932-8913-9c5096cbc6c2)

## WireFrame
![Screenshot 2024-02-22 170516](https://github.com/DougAlex32/Zelaya-Roofing/assets/142261380/33f89230-a9f4-447c-8ec5-b1e012761072)



# Built With

This project is built with the following technologies and frameworks:

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces, used for the frontend development.
- [Node.js](https://nodejs.org/) - A JavaScript runtime built on Chrome's V8 JavaScript engine, used to run JavaScript on the server-side.
- [Express](https://expressjs.com/) - A minimal and flexible Node.js web application framework, used to build the backend API.
- [MongoDB](https://www.mongodb.com/) - A NoSQL database used to store application data.
- [OAuth](https://oauth.net/) - An open standard for access delegation, used for user authentication.
- [React Router](https://reactrouter.com/) - A collection of navigational components that compose declaratively with your application, used for handling routing in the React application.

## Additional Tools and Libraries:

- [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.js, used for data modeling and interaction with MongoDB.
- [dotenv](https://www.npmjs.com/package/dotenv) - A module that loads environment variables from a `.env` file into `process.env`, used for managing environment variables.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - An implementation of JSON Web Tokens for Node.js, used for creating JWTs for secure authentication.



# Application File Structure

```plaintext
server/
│
├── config/             # Configuration files for the server
│   ├── db.js           # Database configuration
│   └── passport.js     # Passport.js authentication configuration
│
├── controllers/        # Controller files to handle logic
│   └── user.js         # User-related business logic
│
├── models/             # Mongoose models for data representation
│   ├── FormSubmission.js  # Model for form submission data
│   ├── Model.js          # General model (ensure to rename appropriately)
│   └── User.js           # Model for user data
│
├── routes/             # API route definitions
│   ├── auth.js         # Routes for authentication
│   ├── form.js         # Routes for form submissions
│   ├── index.js        # Main route index (if used for routing)
│   └── users.js        # Routes for user management
│
├── views/              # Views/templates for server-side rendering (if used)
│   └── users/          # User-related views
│
├── node_modules/       # Node modules (not committed to version control)
│
├── .env                # Environment variables file (not committed to version control)
├── .gitignore          # Specifies intentionally untracked files to ignore
└── index.js            # Entry point for the Express server


zelaya-roofing/
│
├── src/                     # Source files for the React application
│   ├── assets/              # Static assets such as images, fonts, etc.
│   ├── components/          # Reusable components
│   │   ├── AboutUs.js       # Component for the About Us page
│   │   ├── AboutStyles.css  # Styles for the About Us component
│   │   ├── Footer.js        # Footer component
│   │   ├── FooterStyles.css # Styles for the Footer component
│   │   ├── Form.js          # Form component for submissions
│   │   ├── FormStyles.css   # Styles for the Form component
│   │   ├── Hero.js          # Hero section component
│   │   ├── HeroStyles.css   # Styles for the Hero section component
│   │   ├── LoginButton.js   # Login button component
│   │   ├── Navbar.js        # Navigation bar component
│   │   ├── NavbarStyles.css # Styles for the Navbar component
│   │   ├── PrivateRoute.js  # Private route component for protected routes
│   │   ├── Service.js       # Service section component
│   │   └── ServiceStyles.css # Styles for the Service section component
│   ├── routes/              # Components representing pages and their specific routes
│   │   ├── AdminLoginLink.js  # Component for admin login link
│   │   ├── AuthCallbackHandler.js  # Handles authentication callback
│   │   ├── Contact.js       # Contact page component
│   │   ├── Dashboard.js     # Dashboard page component
│   │   ├── Home.js          # Home page component
│   │   ├── Service.js       # Service page component
│   │   └── About.js         # About page component
│   ├── App.js               # Main application component where routes are defined
│   ├── App.test.js          # Tests for the App component
│   ├── index.js             # Entry point for the React application
│   └── index.css            # Global CSS styles
│
├── .gitignore               # Specifies intentionally untracked files to ignore
├── package-lock.json        # Auto-generated file for npm dependencies
└── package.json             # Defines npm behaviors and packages for the project





