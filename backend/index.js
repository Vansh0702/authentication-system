const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;

// ✅ Allow your frontend URL here
app.use(cors({
    origin: 'https://authentication-system-ui.vercel.app', // Replace with your deployed frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use(bodyParser.json());
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});
