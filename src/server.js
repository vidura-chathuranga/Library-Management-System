import express from "express";
import cors from "cors";
import 'dotenv/config';
import logger from "./utils/logger";
import { connect } from "./utils/database.connection";

const app = express();
const PORT = process.env.PORT || "8090";

//implement the cors package to the project, Restrict communication between endpoints and the server,
// if you want to mention more than one end point you can use array or other wise use single
app.use(cors());

//set the request size limit to 20MB
app.use(express.json({limit: "20mb"}));

app.get("/", (req, res, next) => {
    res.send("<h2>📚 Library Managment System API</h2>");
    next();
})

//create the start function
app.listen(PORT, () => {
    
    logger.info(`Server is up and Running on PORT ${PORT}`);
    connect();
});





