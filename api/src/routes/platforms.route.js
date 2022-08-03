const { getPlatforms } = require('../controllers/platforms.controller');

const { Router } = require('express');

const router = Router();

router.get('/', async (req, res) => {
	try {
		res.send(await getPlatforms());
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

module.exports = router;
