class Polígono{
    constructor(lados, operación)
    {
        this.lados = lados;
        this.medida = this.medida;
    }
}

class Pentágono extends Poligono{
    area(){
        if (this.lados.medida === 5)
        {
            const [a, b, c, d, e] = this.lados;
            const l = medida;
            const apotema = l / (2 * Math.tan())
            return Math.sqrt((l * apotema) / 2);
        }
        else{
            return "Área no calculada";
        }
    }

    perimetro()
    {
        return this.lados.reduce(l * 5)
    }
}

export class Pentágono{

};