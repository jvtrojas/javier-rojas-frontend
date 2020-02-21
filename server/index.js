const express = require('express');
const compression = require('compression');
const next = require('next');
const mongoose = require('mongoose');
const routes = require('../routes');
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = routes.getRequestHandler(app);
const config = require('./config');

const Book = require('./models/book');
const bodyParser = require('body-parser');
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

mongoose.connect(config.DB_URI, { useUnifiedTopology: true, useNewUrlParser: true})
    .then(()=> console.log('Database Connected!'))
    .catch(err=>console.log(err));

app.prepare()
.then(() => {
    const server = express();
    server.use(compression());
    server.use(bodyParser.json());

    server.post('/api/v1/books', (req, res) => {
        const bookData = req.body;

        const book = new Book(bookData);

        book.save((err, createdBook) =>{
            if(err) {
                return res.status(422).send(err);
            }
            return res.json(createdBook);
        })
    })








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

    const PORT = process.env.PORT || 3000;

    server.use(handle).listen(PORT, (err) => {
        if (err) throw err;
        console.log('> Ready on port ' + PORT);
    });
})
.catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
})