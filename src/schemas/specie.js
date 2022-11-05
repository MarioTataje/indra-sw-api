const specieSchema = {
    nombre: {
        notEmpty: true,
        errorMessage: "El nombre no puede estar vacio"
    },
    clasificacion: {
        notEmpty: true,
        errorMessage: "La clasificacion no puede estar vacia"
    },
    designacion: {
        notEmpty: true,
        errorMessage: "La designacion no puede estar vacia"
    },
    color_piel: {
        notEmpty: true,
        errorMessage: "El color de piel no puede estar vacio"
    },
    color_cabello: {
        notEmpty: true,
        errorMessage: "El color de cabello no puede estar vacio"
    },
    color_ojos: {
        notEmpty: true,
        errorMessage: "El color de ojos no puede estar vacio"
    },
    tiempo_vida: {
        notEmpty: true,
        errorMessage: "El tiempo de vida no puede estar vacio"
    },
    lenguaje: {
        notEmpty: true,
        errorMessage: "El lenguaje no puede estar vacio"
    },
}

module.exports = { specieSchema }
