const path = require('path')
const express = require('express')
const cors = require('cors')
const session = require('express-session')
const userRouter = require('./router/userRouter')
const passport = require('passport')
require('./database/mongoose')

const app = express()
const port = process.env.PORT || 5000

 
app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use(passport.session())
// app.use(session({
//     secret: 'alsfjasdsfd',
//     resave:true,
//     saveUninitialized:false
// }))


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})