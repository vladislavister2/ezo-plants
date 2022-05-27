# ezo-plants

## Description
This is a project for a e-shop named "Ezo Plants". It would have a product menu, user authorization and shopping cart.

## Roles
1) User 
    -logged in user - can spectate last buyed products and earn a discount
    -not logged in user - can only view the website content
2) Admin: manages the system

## User
User has following options:

-Register
-View products
-Use search
-Registered:
-Login
-Logged in:
-View the last purchases
-Earn a discount
-Delete his account
-Change his password
    
## Admin
Admin has following rights and options:

-Add new admins (give the user admin rights)
-Change his and others password
-Change the products description
-Delete other users account

## Tech Stack
-Nest.js + TypeScript

Nest.js is a progressive Node.js framework, which extends frameworks like Express by adding modular organization. The use of modular structure simplifies the division of the project into separate blocks. It uses TypeScript which enabless developers to add types to our variables and provides compile errors and warnings based on them.

-MongoDB + Mongoose

MongoDB is not using tables for relationships. Data is stored in the form of JSON style document - structure of a single object is clear. Also MongoDB is easy to scale. Mongoose is an object document modeling layer that sits on top of Node's MongoDB driver. It has built in validation for schema definitions. Mongoose defines a schema for your data models so your documents follow a specific structure with pre-defined data types.
