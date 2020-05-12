/**
 * emoji collection
 * 🤩🤔😵🤐😊
 */
import { Application } from 'express';
import expressLoader from './express';
import logger from '../utils/logger';

export default async ({ expressApp }: { expressApp: Application }) => {
    await expressLoader({ app: expressApp });
    logger.info('🤩 express loaded');
};
