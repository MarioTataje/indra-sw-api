class Planet {
    constructor(id, nombre, periodo_rotacion, periodo_orbital, clima, gravedad, terreno, poblacion) {
        this.id = id;
        this.nombre = nombre;
        this.periodo_rotacion = periodo_rotacion;
        this.periodo_orbital = periodo_orbital;
        this.clima = clima;
        this.gravedad = gravedad;
        this.terreno = terreno;
        this.poblacion = poblacion;
    }

    static mapData = request => {
        return new Planet(undefined, request.name, request.rotation_period,
            request.orbital_period, request.climate, request.gravity, request.terrain, request.population);
    }

    static map = request => {
        return new Planet(request.id, request.nombre, request.clima,
            request.periodo_rotacion, request.periodo_orbital, request.gravedad, request.terreno, request.poblacion);
    }
}

module.exports = { Planet }