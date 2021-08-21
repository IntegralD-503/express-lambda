const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Hola Mundo!');
});

const port = 8080;
app.listen(port, () => {
    console.log(`Server Started at httpL//localhost:${port}`);
});

module.exports = app;