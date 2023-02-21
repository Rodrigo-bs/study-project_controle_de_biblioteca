import config from "../config.js";
import db from "./core/db.connect.js";

import router from "./routes/index.routes.js";


import mongoose from "mongoose";
import express from 'express';
import bodyParser from "body-parser";

class App {
    constructor() {
        this.express = express();
        this.init();
    }

    dbConnect() {
        db.on('error', (error) => {
            console.log('Erro de Conexão com o banco');
        });

        db.once('open', () => {
            console.log('Conexão com o banco de dados foi estabelecida');
        });
    }

    setRoutes() {
        this.express.use(router);
    }

    setMiddlawares() {
        this.express.use(bodyParser.json());
    }

    init() {
        this.dbConnect();
        this.setMiddlawares();
        this.setRoutes();
    }
}

export default new App();