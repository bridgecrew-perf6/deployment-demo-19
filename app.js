const express = require('express')
const jwt = require('jsonwebtoken')
const {sequelize, Project} = require('./models')

const app = express()
app.use( express.json() )

app.use( (req,res,next) => {
  if(process.env.NODE_ENV == 'development'){
    const timeStamp = new Date()
    console.log(timeStamp.toLocaleString(), req.method, req.path)
  }
  next()
})

app.get('/projects', async (req,res) => {
  const projects = await Project.findAll({})
  res.json(projects)
})

app.get('/', (req,res) => {
  res.json({message: 'Hello World!'})
})
app.get('/hemlighet', (req,res) => {
  if(!req.header('Authorization')){
    res.status(403).json({error: 'Aja baja'})
  }else{
    const token = req.header('Authorization')
    const data = jwt.verify(token, process.env.JWT_SECRET)
    res.json(data)
  }
})
app.post('/login', (req,res) => {
  if(req.body.hemlighet === 'grillkorv'){
    const token = jwt.sign(
      {food:'bananpaj'},
      process.env.JWT_SECRET
    )
    res.json({token})
  }else{
    res.status(401).json({error: "No sir/ma'm"})
  }
})

const PORT = process.env.PORT || 5000
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`)
    })
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });