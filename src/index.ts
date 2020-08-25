import express from 'express'
import Mustache from 'mustache'
import path from 'path'
import fs from 'fs'

import content from './content-en'

const app: express.Application = express()
const PORT = process.env.PORT || 12345;

interface Error {
    status?: number;
    message?: string;
  }

const errorHandler = (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(err.status || 500);

    console.log("hello")

    if (req.accepts('html')) {
        fs.readFile(path.join(__dirname, '/templates/index.html'), (fsError, data) => {
            if (fsError)
                res.render('error', {
                    message: err.message,
                    error: err
                })
                console.log(err.message|| '<No message>')

            res.send(Mustache.render(data.toString(), { error: { code: err.status || 500, message: err.message || 'No message was provided with that error' } }))
        })
    } else {
        res.render('error', {
            message: err.message,
            error: err
        })
    }
}

const logger =  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const startHrTime = process.hrtime();
    const now = new Date()
    let method = req.method
    let url = req.url
    let status = res.statusCode
  
    res.on("finish", () => {
      const elapsedHrTime = process.hrtime(startHrTime);
      const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
      console.log(`[${now}] ${status} ${method} ${url} in ${elapsedTimeInMs.toFixed(3)}ms`);
    });

    next()
}

app.use(logger)

app.get('/', (req, res, next) => {
    fs.readFile(path.join(__dirname, '/templates/index.html'), (err, data) => {
        if (err)
            return next(err)

        res.send(Mustache.render(data.toString(), content))
    })
})

app.use(express.static('public'))

app.use((req, res, next) => {
    next({ status: 404, message: `${req.url} not found on this server` })
})

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`[i] App is listening on port ${PORT}`)
})
