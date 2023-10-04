import { formatAMPM } from "./date";
import { factorial } from "./factorial";
import { Cuadrado, Pentágono, Polígono, Triangulo } from "./poligonos";

<script type="module">
import { formatAMPM } from "./date.js";
import { factorial } from "./factorial.js"
import { Polígono } from "./poligonos.js"
import { Cuadrado } from "./poligonos.js"
import { Triangulo } from "./poligonos.js"
import { Pentágono } from "./poligonos.js"
</script>

console.log(formatAMPM(new Date));
console.log(factorial(5));
console.log(Triangulo);
console.log(Cuadrado);
console.log(Pentágono);