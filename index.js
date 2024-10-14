const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const userRouter = require('./Routers/users.router');

app.get('/', function(req, res) {
    res.send('welcome');
})

app.use(bodyParser.json());
app.use('/api/users', userRouter);


app.listen(3002, function() {
    console.log('Server is running on port no 3002')
})

const dburl = "mongodb+srv://aniketkarangale75:J747vYAqf8EU0p4M@cluster0.4japkbu.mongodb.net/User?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(dburl).then(res => {
    console.log('DB connected')
}).catch(err => {
    console.log('Unable To connect to db');
})

