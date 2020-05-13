import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';

const registerValidator = async (req: Request, res: Response, next: NextFunction) => {
    await check('email').isEmail().run(req);
    await check('name').exists().run(req);
    await check('nickname').exists().run(req);
    await check('password').exists().run(req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ success: false, errors: errors.array() });
    next();
};

export { registerValidator };
