const router = require('express').Router();
const db = require('../models');
const validate = require('validate.js');

const constraints = {
    title: {
    length: {
        minimum: 2,
        maximum: 100,
        tooShort: "^Titeln måste vara minst %{count} tecken lång",
        tooLong: "^Titeln får inte vara längre än %{count} tecken lång"
    }
    }
}

router.get('/', (req, res) => {
    db .Post.findAll().then((result) => {
        res.send(result);
    })
});

router.post('/', (req, res) => {
    const post = req.body;
    const invalidData = validate(post, constraints);
    if(invalidData) {
        res.status(400).json(invalidData);
    } else {
                db.Post.create(post).then((result) => {
                res.send(result);
    });
    }
});

router.put('/', (req, res) => {
     const post = req.body;
    const invalidData = validate(post, constraints);
    const id = post.id;
    if(invalidData||!id) {
        res.status(400).json(invalidData||`Id är obligatoriskt`);
    } 
    else {
          db.Post
          .update(post, {
            where: {id: post.id } })
             .then((result) => {
            res.send(result);
        });
    }
          
    });


router.delete('/', (req, res) => {
    db.Post
    .destroy({
    where: {id: req.body.id }  
    })
    .then(() => {
        res.json(`inlägget raderades`);
        });
    });

module.exports = router;