const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();

const app = express();

mongoose.connect(process.env.DB_URI);

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// middleware
// user check (if exists and who)

// routes
app.get("/", async (req, res) => {
    // pass in forums and polls from db
    // pass in user to Home
})

app.listen(3030);