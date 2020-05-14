import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import config from '../../config';
import jwt from 'jsonwebtoken';

// failureFlash 는 err key 로 메세지가 세션에 담긴다
const loginProcess = (req: Request, res: Response, next: NextFunction) =>
    passport.authenticate('local', { session: false }, (err, user, info) => {
        // 이메일 또는 비밀번호가 틀렸을 때
        if (err || !user) return res.status(400).json({ success: false, message: info.message, user: null, token: null });
        // 정상적으로 유저를 찾았을 때
        req.login(user, { session: false }, (err) => {
            if (err) res.status(400).json({ success: false, message: err.message, user: null, token: null });
            const accessToken = jwt.sign(JSON.parse(JSON.stringify(user)), config.jwtSecret, {}); // 옵션 추가하기
            res.status(200).json({ success: true, message: '토큰 발급', user, token: accessToken });
        });
    })(req, res);

const authenticateJwt = (req: Request, res: Response, next: NextFunction) =>
    passport.authenticate('jwt', { session: false }, (err, user) => {
        if (err || !user) return res.status(403).json({ success: false, message: 'Forbidden' });
        if (user) req.user = user;
        next();
    })(req, res, next);

export { loginProcess, authenticateJwt };
