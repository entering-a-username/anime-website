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

userSchema.post("save", function(next) {
    next();
})

const User = mongoose.model("user", userSchema);

module.exports = User;