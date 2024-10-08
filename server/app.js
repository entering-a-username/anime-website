const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// routes
const authRoutes = require("./routes/authRoutes");
const searchRoutes = require("./routes/searchRoutes");
const APIRoutes = require("./routes/APIRoutes");

require("dotenv").config();

const app = express();

mongoose.connect(process.env.DB_URI);

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// middleware
// user check (if exists and who)

// routes
app.get("/", async (req, res) => {
    res.send("yo")
    // pass in forums and polls from db
    // pass in user to Home
})

app.use(authRoutes);
app.use(searchRoutes);
app.use(APIRoutes);

app.listen(3050);