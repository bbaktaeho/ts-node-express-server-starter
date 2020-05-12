import express from 'express';
import cors from 'cors';
import hpp from 'hpp';
import helmet from 'helmet';
import morgan from 'morgan';
import config from '../config';

export default ({ app }: { app: express.Application }) => {
    // health check endpoints
    app.get('/status', (req, res) => {
        res.status(200).end();
    });
    app.head('/status', (req, res) => {
        res.status(200).end();
    });

    if (process.env.NODE_ENV === 'production') {
        app.use(morgan('combined'));
        app.use(helmet());
        app.use(hpp());
        app.use();
    } else {
        app.use(morgan('dev'));
    }
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use((req, res, next) => {
        const err = new Error('Not Found');
        next(err);
    });
};
