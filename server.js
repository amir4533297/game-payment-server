const express = require("express");

const app = express();

app.use(express.json());

let coins = 0;

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
app.post("/addcoins", (req, res) => {

    const amount = req.body.amount;

    coins += amount;

    res.json({
        success: true,
        coins: coins
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Started");
});
