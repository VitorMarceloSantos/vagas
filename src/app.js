import express from 'express';
import usersRoute from './routes/usersRoute.js';
import userRoute from './routes/userRoute.js';

const app = express();

app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

app.use('/user', userRoute);
app.use('/users', usersRoute);

export default app;
