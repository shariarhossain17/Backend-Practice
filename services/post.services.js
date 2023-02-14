const Post = require('../models/post.model')


exports.createPostService = async (data) => {
    const post = await Post.create(data);
    return post;
}

exports.getPostService = async ({currentPage,perPage}) => {
    console.log(currentPage,perPage);
    const result = await Post.find({}).skip((currentPage - 1) * perPage).limit(perPage);
    return result
}


exports.getPostServiceById = async (id) => {
    const post = await Post.findById(id).populate("author");
    return post
}

exports.updatePostServiceById = async (id,data) => {
    const post = await Post.updateOne({_id:id},data)
    return post
}

exports.deletePostServiceById = async (id) => {
    const result = await Post.deleteOne({_id:id});
    return result
}