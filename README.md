# Dockerized Node.js Application 🚀

## Project Overview

A simple Node.js REST API containerized using Docker.
The application runs with MongoDB using Docker Compose.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Docker
- Docker Compose

## Project Structure

dockerized-node-app

├── Dockerfile
├── docker-compose.yml
├── README.md

└── app
    ├── server.js
    ├── package.json
    ├── package-lock.json
    └── .env


## Run Project

### Build Docker Image

docker compose build


### Start Containers

docker compose up


### Stop Containers

docker compose down


## API Endpoint

GET /

Response:

Dockerized Node.js Application Running 🚀


GET /api/status

Response:

{
 "status":"success",
 "message":"Application running inside Docker"
}


## Docker Containers

Application Container:
- Node.js
- Port: 5000

Database Container:
- MongoDB
- Port: 27017