import config from '../config';
import express from 'express';
import session from 'express-session';
import flash from 'connect-flash';
import passport from 'passport';
import passportConfig from '../config/passportConfig';
import sessionConfig from '../config/sessionConfig';
import cors from 'cors';
import hpp from 'hpp';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from '../api';

export default async ({ app }: { app: express.Application }): Promise<void> => {
    if (process.env.NODE_ENV === 'production') {
        app.use(morgan('combined'));
        app.use(helmet());
        app.use(hpp());
    } else {
        app.use(morgan('dev'));
    }
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(session(sessionConfig)); // 1. express 에서 세션 활성화
    app.use(flash()); // 1-1. 플래시 메모리 활성화
    app.use(passport.initialize()); // 2. passport 구동
    app.use(passport.session()); // 3. passport 에게 session 연결
    passportConfig('session'); // 4. passport 전략 또는 인증 방식 구성 (session, jwt)
    app.use(cors());

    /**
     * * routes
     */
    app.get('/favicon.ico', (req, res) => res.status(204));
    app.get('/', (req, res) => res.send('root!'));
    app.use(config.api.prefix, routes());
    app.use((req, res, next) => {
        const err = new Error('Not Found');
        next(err);
    });
};
