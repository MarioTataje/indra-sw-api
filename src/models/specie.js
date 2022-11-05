class Specie {
    constructor(id, nombre, clasificacion, designacion, color_piel,color_cabello, color_ojos, tiempo_vida, lenguaje) {
        this.id= id;
        this.nombre = nombre;
        this.clasificacion = clasificacion;
        this.designacion = designacion;
        this.color_piel = color_piel;
        this.color_cabello = color_cabello;
        this.color_ojos = color_ojos;
        this.tiempo_vida = tiempo_vida;
        this.lenguaje = lenguaje;
    }

    static mapData = request => {
        return new Specie(undefined, request.name, request.classification, request.designation, request.skin_colors,
            request.hair_colors, request.eye_colors, request.average_lifespan, request.language);
    }

    static map = request => {
        return new Specie(request.id, request.nombre, request.clasificacion, request.designacion, request.color_piel,
            request.color_cabello, request.color_ojos, request.tiempo_vida, request.lenguaje);
    }
}

module.exports = { Specie }