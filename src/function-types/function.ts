// Las funciones reciben argumentos de tipos declarado en los () , a esa funcion
function updateStock(currentStock: number, quantityChange: number): number {
  return currentStock + quantityChange;
}

//Cuando llamamos a la funcion le pasamos los argumentos que espera
const result = updateStock(10, -2);

console.log(result);
