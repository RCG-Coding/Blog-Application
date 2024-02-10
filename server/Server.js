const express = require('express');
const app = express();
const port = 1000;

app.use(express.json());




app.listen(port,() => {
    console.log(`App is running on ${port}`);
});