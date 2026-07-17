const express = require("express");

const app = express();

app.use(express.json());

// تست سرور
app.get("/", (req, res) => {
    res.json({
        status: "online",
        message: "Game Payment Server is Running 🚀"
    });
});

// تست API
app.get("/ping", (req, res) => {
    res.json({
        success: true
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Started On Port " + PORT);
});
