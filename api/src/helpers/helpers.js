const decodeB64 = base64 => {
	// create a buffer
	const buff = Buffer.from(base64, 'base64');

	// decode buffer as UTF-8
	const str = buff.toString('utf-8');

	return str;
};

module.exports = {
	decodeB64,
};
