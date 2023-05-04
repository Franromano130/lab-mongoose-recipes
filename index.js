const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })

  .then(() => {
    // Run your code here, after you have insured that the connection was made
  return Recipe.create({
    title: "Milanesa de pollo",
    level: "Amateur Chef",
    ingredients: [
      "pollo",
      "pan rallado",
      "sal",
      "aceite",
      "limon",
    ],
    cuisine: "Argentina",
    dishType: "main_course",
    image: 0,
    duration: 40,
    creator: "Francisco y Jonathan"
   })
  })
  .then(() =>{
    return Recipe.insertMany(data)
    
  }) 
  return Recipe.updateOne ({duration: 220}, 100)
  .then(()=>{
    console.log("Recipe actualizada")
    
  return Recipe.findByIdAndDelete ({id: "6453e4086024875a600f0449"})

  })
  .then((elementoBorrado) => {
    console.log("Recipe borrada", elementoBorrado)
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

