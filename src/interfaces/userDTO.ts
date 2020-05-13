export interface UserDTO {
    id?: number;
    email: string;
    name: string;
    nickname: string;
    password: string;
    phone?: string | null;
}
