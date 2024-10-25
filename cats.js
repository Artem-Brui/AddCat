import mongoose from "mongoose";

const schema = mongoose.Schema({ name: String, color: String, age: Number })

const Cat = mongoose.model('Cat', schema);

export default Cat;