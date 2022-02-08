
class Egreso extends Dato{
    static idEgresos = 0;
    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++idEgresos;
    }
    get idEgresos(){
        return this._id;
    }
}

