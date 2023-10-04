import { formatAMPM } from "./date";
import { factorial } from "./factorial";
import { Cuadrado } from "./cuadrado.js"
import { Triangulo } from "./triangulo.js"
import { Pentágono } from "./pentagono.js"
import { Polígono } from "./poligonos";

<script type="module">
import { formatAMPM } from "./date.js";
import { factorial } from "./factorial.js"
import { Polígono} from "./poligonos.js"
import { Cuadrado } from "./cuadrado.js"
import { Triangulo } from "./triangulo.js"
import { Pentágono } from "./pentagono.js"
</script>

console.log(formatAMPM(new Date));
console.log(factorial(5));
console.log(Triangulo);
console.log(Cuadrado);
console.log(Pentágono);