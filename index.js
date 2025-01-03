const express = require('express')
const dotenv = require('dotenv')
const connectionToDB = require('./Config/db')
const BlogPostsRouters = require('./Routes/BlogPostsRoutes')
dotenv.config()
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors(),{
   origin: [" http://localhost:5173/"]
})
app.use('/posts',BlogPostsRouters)

app.listen(process.env.PORT || 3000,async()=>{
   try {
    await connectionToDB
    console.log(`Server is running on port ${process.env.PORT || 3000}`)
   } catch (error) {
    console.log(error)
   }
})