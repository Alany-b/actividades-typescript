// Tipos Literales
type OrderStatus = "pending" | "shipped" | "delivered";

let orderStatus: OrderStatus = "pending";
console.log(`Estado de la orden inicial: ${orderStatus}`);

orderStatus = "shipped";
console.log(`Estado de la orden actualizado: ${orderStatus}`);
