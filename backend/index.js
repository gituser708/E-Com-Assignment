//require('dotenv').config({ quiet: true });
const express = require('express');
const mongoose = require('mongoose');
const cartRouter = require('./routes/cartRoute');
const cors = require('cors');


const app = express();
app.use(
    cors({
        origin: "http://localhost:5173"
    })
);
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.use('/api/cart', cartRouter);

mongoose.connect('mongodb+srv://donmania999_db_user:PIKMK15HRWtkPR6d@demo-cluster.f0kw8be.mongodb.net/E-Com-Assignment')
    .then((res) => {
    console.log(`Mongo DB Connected to: ${res.connection.name}`);
}).catch((err) => {
    console.error(err);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));

