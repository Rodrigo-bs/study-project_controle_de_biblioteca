import mongoose from "mongoose";

import dbconfig from "./db_config.js";

mongoose.set("strictQuery", true);
mongoose.connect(`mongodb+srv://${dbconfig.user}:${dbconfig.password}@cluster0.btvc02e.mongodb.net/?retryWrites=true&w=majority`);

const db = mongoose.connection;

export default db;