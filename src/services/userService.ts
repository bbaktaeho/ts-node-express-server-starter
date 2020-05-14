import { Service, Inject } from 'typedi';
import { UserDTO } from '../interfaces/userDTO';
import User from '../models/userModel';

@Service()
export default class UserService {
    constructor() {}

    public async showAccount(user: UserDTO): Promise<UserDTO> {
        const account = {
            email: user.email,
            nickname: user.nickname,
            name: user.name,
            password: '',
            phone: user.phone,
        };
        return account;
    }

    public async modifyAccount() {}
}
