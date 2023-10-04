class Polígono{
    constructor(lados, operación)
    {
        this.lados = lados;
        this.medida = this.medida;
    }
}

class Triangulo extends Poligono{
    area(){
        if (this.lados.medida === 3)
        {
            const [a, b, c] = this.lados;
            const l = this.perimetro() / 2;
            return Math.sqrt(l * (l - a) * (l - b) * (l - c));
        }
        else{
            return "Área no calculada";
        }
    }

    perimetro()
    {
        return this.lados.reduce((a, b) => a + b, 0)
    }
}

console.log(Triangulo);

export class Triangulo{

};