import { Router } from 'express';
const router = Router();

export default (app: Router) => {
    app.use('/users', router);

    router.get('/account', (req, res) => {});
    router.put('/account', (req, res) => {});
};
