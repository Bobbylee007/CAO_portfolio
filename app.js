// import
const express = require('express')
const app = express()
//routes
const authRouter = require('./routes/auth')
const projectsRouter = require('./routes/project')







// app.get('/', (req, res)=>{
//     res.send('<h1>CAO Portfolio</h1>')
// })

// middleware


//routes
app.use('/api/v1/auth/', authRouter)
app.use('/api/v1/projects', projectsRouter)



const port = 3000

const start = () => {
 try {
     app.listen(port, console.log(`Server is listening to ${port}...`))
    } catch (error) {
    console.log(error)
 }
}

start()