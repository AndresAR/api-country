const compression = require('compression');
const express = require('express');
const bodyparser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config()
const db = require('./db')
const v1route = require('./routes/v1/routes');
const app = express();
const Mongoose = require('./db/index');
const swaggerUi = require('swagger-ui-express');
var global = {};
global.mongo = new Mongoose();
swaggerDocument = require('./swagger.json');


app.use(compression());
app.use(helmet());
app.use(cors());
app.use(express.static('public'));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json({ limit: '10mb' }));


app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        res.statusCode = 400;
        res.json({ code: 400, message: 'Bad Request' });
    }
    if (err instanceof SyntaxError && err.status === 404 && 'body' in err) {
        res.statusCode = 404;
        res.json({ code: 404, message: 'Not found' });
    }
});


app.use('/api/v1', v1route);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const port = 3000;

app.listen(port, () => console.log(`Server running... ${ port }`));