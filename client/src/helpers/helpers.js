export const encodeB64 = str => {
	// create a buffer
	const buff = Buffer.from(str.toString(), 'utf-8');

	// decode buffer as Base64
	const base64 = buff.toString('base64');

	return base64;
};
