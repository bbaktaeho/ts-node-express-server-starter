import { Router } from 'express';
import { authenticateJwt } from '../middlewares/authenticate';
import { Container } from 'typedi';
import UserService from '../../services/userService';
import { UserDTO } from '../../interfaces/userDTO';
const router = Router();

export default (app: Router) => {
    app.use('/users', authenticateJwt, router);

    router.get('/account', async (req, res) => {
        const userServiceInstance = Container.get(UserService);
        const account: UserDTO = await userServiceInstance.showAccount(req.user as UserDTO);
        res.status(200).json({ success: true, message: '계정 정보 불러오기 성공', account });
    });
    router.put('/account', (req, res) => {});
};
