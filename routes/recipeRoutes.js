const express = require('express');
const Recipe = require('../models/recipe');
const { body, validationResult } = require('express-validator');

const router = express.Router();


router.get('/', (req, res) => {
    Recipe.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('recipes/index', { title: 'All Recipes', recipes: result})
        })
        .catch(err => console.log(err));
});

router.post('/', (req, res) => {
   
    const recipe = new Recipe(req.body);

    recipe.save()
        .then((result) => {
            res.redirect('/recipes');
        })
        .catch(err => console.log(err));
});

router.get('/create', (req, res) => {
    res.render('recipes/create', { title: 'Create Recipte'})
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Recipe.findById(id)
        .then(result => {
            res.render('recipes/details', { recipe: result, title: 'Recipe Detials' });
        })
        .catch(err => {
            res.status(404).render('404', { title: 'recipe not found'})
        });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Recipe.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/recipes'})
        })
        .catch(err => console.log(err));
});

module.exports = router;