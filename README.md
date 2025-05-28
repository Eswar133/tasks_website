# 📝 Task Manager API (Node.js + Express)

This is a beginner-friendly backend project made using Node.js and Express. It lets you create, read, update, and delete tasks—like a mini to-do list app. All the task data is stored in memory, so it resets every time the server restarts.

---

## 🚀 Getting Started

### Prerequisites

* Node.js installed on your system
* A terminal or command prompt

### Setup Instructions

1. **Clone the repo**

```bash
git clone <your-github-repo-url>
cd <your-project-folder>
```

2. **Install required packages**

```bash
npm init -y
npm install express
```

3. **Start the server**

```bash
node index.js
```

By default, the server runs on:

```
http://localhost:3000
```

---

## 📚 API Endpoints

### 🔹 `GET /tasks`

* Get all tasks.
* Optional query parameters:

  * `page` (default: 1)
  * `limit` (default: 10)
  * `sortBy` (e.g., `title`)
  * `order` (`asc` or `desc`, default: `asc`)

**Example Request:**

```
GET /tasks?page=1&limit=5&sortBy=title&order=desc
```

**Example Response:**

```json
{
  "totalTasks": 12,
  "page": 1,
  "limit": 5,
  "tasks": [
    {
      "id": 1,
      "title": "Buy groceries",
      "description": "Milk, Bread, Eggs"
    }
  ]
}
```

---

### 🔹 `GET /tasks/:id`

* Get a single task by its ID.
* Returns 404 if the task is not found.

---

### 🔹 `POST /tasks`

* Create a new task.
* Required fields: `title`, `description`

**Request Body Example:**

```json
{
  "title": "Read a book",
  "description": "Start with chapter 1"
}
```

---

### 🔹 `PUT /tasks/:id`

* Update a task by ID.
* Required fields: `title`, `description`

---

### 🔹 `DELETE /tasks/:id`

* Delete a task by ID.

---

## 🧪 Testing the API

You can test the API using **Postman**. A sample Postman collection file is included:

🧾 `task_website.postman_collection.json`

Just import this file into Postman, and all endpoints will be ready to test!

---

## 🛠️ Behind the Scenes

### How It’s Built

* Created a basic Express server
* Used in-memory array to store task objects
* Each task has: `id`, `title`, and `description`
* Logic written using basic JavaScript functions like `.find()`, `.findIndex()`, `.splice()`, `.sort()`

### Features

* Full CRUD functionality
* Pagination and sorting on task list
* Validation for required fields
* Proper use of HTTP status codes (200, 201, 400, 404)
* Basic error handling

---

