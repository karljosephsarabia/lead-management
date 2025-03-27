import mongodbConnectionStatus from "../constant/dbStatus";
const mongoose = require("mongoose");
import dotenv from "dotenv";

dotenv.config();

class Database {

    //Initializes the MongoDB connection URI.
    private account = process.env.DB_ACCOUNT;
    private password = process.env.DB_PASSWORD;
    private cluster = process.env.DB_CLUSTER;
    private dbName = process.env.DB_NAME;
    private uri = `mongodb+srv://${this.account}:${this.password}@${this.cluster}.tdhx2pc.mongodb.net/${this.dbName}?retryWrites=true&w=majority&appName=Cluster0`;

    //Connects to the MongoDB database.
    async connect() {
        try {
            console.log(this.uri);
            console.log("database connecting...");
            await mongoose.connect(this.uri);
            const dbState = mongoose.connection.readyState;
            console.log(`MongoDB connection status: ${mongodbConnectionStatus[dbState]}`);
        } catch (err) {
            console.error(err);
            throw new Error("Database Connection Error");
        }
    }

    //Disconnects from the MongoDB database
    async disconnect() {
        try {
            await mongoose.disconnect();
            const dbState = mongoose.connection.readyState;
            console.log(`MongoDB connection status: ${mongodbConnectionStatus[dbState]}`);
        } catch (err) {
            console.error(err);
            throw new Error('Database Connection Error');
        }
    }
}

export default new Database;