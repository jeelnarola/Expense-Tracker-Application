# Expense Tracker Application

## Running the Server
##### Start the server on PORT 9090. Ensure strict adherence to this port number.


## Project Overview
##### You are tasked with building an API for a Expense Tracker Application The project should include the following features.
- Register And Login JWT use and cooike set.
- CURD Operation performance.   
- Upload CSV File.
- Role Base Asscess.

## Follow these instructions strictly.

### Implement in MVC Structure.
#### Database Connection.
1. Create a 'configs' folder. Inside this folder, create a file named 'db.js'. Write logic to connect to MongoDB using an online database such as MongoDB Atlas.

#### Database Schema Design.
2. Create a 'models' folder.
    - create a file named 'auth.models.js' with the following schema.

```
 username,
email,
password,
role:{
    type:String,
    enum: ["user", "admin"], // Define allowed roles
    default: "user",
}
```

3. create a file named 'expense.models.js' with the following schema.
```
userId:{
    type:mongoose.Schema.Types.ObjectId,ref:'User',required:true // Your User Schema Id And Ref...
},
category,
amount,
description,
date:{
    type:Date
},
type

```

## Sign Up and Login

### Sign Up - POST route
- Endpoint: Create a POST route at ```/api/auth/register```.
- After a successful Sign, set cookies in the browser with the user's Token.
- Within the form, provide the following input fields with corresponding IDs:
    - username
    - password
    - email
    - role

### Login - POST route
- Create a POST route named ```/api/auth/login```.
- Within the form, provide the following input fields with corresponding IDs:
    - email
    - password
- After a successful login, set cookies in the browser with the user's Token.

## Expense Tracker Application API EndPoint.

### GET route :- All Expense Show.
- Create a GEt route named ```/api/expense/show```.
- Filter Data, SortBy And Add Pagenation.

### POST route :- Expense Create.
- Create a Post route at ```/api/expense/bulk-upload```.
- send a response containing all available event.
- CSV File Upload.

### PATCH route :- Expense Update.
- Create a PATCH route at ```/api/expense/update/:id```.
- send a response containing all available event.
- find id and Update A Freelancer Project.

### DELETE route :- Expense Delete.
- Create A Delete route at ```/api/expense/delete```.
- Multiple Delete Expense.

## Routes
### User || Auth.
| Method   | EndPoint | Description |
|----------|----------|----------|
| ```POST```    | ```/api/auth/register```   | User Register .   |
| ```POST```    | ```/api/auth/login```   | User Login..   |    

### Expense Tracker Application API EndPoint.

| Method   | EndPoint | Description |
|----------|----------|----------|
| ```GET```    | ```/api/expense/show```   | Expense Fetch all items.   |
| ```POST```    | ```/api/expense/bulk-upload```   | Expense Create .   |
| ```PATCH```    | ```/api/expense/update/:id```   | Expense Update..   |
| ```DELETE```    | ```/api/expense/deletee```   | Expense Delete Multiple..   |

## Setup and Installation

### Steps:

1. Clone the repository.
```
git clone <repository-url> 
```

2. Install dependencies.
```
npm install
```

3. Create a .env file and add your MongoDB connection string.
``` bash 
PORT=9090
MONGODB_URL=mongodb+srv://ExpenseTracker:ExpenseTracker@cluster0.dgwjmgh.mongodb.net/ExpenseTracker?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=MY_JWT_SECRET_QUIZ_APPLICATION

```

4. Start the server

``` 
npm start
```