import dotenv from 'dotenv';
import databaseConfig from './databaseConfig';
// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) throw new Error("⚠️  Couldn't find .env file  ⚠️");

export default {
    /**
     * Your favorite port
     */
    port: parseInt(process.env.PORT!, 10),

    databaseConfig,

    /**
     * Your secret sauce
     */
    // jwtSecret: process.env.JWT_SECRET,

    /**
     * Used by winston logger
     */
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },

    api: {
        prefix: '/api',
    },
    /**
     * Mailgun email credentials
     */
    // emails: {
    //     apiKey: process.env.MAILGUN_API_KEY,
    //     domain: process.env.MAILGUN_DOMAIN,
    // },
};
