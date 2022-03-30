const express = require("express");
const {getResourceById, getResources} = require("../controllers/resource");
const router = express.Router();

router.route("/").get().post();
router.route("/:id").get().delete().patch();

module.exports = router;
