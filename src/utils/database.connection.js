import mongoose from "mongoose";
import config from "../configs";
import logger from "../utils/logger";

let database;

const  connect = async() => {
    const MONGODB_URL = config.Db_connection_String;

    if (database) return;

    mongoose.connect(MONGODB_URL).then((connection) => {
        database = connection;
        logger.info("database Synced!");
    }).catch((err) =>{
        logger.error(err.message);
    })
}

export {connect};