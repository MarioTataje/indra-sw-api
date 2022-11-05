const planetSchema = {
    nombre: {
        notEmpty: true,
        errorMessage: "El nombre no puede estar vacio"
    },
    periodo_rotacion: {
        notEmpty: true,
        errorMessage: "El periodo de rotacion no puede estar vacio"
    },
    periodo_orbital: {
        notEmpty: true,
        errorMessage: "El periodo_orbital no puede estar vacio"
    },
    clima: {
        notEmpty: true,
        errorMessage: "El clima no puede estar vacio"
    },
    gravedad: {
        notEmpty: true,
        errorMessage: "La gravedad no puede estar vacia"
    },
    terreno: {
        notEmpty: true,
        errorMessage: "El terreno no puede estar vacio"
    },
    poblacion: {
        notEmpty: true,
        errorMessage: "La poblacion no puede estar vacia"
    },
}

module.exports = { planetSchema }
