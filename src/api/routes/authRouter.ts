import { Router, Request, Response } from 'express';
import { registerValidator, loginValidator } from '../middlewares/validator';
import { localAuthenticate } from '../middlewares/authenticate';
import { Container } from 'typedi';
import AuthService from '../../services/authService';
import { UserDTO } from '../../interfaces/userDTO';
const router = Router();

export default (app: Router) => {
    app.use('/auth', router);

    router.post('/register', registerValidator, async (req: Request, res: Response) => {
        const authServiceInstance = Container.get(AuthService);
        const { success, result } = await authServiceInstance.register(req.body as UserDTO);
        if (!success) return res.status(409).json({ success, message: result });
        res.status(201).json({ success: true, message: '가입 성공', user: result });
    });

    // 로그인 인증 실패
    router.get('/login', (req, res) => {
        res.status(401).json({ success: false, message: req.flash().error[0] });
    });
    // 로그인 인증 성공
    router.post('/login', loginValidator, localAuthenticate(), (req, res) => {
        res.status(201).json({ success: true, message: '로그인 성공' });
    });

    router.post('/logout', (req, res) => {});
};
