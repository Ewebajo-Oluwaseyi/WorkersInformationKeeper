const express = require('express');
<<<<<<< HEAD
const connectDB = require('./config/db');
const path = require('path')

const app = express();

//connect database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));



//Define routes
app.use('/api/Users', require('./routes/Users'));
app.use('/api/Information', require('./routes/Information'));
app.use('/api/Auth', require('./routes/Auth'));

//serve ract in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('frontend/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build','index.html')))
} 

const PORT = process.env.PORT || 5000;    

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
=======

const app = express();


app.get('/', (req, res) => res.json({msg: "welcome to workers info keeper"}));

//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/information', require('./routes/information'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server started'));
>>>>>>> 8866009 (Express server with initial routes)
