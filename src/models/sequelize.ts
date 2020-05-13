import { Sequelize, Options } from 'sequelize';
import databaseConfig from '../config/databaseConfig';

const env = (process.env.NODE_ENV as 'production' | 'test' | 'development') || 'development';
const { database, username, password } = databaseConfig[env];

const sequelize = new Sequelize(database, username, password, { ...(databaseConfig[env] as Options) });

// 순환 참조 방지
export { sequelize };
export default sequelize;
