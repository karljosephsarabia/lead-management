import { Request, Response } from "express";
import router from "./routes/lead.route";
import Database from "./config/db.config";
import errorHandler from "./middleware/errorHandler";
import dotenv from "dotenv";

dotenv.config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: 'https://lead-management-web.vercel.app/',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credential: true
}));

//Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));



//Routes
app.use('/api', router);
app.use('/', (req: Request, res: Response) => {
    return res.send('Server Connection is Ready...');
});


// Error handling middleware
app.use(errorHandler);


app.listen(process.env.PORT || 4000, async () => {
    await Database.connect();
    console.log(`Server is running on port ${process.env.PORT || 4000}`);
});
