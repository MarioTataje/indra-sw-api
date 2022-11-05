const starshipSchema = {
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
    maxima_velocidad: {
        notEmpty: true,
        errorMessage: "La maxima velocidad no puede estar vacia"
    },
    equipo: {
        notEmpty: true,
        errorMessage: "El equipo no puede estar vacio"
    },
    pasajeros: {
        notEmpty: true,
        errorMessage: "La cantidad de pasajeros no puede estar vacia"
    },
    puntaje_hiper_motor: {
        notEmpty: true,
        errorMessage: "El puntaje del hiper motor no puede estar vacio"
    },
    tipo: {
        notEmpty: true,
        errorMessage: "El tipo no puede estar vacio"
    },
}

module.exports = { starshipSchema }
