import { Sequelize, Options } from 'sequelize';
import config from '../config';

const env = (process.env.NODE_ENV as 'production' | 'test' | 'development') || 'development';
const { database, username, password } = config.databaseConfig[env];

const sequelize = new Sequelize(database, username, password, config.databaseConfig[env] as Options);

// 순환 참조 방지
export { sequelize };
export default sequelize;
