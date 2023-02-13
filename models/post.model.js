const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please provide title"],
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: [true, "please provide autor name"],
    },
  },
  {
    timestamps: true,
  }
);



const Post = mongoose.model("Post",postSchema);


module.exports = Post;