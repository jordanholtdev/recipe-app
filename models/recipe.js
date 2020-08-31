const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requiredString = { 
    type: String,
    required: true,
    min: 2,
}

const recipeSchema = new Schema({
    title: requiredString,
    author: requiredString,
    snippet: requiredString,
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0,
    },
    ingredients: requiredString,
    directions: requiredString,
    category: requiredString,
}, { timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;

