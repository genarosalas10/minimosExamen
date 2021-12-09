'use strict'
/**
 * @class La clase Factura crea una nueva factura con un cliente, una base imponible y el iva
 */







/**
 *
 *
 * @export
 * @class Factura
 */
export class Factura
{
    /**
     * Creates an instance of Factura.
     * @param {*} [cliente=null]
     * @param {number} [base=0]
     * @param {number} [iva=21]
     * @memberof Factura
     */
    constructor(cliente = null,base = 0,iva =21)
    {
        this.cliente=cliente
        this.base=base
        this.tipoIVA=iva
    }
    /**
     *
     *
     * @param {*} valor
     * @memberof Factura
     */
    setCliente(valor)
    {
        this.cliente=valor
    }
    getCliente()
    {
        return this.cliente
    }
    setBase(valor)
    {
        this.base=valor
    }
    getBase()
    {
        return  this.base
    }
    setTipoIVA(valor)
    {
        this.tipoIVA=valor
    }
    getTipoIVA()
    {
        
        return  this.tipoIVA
    }
    /**
     *  Calcula el total con IVA
    * @param {number} this.base la base imponible
    * @param {number} this.tipoIVA el tipo de IVA
    * @returns {number} el total con iva
    */
    getTotal()
    {
        return this.base+this.base*this.tipoIVA/100
    }
}