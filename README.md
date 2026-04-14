# 🟢 Backend — Express / Node.js ToDo API

Backend REST API della ToDo List sviluppato con **Node.js + Express + MySQL**.

## 🚀 Features
- CRUD completo
- connessione MySQL
- gestione stato task
- controller separati
- routes modulari
- JSON REST API

## 🧱 Stack
- Node.js
- Express.js
- MySQL2
- dotenv
- cors
- nodemon

## Server:

http://localhost:3000

## 🔌 Endpoints

GET    /api/todos
POST   /api/todos
PUT    /api/todos/:id
DELETE /api/todos/:id

## 🗄️ Database

CREATE TABLE todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    status ENUM('todo', 'doing', 'done') DEFAULT 'todo',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


## 🎯 Obiettivo

Allenare REST API design, CRUD SQL, debug backend e clean architecture Express.

## ▶️ Avvio
```bash
npm install
npm run dev

📂 Struttura

backend/
├── controllers/
│   └── todoController.js
├── routes/
│   └── todos.js
├── db.js
└── server.js
