const router = require('express').Router();
const db = require('../models');

const postService = require('../services/postService');


router.get('/', (req, res) => {
   postService.getAll().then((result) => {
        res.status(result.status).json(result.data);
    });
});

router.post('/', (req, res) => {
    const post = req.body;
    postService.create(post).then((result) => {
        res.status(result.status).json(result.data);
    });
   
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
            res.send('inlägget har uppdaterats');
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