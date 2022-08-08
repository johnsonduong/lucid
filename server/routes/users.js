const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

const { updatePassword, deleteUser, getUser } = require("../controllers/users");

router.put("/:id", updatePassword);

router.delete("/:id", deleteUser);

router.get("/:id", getUser);

module.exports = router;
