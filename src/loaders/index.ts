/**
 * emoji collection
 * 🤩🤔😵🤐😊
 */
import { Application } from 'express';
import expressLoader from './expressLoader';
import logger from '../utils/logger';
import { sequelize } from '../models';

export default async ({ expressApp }: { expressApp: Application }) => {
    try {
        await sequelize.sync({ force: false });
        logger.info('🤩 databse loaded and connected');

        await expressLoader({ app: expressApp });
        logger.info('🤩 express loaded');
    } catch (loadError) {
        logger.error(`🤔 ${loadError.message}`);
        process.exit(1);
    }
};
