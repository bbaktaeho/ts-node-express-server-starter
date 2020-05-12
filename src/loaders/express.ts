import express from 'express';
import cors from 'cors';
import hpp from 'hpp';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from '../api';
import config from '../config';

export default async ({ app }: { app: express.Application }): Promise<void> => {
    if (process.env.NODE_ENV === 'production') {
        app.use(morgan('combined'));
        app.use(helmet());
        app.use(hpp());
    } else {
        app.use(morgan('dev'));
    }
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    /**
     * * routes
     */
    app.get('/favicon.ico', (req, res) => res.status(204));
    app.get('/', (req, res) => res.send('root!'));
    app.use('/api', routes());
    app.use((req, res, next) => {
        const err = new Error('Not Found');
        next(err);
    });
};
