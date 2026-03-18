const router = require('express').Router();
const db = require('../models');
const postService = require('../services/postService');

router.get('/:name/posts', (req, res) => {
    const name = req.params.name;

    postService.getByTag(name).then((result) => {
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