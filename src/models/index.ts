import User from './userModel';
export * from './sequelize';

const db = { User };
export type dbType = typeof db;
