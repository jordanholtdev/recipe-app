const express = require('express');
const Sub = require('../models/newletterSub');

const { body, validationResult } = require('express-validator');

const router = express.Router();


router.get('/thanks', (req, res) => {
    res.render('subs/thanks', { title: 'Thanks 😁'});
});

router.post('/', [
    //data input validation and sanitization 
    body('email')
        .isEmail()
        .normalizeEmail(),
    body('name')
        .not().isEmpty()
        .trim()
        .escape(),
], (req, res) => {
     
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
             res.json({ error: errors.array() });           
  } else {
        const sub = new Sub(req.body);
        sub.save()
            .then(result => {
                res.json({ redirect: 'subscribe/thanks'});
            })
            .catch(err => console.log(err));
  }
})




module.exports = router;