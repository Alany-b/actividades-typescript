const productName: String = "Hola este es el primer punto ";
const productPrice: Number = 20;
let productId: string | number = 9;
productId = "Hola";
// esta interfaz no es transpilada a javascript, solo es para typescript
interface Product {
  name: string;
  id: number | string;
  price?: number;
}

const myProduct: Product = {
  name: "fitito 1",
  price: 10000,
  id: 1,
};
// Las funciones reciben argumentos de tipos declarado en los () , a esa funcion
//
function updateStock(currentStock: number, quantityChange: number): number {
  return currentStock + quantityChange;
}

//Cuando llamamos a la funcion le pasamos los argumentos que espera
const result = updateStock(10, -2);

console.log(result);

// 3

// toma a la constante con uno de los 3 valores que le pasamos

let orderStatus: "pending" | "shipped" | "delivered" = "pending";

// le asignamos un valor

orderStatus = "shipped";

console.log("El estado de la orden es: ", orderStatus);

// enum
enum logLevel {
  info,
  warn,
  error,
}
//
function logMessage(Level: logLevel, message: string) {
  console.log(`[${logLevel[Level]}] - ${message}`);
}

logMessage(
  logLevel.info,
  "Este es un mensaje de informacion posicionado en 0 el siguiente sera 1"
);

// Glosario
// investigacion  con Colman Maximo
// Interface: Es una estructura que define la forma de un objeto, especificando las propiedades y sus tipos de datos.
//enums: Son un tipo de dato especial en TypeScript que permite definir un conjunto de valores constantes con nombres legibles.
// primero comenzaremos con enumeraciones numericas que probablemente resulten mas familiares
