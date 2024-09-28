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
    
    let param = username_email.includes("@") ? {email: username_email} : {username: username_email};
    
    const user = await this.findOne(param);

    if (user) {
        const auth = await bcrypt.compare(password, user.password);

        if (auth) {
            return user;
        }

        throw Error("incorrect password");
    }

    throw Error("incorrect email or username");
}

const User = mongoose.model("user", userSchema);

module.exports = User;