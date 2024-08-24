// npm init -y (create package.json)
// npm install express
//npm install dotenv
// npm install -g nodemon
// nodemon server.js
// npm run dev (After defining dev in package.json)


require('dotenv').config()
const express = require('express')

// express app
const app = express()

// routes
app.get('/',(req,res) => {
    res.json({msg: 'Welcome to the app'})
})


// Listen for requests
app.listen(process.env.PORT,() => {
    console.log('Listening at port 4000')
})

