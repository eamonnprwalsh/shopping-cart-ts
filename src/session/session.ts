import expressSession, { SessionOptions } from 'express-session';

const config: SessionOptions = {
  store: undefined,
  secret: 'abcdef',
  resave: false,
  name: 'shopping-cart',
  saveUninitialized: true,
  cookie: {
    maxAge: 100000,
    sameSite: 'strict',
    httpOnly: true,
  },
};

const session = expressSession(config);
export default session;
