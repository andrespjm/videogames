const { Router } = require("express");
const {
  getVideogames,
  getVideogameById,
} = require("../controllers/videogames.controllers.js");
const router = Router();

router.get("/", async (req, res) => {
  try {
    let { name, page = 0, size = 15 } = req.query;
    name = name || "";

    const videogames = await getVideogames(name, page, size);

    res.send(videogames);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const videogame = await getVideogameById(id);
    res.send(videogame);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = router;
