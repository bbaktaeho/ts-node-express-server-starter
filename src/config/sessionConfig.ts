import dotenv from 'dotenv';
dotenv.config();

export default {
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
    },
};
