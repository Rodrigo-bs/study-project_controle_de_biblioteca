import config from "../config.js";

import app from "./app.js";

app.express.listen(config.PORT, () => {
    console.log('servidor rodando...');
});