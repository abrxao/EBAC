/*export class personImc{
    constructor(altura=0, peso=0, imc=0){
        this.altura=altura,
        this.peso=peso,
        this.imc=imc
    }
}

export function sum(a){
    var s=0;
    for(var i = 0; i < a.length; i++) {
        s+=a[i];        
    }
    return s;
}

export function IMC(a){
    a.imc= (a.peso/(a.altura*a.altura)).toFixed(2);
    return a;    
}*/


export class Products{
    
    constructor(price=0, id=0, name="",qtd=0){
        
        this.price=price,
        this.id=id,
        this.name=name,
        this.qtd=qtd
    }    
}