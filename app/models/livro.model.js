import livroSchema from "../schemas/livro.schema.js";

import mongoose from "mongoose";

class LivroModel {
    constructor() {
        this.Livro = mongoose.model('Livro', livroSchema); 
    }

    async create(livro) {
        try {
            // await this.Livro.create(livro);

            return true;
        } catch(e) {

            console.log(e);
            return false;
        }
    }
}

export default LivroModel;