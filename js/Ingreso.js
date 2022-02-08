
class Ingreso extends Dato{
    static idIngresos = 0;
    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Ingreso.idIngresos;
    }
    get idIngresos(){
        return this._id;
    }
}
