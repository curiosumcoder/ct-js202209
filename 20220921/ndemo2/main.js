import ProductService, * as services from "./product.service.js";

const ps = new ProductService();
const data = ps.search("ar");

data.forEach(p => console.log(`${p.productName}, ${p.unitPrice}`))