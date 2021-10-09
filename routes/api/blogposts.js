const router = require("express").Router();

// const router = express.Router()

router.get("/", (req, res) => {
    res.status("200").send("Hello")
})

module.exports = router