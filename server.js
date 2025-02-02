const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/process', (req, res) =>{
    const username = req.body.username;
    const pw = req.body.pw;

    // connect to database and check for duplicate username here

    res.json({
        status: 'success',
        message: 'Valid username selected, account created'
    });
});



// start server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});