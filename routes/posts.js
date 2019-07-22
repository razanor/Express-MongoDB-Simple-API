const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch(err) {
        res.status(500).json({ message: err });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch(err) {
        res.status(500).json( {message: err });
    }
});

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.status(200).json(savedPost);
    } catch(err) {
        res.status(500).json({ message: err });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.id }, 
            { $set: {title: req.body.title} }
        );
        res.status(200).json(updatedPost);
    } catch(err) {
        res.status(500).json( {message: err });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const removedPost = await Post.remove( { _id: req.params.id} );
        res.status(200).json(removedPost);
    } catch(err) {
        res.status(500).json( {message: err });
    }
});


module.exports = router;