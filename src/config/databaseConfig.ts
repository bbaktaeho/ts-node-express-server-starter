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
    },
    test: {
        username: 'root',
        password: process.env.MARIADB_PASSWORD!,
        database: 'test_db',
        host: process.env.MARIADB_LOCAL_HOST!,
        logging: false,
        dialect: 'mysql',
    },
    production: {
        username: 'root',
        password: process.env.MARIADB_PASSWORD!,
        database: 'test_db',
        host: process.env.MARIADB_LOCAL_HOST!,
        logging: false,
        dialect: 'mysql',
    },
};
