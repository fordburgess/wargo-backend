const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World! - Ford")
})

const PORT = process.env.PORT || 5000;

app.listen((PORT), () => {
    console.log("Hello World")
});

module.exports = app