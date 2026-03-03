const router = require('express').Router();
const db = require('../models');

router.get('/', (req, res) => {
    db .Post.findAll().then((result) => {
        res.send(result);
    })
});

router.post('/', (req, res) => {
    db.Post.create(req.body).then((result) => {
        res.send(result);
    });
});

router.put('/', (req, res) => {
    db.Post.update(req.body, {
    where: {id: req.body.id }  
    }).then((result) => {
        res.send(result);
        });
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