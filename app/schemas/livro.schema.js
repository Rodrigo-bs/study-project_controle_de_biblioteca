import mongoose, { Schema } from "mongoose";

const livroSchema = new Schema({
    name: String,
    author: String,
    pages: String
});

export default livroSchema;