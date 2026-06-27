# 🐳 Dockerized Node.js Application

## 📌 Project Overview

This project demonstrates how to containerize a Node.js web application using Docker.

The application runs inside a Docker container and connects with a MongoDB database running in a separate container using Docker Compose.

This project was created as part of my **DevOps Internship Task** to understand and implement:

- Docker Containerization
- Docker Images
- Docker Containers
- Docker Compose
- Multi-stage Docker Builds
- Application and Database Container Communication


---

# 🚀 Technologies Used

- Node.js
- Express.js
- MongoDB
- Docker
- Docker Compose
- WSL 2


---

# 📂 Project Structure

```
dockerized-node-app

│
├── Dockerfile
├── docker-compose.yml
├── README.md
│
└── app
    │
    ├── server.js
    ├── package.json
    ├── package-lock.json
    └── .env
```

---

# 🐳 Docker Implementation

## Dockerfile

This project uses a **multi-stage Docker build**.

### Stage 1: Builder

- Uses Node.js Alpine image
- Installs application dependencies
- Copies application source code


### Stage 2: Production

- Creates a lightweight Node.js image
- Copies required files from builder stage
- Runs the Node.js application


---

# ⚙️ Prerequisites

Before running this project, make sure you have installed:

- Docker Desktop
- Docker Compose


Check Docker installation:

```bash
docker --version
```

Check Docker Compose:

```bash
docker compose version
```


---

# 🔧 Installation and Setup

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate to the project directory:

```bash
cd dockerized-node-app
```


---

# 🔨 Build Docker Containers

Build the Docker images:

```bash
docker compose build
```


---

# ▶️ Run Application

Start the containers:

```bash
docker compose up
```


The application will run on:

```
http://localhost:5000
```


MongoDB will run on:

```
localhost:27017
```


---

# 🛑 Stop Application

To stop all running containers:

```bash
docker compose down
```


---

# 📡 API Endpoints

## 1. Home Route

### GET /

Response:

```
Dockerized Node.js Application Running 🚀
```


---

## 2. Application Status API

### GET /api/status

Response:

```json
{
    "status": "success",
    "message": "Application running inside Docker"
}
```


---

# 🐋 Docker Containers

This project contains two containers:


## 1. Node.js Application Container

```
Container:
dockerized-node-app-app

Port:
5000:5000
```


## 2. MongoDB Database Container

```
Container:
mongo

Port:
27017:27017
```


---

# 📸 Screenshots

## Running Docker Containers

Add screenshot of:

```
docker ps
```

showing running containers.


## API Response

Add screenshot of:

```
http://localhost:5000/api/status
```

showing successful API response.


---

# 🎯 Learning Outcomes

Through this project, I learned:

✅ How to containerize a Node.js application using Docker

✅ Creating and using Dockerfiles

✅ Implementing multi-stage Docker builds

✅ Running multiple services using Docker Compose

✅ Connecting Node.js applications with MongoDB containers

✅ Managing Docker images and containers

✅ Exposing application ports using Docker


---

# 📁 Docker Commands Used

Build image:

```bash
docker compose build
```


Run containers:

```bash
docker compose up
```


Check running containers:

```bash
docker ps
```


Stop containers:

```bash
docker compose down
```


Remove unused Docker resources:

```bash
docker system prune
```


---

# 👨‍💻 Author

**Uma Mani**

DevOps Internship Project

---

⭐ If you find this project useful, feel free to star the repository!
