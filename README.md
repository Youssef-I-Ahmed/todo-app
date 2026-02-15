# 📝 To-Do List API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black)

A simple backend REST API built with Node.js & MongoDB demonstrating
default values in Mongoose schemas.

------------------------------------------------------------------------

## 🚀 Features

-   Create Tasks
-   Retrieve All Tasks
-   Automatic default value for `isCompleted`

------------------------------------------------------------------------

## 📌 API Endpoints

### ➤ Create Task

POST `/api/tasks`

Request:

``` json
{
  "title": "Study Node.js"
}
```

Response:

``` json
{
  "success": true,
  "data": {
    "_id": "...",
    "title": "Study Node.js",
    "isCompleted": false
  }
}
```

------------------------------------------------------------------------

### ➤ Get All Tasks

GET `/api/tasks`
