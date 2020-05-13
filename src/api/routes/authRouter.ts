import { Router, Request, Response } from 'express';
import { registerValidator } from '../middlewares/validators';
const router = Router();

export default (app: Router) => {
    app.use('/auth', router);

    router.post('/register', registerValidator, (req: Request, res: Response) => {
        res.status(201).json({ success: true, message: '가입 성공' });
    });
    router.post('/login', (req, res) => {});
    router.post('/logout', (req, res) => {});
};
