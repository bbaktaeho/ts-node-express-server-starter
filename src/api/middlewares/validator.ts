import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';

const registerValidator = async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all([
        check('email').isEmail().run(req),
        check('name').exists().run(req),
        check('nickname').exists().run(req),
        check('password').exists().run(req),
    ]);
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ success: false, errors: errors.array() });
    next();
};

const loginValidator = async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all([check('email').isEmail().run(req), check('password').exists().run(req)]);
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ success: false, errors: errors.array() });
    next();
};

export { registerValidator, loginValidator };
