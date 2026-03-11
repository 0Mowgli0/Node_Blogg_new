const router = require('express').Router();
const db = require('../models');
const postService = require('../services/postService');

router.get('/:id/posts', (req, res) => {
    const id = req.params.id;

    postService.getByTag(id).then((result) => {
    res.status(result.status).json(result.data);
    });
});  

router.get('/', (req, res) => {
    db.Tag.findAll().then((result) => {
        res.send(result);
    });
});


router.post('/', (req, res) => {
    const Tag = req.body; 
    db.Tag.create(Tag).then((result) => {
    res.send(result);
    });
    
});

router.delete('/', (req, res) => {
    db.Tag
    .destroy({
    where: {id: req.body.id }  
    })
    .then(() => {
        res.json(`inlägget raderades`);
        });
    });

module.exports = router;