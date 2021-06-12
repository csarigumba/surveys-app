const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => res.json({ message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄" }));

module.exports = app;
