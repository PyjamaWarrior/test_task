const dotenv = require('dotenv');
const express = require('express');

dotenv.config();

const { PORT } = require('./config/config');
const apiRouter = require('./routers/api.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiRouter);
app.use('*', (err, req, res, next) => {
    const { customCode, message, status } = err;

    res
        .status(status || 500)
        .json({
            code: customCode || 0,
            message
        });
});

app.listen(PORT, () => {
    console.log(`Listen port ${PORT}`);
});

