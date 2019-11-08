const express = require('express');
const next = require('next');
const routes = require('../routes');
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = routes.getRequestHandler(app);
//SERVICES
const authService = require('./services/auth');

const secretData = [
    {
        title: 'secret data 1',
        description: 'lets kill donald trump'
    },
    {
        title: 'secret data 2',
        description: 'psichedelycs are good'
    }
]

app.prepare()
.then(() => {
    const server = express();

    server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
         return res.json(secretData);
    })

    server.get('/api/v1/onlysiteowner', authService.checkJWT, authService.checkRole('siteOwner'), (req, res) => {
        return res.json(secretData);
   })

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.use(function (err, req, res, next) {
        if (err.name === 'UnauthorizedError') {
          res.status(401).send({title: 'Unauthorized', detail: 'Unauthorized Access! '});
        }
    });

    server.use(handle).listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
})
.catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
})