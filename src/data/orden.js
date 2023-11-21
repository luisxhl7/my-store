export class Orden{
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes
        this._productos = []
        this._contadorProductosAgregados = 0
    }

    get getIdOrden(){
        return this._idOrden
    }
    
    agregarProducto(producto){
        this._productos.push(producto)
        localStorage.setItem('dataOfCart', JSON.stringify(this._productos))
        console.log('realizado con exito')
        // this._productos[this._contadorProductosAgregados++] = producto;
    }

    calcularTotal(){
        let totalVenta = 0;
        for (let producto of this._productos) {
            totalVenta += producto._precio
        }
        return totalVenta
    }
    
    mostrarOrden(){
        let productosOrden = '';
        for (let producto of this._productos) {
            productosOrden += `\n` + producto.toString() + ' ';
            
        }
        console.log(`Orden ${this._idOrden} Total: ${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}