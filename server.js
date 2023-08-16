const app = require('./app')
const connectDB = require('./config/database.js');

// connecting db
connectDB();

const server = app.listen(process.env.PORT,()=>{
  console.log(`port is running port ${process.env.PORT}`)
})
