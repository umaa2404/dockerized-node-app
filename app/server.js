const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());


mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});


app.get("/", (req, res) => {
    res.send("Dockerized Node.js Application Running 🚀");
});


app.get("/api/status", (req, res) => {
    res.json({
        status: "success",
        message: "Application running inside Docker"
    });
});


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});