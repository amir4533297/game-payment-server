const express = require("express");

const app = express();

let coins = 500;


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


// اضافه کردن 100 سکه (تست خرید)
app.get("/add", (req, res) => {

    coins += 100;

    res.json({
        success: true,
        coins: coins
    });

});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Started On Port " + PORT);
});
