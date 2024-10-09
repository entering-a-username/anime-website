const Post = require("../models/Post");
const Comment = require("../models/Comment");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const handleErrors = (err) => {

}

module.exports.getPosts = async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 });

    res.json({posts});
}

module.exports.getPost = async (req, res) => {
    const id = req.params.id;
    try {
        const post = await Post.findById(id);

        res.status(200).json({post});

    } catch (err) {
        console.error(err);
    }
}

module.exports.createPost = async (req, res) => {
    const { title, snippet, body } = req.body;

    console.log(res.user)

    if (!res.user) {
        return res.status(401).json({ message: 'Unauthorized. Please log in.' });
    }

    try {
        // differenc ebetween new and create method
        const post = await Post.create({ title, snippet, body, createdBy: res.user._id });

        res.status(200).json({redirect: true});

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error. Please try again.' });
    }
}