import dotenv from 'dotenv';
dotenv.config();

export default {
    development: {
        username: 'root',
        password: process.env.MARIADB_PASSWORD!,
        database: 'test_db',
        host: process.env.MARIADB_LOCAL_HOST!,
        logging: false,
        dialect: 'mariadb',
        timezone: '+09:00',
    },
    test: {
        username: 'root',
        password: process.env.MARIADB_PASSWORD!,
        database: 'test_db',
        host: process.env.MARIADB_LOCAL_HOST!,
        logging: false,
        dialect: 'mysql',
        timezone: '+09:00',
    },
    production: {
        username: 'root',
        password: process.env.MARIADB_PASSWORD!,
        database: 'test_db',
        host: process.env.MARIADB_LOCAL_HOST!,
        logging: false,
        dialect: 'mysql',
        timezone: '+09:00',
    },
};
