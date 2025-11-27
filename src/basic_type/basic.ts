// esta interfaz no es transpilada a javascript, solo es para typescript
interface Product {
  name: string;
  id: number | string;
  price?: number;
}

const myBasicProduct: Product = {
  name: "fitito 1",
  price: 10000,
  id: 1,
};
