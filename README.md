# 🐳 Dockerized Node.js Application

![CI/CD Pipeline](https://github.com/umaa2404/dockerized-node-app/actions/workflows/ci-cd.yml/badge.svg)

A Node.js application containerized using Docker with MongoDB integration and automated CI/CD pipeline using GitHub Actions.

This project was developed as part of my **DevOps Internship Task** to understand real-world DevOps practices including containerization, image management, Docker Compose, Docker Hub deployment, and CI/CD automation.

---

# 📌 Project Overview

This project demonstrates how to:

- Containerize a Node.js application using Docker
- Create optimized Docker images
- Run multiple services using Docker Compose
- Connect Node.js application with MongoDB container
- Push Docker images to Docker Hub
- Automate build and deployment workflow using GitHub Actions

---

# 🚀 Technologies Used

- Node.js
- Express.js
- MongoDB
- Docker
- Docker Compose
- Docker Hub
- GitHub Actions
- WSL 2

---

# 📂 Project Structure

<img width="1465" height="715" alt="WhatsApp Image 2026-06-27 at 6 43 00 PM" src="https://github.com/user-attachments/assets/3c043238-7a74-4f44-b2f0-b6bc810f8e52" />



## API Response

Add screenshot of:

```
http://localhost:5000/api/status
```

showing successful API response.
<img width="946" height="870" alt="WhatsApp Image 2026-06-27 at 6 44 16 PM" src="https://github.com/user-attachments/assets/d1b0519f-07c3-4dd7-afd7-a05f935c77d7" />



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
## Docker Deployment

Docker image:

umamani24/dockerized-node-app

Run container:

docker run -d -p 5000:5000 --name node-app umamani24/dockerized-node-app


Application runs on:

http://localhost:5000
⭐ If you find this project useful, feel free to star the repository!
