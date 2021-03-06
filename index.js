const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({message: "hello world"})
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server up and running on ${PORT}`);
})