import 'dotenv/config';
import configs from "./configs";
import express from "express";
import cors from "cors";
import logger from "./utils/logger";
import { connect } from "./utils/database.connection";
import passport from "passport";
import {googleAuth, gooleAuth} from "./configs/google.config";
import session from "express-session";
import { routesInit } from "./routes/index"

const app = express();
const PORT = process.env.PORT || "8090";

//implement the cors package to the project, Restrict communication between endpoints and the server,
// if you want to mention more than one end point you can use array or other wise use single
app.use(cors());

//set the request size limit to 20MB
app.use(express.json({limit: "20mb"}));

app.use(session({
    secret: configs.SESSIONSECRET,
    resave: false,
    saveUninitialized: false,
    cookie : {
        secure: false,
        expires: new Date(Date.now() + 10000),
        maxAge: 10000,
    }

}))
app.use(passport.initialize());
app.use(passport.session());


app.get("/", (req, res, next) => {
    res.send("<a href='http://localhost:8090/auth/google'>Click to login</a>");
    next();
})

//create the start function
app.listen(PORT, () => {
    
    logger.info(`Server is up and Running on PORT ${PORT}`);
    connect();
    routesInit(app,passport);
    googleAuth(passport);
});





