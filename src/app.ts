import express from 'express';
import logger from './utils/logger';
import config from './config';

async function startServer() {
    const app = express();
    const port = config.port;
    app.listen(port, (err) => {
        if (err) {
            logger.error(err.message);
            return;
        }
        logger.info(`Server listening on port ${port}`);
    });
}

startServer();
