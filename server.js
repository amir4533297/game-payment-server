const express = require("express");

const app = express();

app.use(express.json());

let coins = 700;


// تست آنلاین بودن سرور
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


// خرید سکه (فعلاً تستی)
app.get("/buy", (req, res) => {

    coins += 100;

    res.json({
        success: true,
        message: "Coins Added",
        coins: coins
    });

});


// اضافه کردن سکه با مقدار دلخواه (فعلاً تست)
app.post("/addcoins", (req, res) => {

    const amount = req.body.amount || 0;

    coins += amount;

    res.json({
        success: true,
        coins: coins
    });

});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log("Server Started On Port " + PORT);

});
