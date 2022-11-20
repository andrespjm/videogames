const { Router } = require("express");
const { getGenres } = require("../controllers/genres.controller");
const router = Router();

router.get("/", async (req, res) => {
  try {
    res.send(await getGenres());
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
