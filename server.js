require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workout') 

// express app
const app = express()

// middleware
app.use(express.json()) // Inorder to acess the body or data associated to a request.

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts',workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        // Listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB and listening at port', process.env.PORT)
        })  

    })
    .catch((error) => {
        console.log(error)
    })




