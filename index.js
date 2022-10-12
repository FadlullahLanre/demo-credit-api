const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const AppError = require('./utils/appError');
const xss = require('xss-clean');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const userRouter = require('./routes/user');
const paymentRouter = require('./routes/transaction');
const errorController = require('./utils/errorController');
const app = express();
dotenv.config();

app.use(cors({
    origin: '*'
}));

app.use(express.json());
console.log(process.env.NODE_ENV)

//1 Global middlewares
// Set security HTTP headers
app.use(helmet());

//Limit requests from same ip
const limiter = rateLimit({
	max: 100,
	windowMs: 60 * 60 * 1000,
	message: 'Too many requests from this ip, please try again in an hour',
});
app.use('/api', limiter);

// Data sanitization against xss(html code attack)
app.use(xss());

app.use('/v1/lendsqr', userRouter);
app.use('/v1/lendsqr', paymentRouter);
app.get('/v1/lendsqr', function (req, res) {
	res.send({ message : 'Welcome to the Demo Credit Api!, '});
  
  });

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 400))
});

app.use(errorController);

module.exports = app