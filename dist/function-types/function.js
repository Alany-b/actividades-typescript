"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Las funciones reciben argumentos de tipos declarado en los () , a esa funcion
function updateStock(currentStock, quantityChange) {
    return currentStock + quantityChange;
}
//Cuando llamamos a la funcion le pasamos los argumentos que espera
const result = updateStock(10, -2);
console.log(result);
//# sourceMappingURL=function.js.map