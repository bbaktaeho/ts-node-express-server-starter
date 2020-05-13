import passport from 'passport';
import User from '../models/userModel';
import passportLocal from 'passport-local';
import argon2 from 'argon2';

export default () => {
    const LocalStrategy = passportLocal.Strategy;

    passport.use(
        new LocalStrategy(
            {
                usernameField: 'email',
                passwordField: 'password',
                session: true,
                passReqToCallback: true,
            },
            async (req, email, password, done) => {
                try {
                    const user = await User.findOne({ where: { email } });
                    if (!user) return done(null, false, { message: '존재하지 않는 이메일입니다' });
                    if (!(await argon2.verify(user.password, password))) return done(null, false, { message: '비밀번호가 틀립니다' });
                    done(null, user);
                } catch (err) {
                    done(err);
                }
            }
        )
    );

    // 전략에서 성공하고 done 을 통해 유저를 넘겨 받아 req.session.passport.user 에 저장함
    passport.serializeUser<User, any>((user, done) => {
        done(null, user.email);
    });

    // 실제 서버로 들어오는요청마다 세션 정보를 데이터베이스와 비교함
    // 해당 정보가 존재하면 req.user 를 통해 다음 미들웨어에게 넘겨줌
    passport.deserializeUser<User, any>(async (email, done) => {
        try {
            const user = await User.findOne({ where: { email } });
            if (!user) return done(new Error('is not exists'));
            done(null, user!);
        } catch (err) {
            done(err);
        }
    });
};
