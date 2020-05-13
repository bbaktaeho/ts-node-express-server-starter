import { Service, Inject } from 'typedi';
import argon2 from 'argon2';
import { randomBytes } from 'crypto';
import { UserDTO } from '../interfaces/userDTO';
import User from '../models/userModel';

@Service()
export default class AuthService {
    constructor() {}

    public async register(user: UserDTO): Promise<{ success: boolean; result?: User | string }> {
        try {
            const salt = randomBytes(8);
            const hashPassword = await argon2.hash(user.password, { salt });
            const result = await User.create({ ...user, password: hashPassword });
            // 추후 이메일 인증을 통한 가입을 시도하게 하면 됨
            return { success: true, result };
        } catch (registerErr) {
            if (registerErr.message === 'Validation error') registerErr.message = '존재하는 사용자';
            return { success: false, result: registerErr.message };
        }
    }
}
