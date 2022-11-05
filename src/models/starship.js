class Starship {
    constructor(id, nombre, modelo, fabricante, maxima_velocidad, equipo, pasajeros, puntaje_hiper_motor, tipo) {
        this.id= id;
        this.nombre = nombre;
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.maxima_velocidad = maxima_velocidad;
        this.equipo = equipo;
        this.pasajeros = pasajeros;
        this.puntaje_hiper_motor = puntaje_hiper_motor;
        this.tipo = tipo;
    }

    static mapData = request => {
        return new Starship(undefined, request.name, request.model, request.manufacturer,
            request.max_atmosphering_speed, request.crew, request.passengers, request.hyperdrive_rating,
            request.starship_class);
    }

    static map = request => {
        return new Starship(request.id, request.nombre, request.modelo, request.fabricante, request.maxima_velocidad,
            request.equipo, request.pasajeros, request.puntaje_hiper_motor, request.tipo);
    }
}

module.exports = { Starship }