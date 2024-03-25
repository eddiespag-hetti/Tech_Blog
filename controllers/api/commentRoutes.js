const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    console.log(req.body);
    console.log(req.session);
try {
    const comment = await Comment.create({
        description: req.body.description,
        blog_id: req.body.blog_id,
        user_id: req.session.user_id

    });

    res.status(200).json(comment)
    
} catch (err) {
    console.log(err);
    res.status(500).json(err)
    
}

})

module.exports = router;