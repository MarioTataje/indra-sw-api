const vehicleSchema = {
    nombre: {
        notEmpty: true,
        errorMessage: "El nombre no puede estar vacio"
    },
    modelo: {
        notEmpty: true,
        errorMessage: "El modelo no puede estar vacio"
    },
    fabricante: {
        notEmpty: true,
        errorMessage: "El fabricante no puede estar vacio"
    },
    costo_en_creditos: {
        notEmpty: true,
        errorMessage: "El costo_en_creditos no puede estar vacio"
    },
    pasajeros: {
        notEmpty: true,
        errorMessage: "La cantidad de pasajeros no puede estar vacia"
    },
    tipo: {
        notEmpty: true,
        errorMessage: "El tipo no puede estar vacio"
    },
}

module.exports = { vehicleSchema }
