import Livro from "../controllers/livro.controller.js";

import { Router } from "express";

const router = Router();

router.post('/livro', Livro.createLivro);

export default router;