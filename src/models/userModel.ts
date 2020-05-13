import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelize';

class User extends Model {
    public readonly id!: number;
    public email!: string;
    public password!: string;
    public name!: string;
    public nickname!: string;
    public phone?: string;
    // ...
    // createdAt and updatedAt 자동 생성됨
}

User.init(
    {
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        name: { type: DataTypes.STRING(20), allowNull: false },
        nickname: { type: DataTypes.STRING(20), allowNull: false, unique: true },
        password: { type: DataTypes.STRING(100), allowNull: false },
        phone: { type: DataTypes.STRING, allowNull: true },
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'user',
        charset: 'utf8',
        collate: 'utf8_general_ci',
    }
);

// 관계 설정
// export const associate = (db)=>{}
export default User;
