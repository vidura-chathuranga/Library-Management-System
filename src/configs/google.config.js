import GoogleStrategy from 'passport-google-oauth20';
import config from "./index";
import logger from "../utils/logger";

const googleAuth = (passport) =>{
    GoogleStrategy.Strategy;

    passport.use(new GoogleStrategy({

        clientID: config.GOOGLE_CLIENT_ID,
        clientSecret: config.GOOGLE_CLIENT_SECRET,
        callbackURL : config.GOOGLE_REDIRECT_URL,

    }, (accessToken, refreshToken, profile, cb) =>{

        console.log(profile);
        return cb(null,profile);

    }
    )
    );

    passport.serializeUser((user, callback) =>{
        callback(null, user.id);
      });
      
      passport.deserializeUser((id, callback) =>{
            callback(null, id);
      });
}

export {googleAuth};



