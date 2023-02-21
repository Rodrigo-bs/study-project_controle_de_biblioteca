import LivroModel from "../models/livro.model.js";

class Livro {
    constructor() {
        this.Livro = mongoose.model('Livro', livroSchema); 
    }

    static createLivro(req, res) {
        const livro = req.body;

        if (!livro) {
            return res.status(400).json({
                message: 'Nenhuma informação foi passada'
            });
        }

        if (!livro.hasOwnProperty('name') || !livro.hasOwnProperty('author') || !livro.hasOwnProperty('pages')) {
            return res.status(400).json({
                message: 'Está faltando alguma informação na requisição'
            });
        }

        if (!livro.name || !livro.author || !livro.pages) {
            return res.status(400).json({
                message: 'Algum dos campos está vazio'
            });
        }

        new LivroModel().create(livro).then((data) => {
            return res.status(200).json(livro);
        }).catch((e) => {
            console.log(e);

            return res.status(500).json({
                message: 'O livro não pode ser inserido'
            });
        });
    }
}

export default Livro;