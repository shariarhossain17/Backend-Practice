const mongoose = require("mongoose");

const bCrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide your name"],
    },
    email: {
      type: String,
      required: [true, "please provide your name"],
    },
    password: {
      type: String,
      required: [true, "please provide passeords"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },

    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const password = this.password;

  const hashedPassword = bCrypt.hashSync(password);

  this.password = hashedPassword;

  next();
});

userSchema.methods.comparePassword = async function (password, hash) {
  const isPasswordValid = await bCrypt.compare(password, hash);
  return isPasswordValid;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
