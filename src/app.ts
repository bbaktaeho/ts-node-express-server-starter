import 'reflect-metadata';
import express from 'express';
import logger from './utils/logger';
import config from './config';
import loader from './loaders';

async function startServer() {
    const app = express();
    const port = config.port;

    await loader({ expressApp: app });

    app.listen(port, (err) => {
        if (err) {
            logger.error(err.message);
            return;
        }
        logger.info(`🔥🔥 Server listening on port ${port} 🔥🔥`);
    });
}

startServer();
