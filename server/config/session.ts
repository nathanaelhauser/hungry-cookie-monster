import session, { CookieOptions, SessionOptions } from "express-session";
import { v4 as uuidv4 } from "uuid";

let cookieConfig: CookieOptions = {
  httpOnly: true,
  maxAge: 60 * 60 * 1000, // 1 hour
  secure: false,
  sameSite: "strict",
};

if (process.env.NODE_ENV === "production") {
  cookieConfig.secure = true;
}

const sessionConfig: SessionOptions = {
  secret:
    process.env.SESSION_SECRET ||
    "some secret that will keep all of the data safe",
  resave: false,
  saveUninitialized: false,
  cookie: cookieConfig,
  genid: () => {
    return uuidv4();
  },
};

export default session(sessionConfig);
