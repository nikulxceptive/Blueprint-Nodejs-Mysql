const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    return res.status(200).send({ status: 'online', msg: 'Success' });
});

module.exports = router;
