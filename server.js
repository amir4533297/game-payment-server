const express = require("express");

const app = express();

app.use(express.json());

let coins = 500;

// تست
app.get("/", (req, res) => {
    res.json({
        status: "online"
    });
});

// گرفتن تعداد سکه
app.get("/coins", (req, res) => {
    res.json({
        coins: coins
    });
});

// اضافه کردن سکه
app.get("/add", (req, res) => {

    coins += 100;

    res.json({
        coins: coins
    });

});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Started");
});
