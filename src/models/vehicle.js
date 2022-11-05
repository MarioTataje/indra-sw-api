class Vehicle {
    constructor(id, nombre, modelo, fabricante, costo_en_creditos, pasajeros, tipo) {
        this.id= id;
        this.nombre = nombre;
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.costo_en_creditos = costo_en_creditos;
        this.pasajeros = pasajeros;
        this.tipo = tipo;
    }

    static mapData = request => {
        return new Vehicle(undefined, request.name, request.model, request.manufacturer, request.cost_in_credits,
                               request.passengers, request.vehicle_class);
    }

    static map = request => {
        return new Vehicle(request.id, request.nombre, request.modelo, request.fabricante, request.costo_en_creditos,
            request.pasajeros, request.tipo);
    }
}

module.exports = { Vehicle }