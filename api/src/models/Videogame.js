const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
	// defino el modelo
	sequelize.define(
		'Videogame',
		{
			id: {
				type: DataTypes.UUID,
				primaryKey: true,
				unique: true,
				allowNull: false,
				defaultValue: DataTypes.UUIDV4,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			description: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			released: {
				type: DataTypes.DATEONLY,
				defaultValue: DataTypes.NOW,
			},
			rating: {
				type: DataTypes.FLOAT,
				defaultValue: 0,
			},
			platforms: {
				type: DataTypes.ARRAY(DataTypes.JSON),
				allowNull: false,
			},
		},
		{ timestamps: false }
	);
};
