import mongoose from 'mongoose';
import 'dotenv/config';
import Cat from './cats.js';

const DB = process.env.DB_ACCESS;

mongoose.connect(DB)
  .then(console.log(`connected to ${DB}`))
  .then(addCat)

function addCat() {
  const names = ["Missy", "Kissy", "Purr", "Snuffle", "Boog", "Maul", "Gorthalax Bonechewer"]

  names.forEach(name => {
    new Cat({name, age: Math.ceil(Math.random()*5)}).save()
  })
}

