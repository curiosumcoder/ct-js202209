import ProductService from './product.service.js';

const ps = new ProductService();

console.log(ps.search('queso'));

console.log('App ready!');