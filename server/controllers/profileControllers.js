const User = require("../models/User");

module.exports.getProfile = async (req, res) => {
    try {
        const { username } = req.query;
        console.log(username);
        const id = req.headers['authorization'];

        let user;

        if (username) {
            user = await User.findOne({username}).select("-password");
        } else if (id) {
            user = await User.findById(id).select("-password");
        }

        console.log(user)

        if (!user) {
            return res.status(404).json({error: "User not found"});
        }

        res.status(200).json(user);
    } catch (err) {
        console.error(err);
    }
}

module.exports.editProfile = async (req, res) => {
    const id = req.headers['authorization'];
    const { username, country, bio, socials } = req.body;

    const updates = {};

    if (username !== undefined && username !== "") {
        updates.username = username;
    }

    if (country !== undefined && country !== "") {
        updates.country = country;
    }

    if (bio !== undefined && bio !== "") {
        updates.bio = bio;
    }
    

    if (socials) {
        if (socials.instagram !== undefined && socials.instagram !== "") {
            updates.socials = updates.socials || {};
            updates.socials.instagram = socials.instagram;
        }
        if (socials.twitter !== undefined && socials.twitter !== "") {
            updates.socials = updates.socials || {};
            updates.socials.twitter = socials.twitter;
        }
        if (socials.facebook !== undefined && socials.facebook !== "") {
            updates.socials = updates.socials || {};
            updates.socials.facebook = socials.facebook;
        }
        if (socials.discord !== undefined && socials.discord !== "") {
            updates.socials = updates.socials || {};
            updates.socials.discord = socials.discord;
        }
    }

    if (Object.keys(updates).length === 0) {
        return res.status(400).json({ message: "no changes" });
    }

    try {
        const user = await User.findByIdAndUpdate(id, updates, {new: true});
        if (!user) {
            return res.status(404).json({error: "user not found"});
        }

        return res.status(200).json({redirect: true});


    } catch (err) {
        console.error(err);
    }
}