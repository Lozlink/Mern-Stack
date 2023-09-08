import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB  from './config/db.js';
import userRoutes from './routes/userRoutes.js'

const port = process.env.PORT || 5000;

connectDB();

const app = express();

//middleware to handle post and put requests. 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/users', userRoutes);


app.get('/', (req, res) => res.send('Server is ready'));

// For the middleware to be in use from middleware folder
app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`Server started on port ${port}`));

