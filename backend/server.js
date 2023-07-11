const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const session = require('express-session')
const cookieParser = require('cookie-parser')

require('dotenv').config()

const app = express()
app.use(express.json())

app.use(cors({
    origin: "http://localhost:3001",
    credentials: true
}))

app.use(session({
    secret: "mySecret",
    resave: false,
    saveUninitialized: false
}))

app.use(cookieParser("mySecret"))

//basic user routes
app.post('/register', async(req,res) => {
    console.log(req.body)
})

app.post('/login', async(req,res) => {
    console.log(req.body)
})

app.get('/user', async(req,res) => {
    console.log(res)
})









//Database configurations
const password = process.env.password
const PORT =  process.env.PORT

const DATABASE_URL = `mongodb+srv://simplecodes2580:${password}@cluster0.m6zj2xz.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})

