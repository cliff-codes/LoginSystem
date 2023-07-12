const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const session = require('express-session')
const cookieParser = require('cookie-parser')
const User = require('./userModel')
const passport = require('passport')
const bcrypt = require('bcryptjs')

require('dotenv').config()

const app = express()
app.use(express.json())

app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true
}))

app.use(session({
    secret: "mySecret",
    resave: false,
    saveUninitialized: false
}))
app.use(cookieParser("mySecret"))
app.use(passport.initialize())
app.use(passport.session())
require('./passportConfig')(passport)


//basic user routes
app.post('/register', async(req,res) => {
    try {
      const myemail = req.body.userEmail

      const doc = await User.findOne({email : myemail})
      console.log(`doc is ${doc}`)
      if(doc) { 
        console.log(doc)
        throw new Error("User Already exists")
      }
      console.log(req.body.userPassword)
      const hashedPassword = await bcrypt.hash(req.body.userPassword,10)

      const newUser = new User({ 
        email : myemail,
        password : hashedPassword
      })

      await newUser.save()
      res.status(201).send("New User Registered")

    } catch (error) {
      console.log(error)
    }
})

app.post('/login', (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) {
      res.send("No User Exist");
    } else {
      req.login(user, (err) => {
        if (err) throw err;
        res.send("User authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});


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

