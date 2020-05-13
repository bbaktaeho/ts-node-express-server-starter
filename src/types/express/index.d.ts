import {} from '../../config';

declare global {
    namespace Express {
        export interface Request {}
    }
}
