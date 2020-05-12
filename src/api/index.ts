import { Router } from 'express';
import authRouter from './routes/authRouter';
import testRouter from './routes/testRouter';
import userRouter from './routes/userRouter';

export default () => {
    const app = Router();
    authRouter(app);
    testRouter(app);
    userRouter(app);
    return app;
};
