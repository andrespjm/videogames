const { Router } = require("express");
const { getVideogames } = require("../controllers/videogames.controllers.js");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const videogames = await getVideogames();
    res.json(videogames);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
