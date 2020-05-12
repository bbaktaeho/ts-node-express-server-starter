import { Router } from 'express';
const router = Router();

export default (app: Router) => {
    app.use('/auth', router);

    router.post('/register', (req, res) => {});
    router.post('/login', (req, res) => {});
    router.post('/logout', (req, res) => {});
};
