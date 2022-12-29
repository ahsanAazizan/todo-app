const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./database/db-connection')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.static('./public'))
app.use(express.json())
app.use('/tasks', tasks)
app.use(notFound);
app.use(errorHandlerMiddleware)


const port = process.env.PORT;

async function setup() {
  try {
    await connectDB(process.env.URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
}

setup()
