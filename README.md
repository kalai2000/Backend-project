ShoppyGlobe Backend - Node.js and Express API
Overview
This repository contains the backend for the e-commerce platform, built using Node.js, Express.js, and MongoDB. The API allows users to manage products, add items to their shopping cart, update cart items, and remove them. Additionally, it includes user registration and authentication using JWT.

Table of Contents
Technologies Used

API Endpoints

Database Schema

Authentication

Error Handling and Validation

Testing with ThunderClient

Setup and Installation

Contribution Guidelines

Technologies Used
Node.js: JavaScript runtime used to build the server.

Express.js: Web framework for Node.js.

MongoDB: NoSQL database to store product and cart data.

Mongoose: ODM for MongoDB to manage database operations.

JWT: For user authentication and authorization.

API Endpoints
1. Product Endpoints
GET /products
Fetch a list of all products from the MongoDB database.

Response: A list of products with their details (ID, name, price, description, stock quantity).

GET /products/:productId
Fetch the details of a single product by its ID.

Parameters:

productId: The ID of the product to fetch.

Response: Details of the specified product (ID, name, price, description, stock quantity).

2. Cart Endpoints
POST /cart
Add a product to the cart.

Body:

json
Copy
Edit
{
  "productId": "productId_here",
  "quantity": 2
}
Response: A message confirming the product has been added to the cart.

PUT /cart/:productId
Update the quantity of a product in the cart.

Parameters:

productId: The ID of the product to update.

Body:

json
Copy
Edit
{
  "quantity": 3
}
Response: A message confirming the quantity update.

DELETE /cart/:productId
Remove a product from the cart.

Parameters:

productId: The ID of the product to remove.

Response: A message confirming the product has been removed from the cart.

Database Schema
1. Product Schema
js
Copy
Edit
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  stockQuantity: { type: Number, required: true }
});
2. Cart Schema
js
Copy
Edit
const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true, min: 1 }
  }]
});
Authentication
JWT Authentication
POST /register: Register a new user by providing a username and password.

POST /login: Log in an existing user and receive a JWT token.

The JWT token is used to protect cart routes, ensuring only authenticated users can access them.

Example Request for JWT Login:
json
Copy
Edit
{
  "username": "user123",
  "password": "password123"
}
The response will return a JWT token:

json
Copy
Edit
{
  "token": "your_jwt_token"
}
This token should be added to the Authorization header in subsequent requests to cart routes:

makefile
Copy
Edit
Authorization: Bearer <your_jwt_token>
Error Handling and Validation
All API routes include error handling for scenarios like missing products, invalid data, and failed authentication.

Input data is validated to ensure required fields are provided and correctly formatted.

Testing with ThunderClient
Install and configure ThunderClient or Postman to test the API.

POST/register: Register a user with a username and password.

POST/login: Log in with the username and password to receive a JWT token.

GET/products: Fetch the list of all products.

GET/products/:productId: Fetch a specific product by ID.

POST/cart: Add a product to the cart.

PUT/cart/:productId: Update a product's quantity in the cart.

DELETE/cart/:productId: Remove a product from the cart.

Setup and Installation
1. Clone the repository:
bash
Copy
Edit
git clone https://github.com/kalai2000/Backend-project.git

2. Install dependencies:
bash
Copy
Edit
cd shoppyglobe-backend
npm install
3. Start the server:
bash
Copy
Edit
npm run dev
The server will run on http://localhost:3000.

4. MongoDB Setup:
Ensure you have MongoDB running locally or use a cloud MongoDB service like MongoDB Atlas. Update the MongoDB connection string in server.js if necessary.
