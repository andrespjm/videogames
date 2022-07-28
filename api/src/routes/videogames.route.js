const { Router } = require('express');
const {
	getVideogames,
	getVideogameById,
	createNewVideogame,
} = require('../controllers/videogames.controllers.js');
const router = Router();

router.get('/', async (req, res) => {
	try {
		const totalLimit = 100;

		const videogames = await getVideogames(totalLimit);

		res.send(videogames);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const videogame = await getVideogameById(id);
		res.send(videogame);
	} catch (err) {
		res.status(404).json({ error: err.message });
	}
});

router.post('/', async (req, res) => {
	try {
		await createNewVideogame(req);
		res.send('¡Videojuego creado exitosamente!');
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

module.exports = router;
