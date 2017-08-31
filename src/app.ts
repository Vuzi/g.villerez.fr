import * as express from 'express'
import * as logger from 'morgan'
import * as mustacheExpress from 'mustache-express'
import * as path from 'path'
import * as compression  from 'compression'
import index from './routes/index'
import less = require('less-middleware')

const app = express()

app.engine('html', mustacheExpress())

// View engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')

// Compress responses
app.use(compression())

// Logger (TODO use better logger ?)
app.use(logger('dev'))

app.use('/', index)

// Serves the public directory
app.use(express.static(path.join(__dirname, '..' ,'public')))
app.use(less(path.join(__dirname, '..', 'public')))

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err['status'] = 404
  next(err)
})

// Error handlers
if (app.get('env') === 'development') {
  app.use(function(err: any, req, res, next) {
    console.log(err)
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err.stack.split("\n")
    })
  })
}

app.use(function(err: any, req, res, next) {
  console.log(err)
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})


export default app