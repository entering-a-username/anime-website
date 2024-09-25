const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
    },

})

// before save
userSchema.pre("save", async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

userSchema.post("save", function(doc, next) {
    console.log("new user created");
    next();
})

// custom login functionality
userSchema.statics.login = async function(username_email, password) {

}

const User = mongoose.model("user", userSchema);

module.exports = User;