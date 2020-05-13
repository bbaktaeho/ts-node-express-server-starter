import { Request, Response, NextFunction } from 'express';
import passport from 'passport';

// failureFlash 는 err key 로 메세지가 세션에 담긴다
const localAuthenticate = () => passport.authenticate('local', { failureRedirect: '/api/auth/login', failureFlash: true });

export { localAuthenticate };
