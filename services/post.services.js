const Post = require('../models/post.model')


exports.createPostService = async (data) => {
    const post = await Post.create(data);
    return post;
}

exports.getPostService = async () => {
    const result = await Post.find({});
    return result
}


exports.getPostServiceById = async (id) => {
    const post = await Post.findById(id);
    return post
}

exports.updatePostServiceById = async (id,data) => {
    const post = await Post.updateOne({_id:id},data)
    return post
}

exports.deletePostServiceById = async (id) => {
    const result = await Post.deleteOne({id});
    return result
}