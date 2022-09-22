import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
  <h1>JS demos</h1>
  </div>
`

// Destructuring
const p1 = {
  "id": 1,
  "productName": "Chai",
  "supplierID": 1,
  "categoryID": 1,
  "quantityPerUnit": "10 boxes x 20 bags",
  "unitPrice": 18,
  "unitsInStock": 39,
  "unitsOnOrder": 0,
  "reorderLevel": 10,
  "discontinued": false,
  "category": {
    "categoryID": 1,
    "categoryName": "Beverages",
    "description": "Soft drinks, coffees, teas, beers, and ales"
  } 
};

const { productName, unitPrice, category } = p1;
console.log(productName, unitPrice, category.categoryName);

const p1KeyValue = Object.entries(p1);
console.log(p1KeyValue);

//console.clear();
const [a,b] = [1,2];
console.log(a,b);

const [[k1,v1],[k2,v2]] = p1KeyValue;
console.log(k1,v1,k2,v2);

// this
console.clear();
const o1 = {
  firstName: 'Gilberto',
  lastName: 'Bermúdez',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  fullName2: () => {
    return `${this.firstName} ${this.lastName}`;
  }
}

//console.log(o1.fullName());  // !!!!!!!!!!!!!!
let nombreCompleto = o1.fullName;
//console.log(nombreCompleto());

//console.log(o1.fullName2());

console.clear();
function Person() {
  this.firstName = 'Gilberto';
  this.lastName = 'Garro';

  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  }
  this.fullName2 = () => {
    return `2: ${this.firstName} ${this.lastName}`;
  }

  console.log('Current this:', this);  
  if (this instanceof Array)
  {
    console.log('Es un arreglo: ', this.length);
  }
}

//console.log(Person());

const o2 = new Person();  // !!!!!!!!!!!!!!
//console.dir(o2);
//console.log(o2.fullName());
//nombreCompleto = o2.fullName;
//console.log(nombreCompleto());

//console.log(o2.fullName2());
//nombreCompleto = o2.fullName2;
//console.log(nombreCompleto());

console.clear();
const persons = [Person,Person];
//console.log(persons[0]());

// call, apply, bind 
console.clear()
function verAlThis()
{
  console.log('Ver al this:', this ?? '')
}

//verAlThis();
//verAlThis.apply(o1);
//verAlThis.call(o1);
//verAlThis.bind(o1)();

console.clear()
class PersonClass {
  firstName = 'Gilberto';
  lastName = 'Garro';

  fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  }
  fullName2 = () => {
    return `2: ${this.firstName} ${this.lastName}`;
  }
}

const o3 = new PersonClass();
//console.dir(o3);
//console.log(o3.fullName());
// nombreCompleto = o3.fullName;
// console.log(nombreCompleto());
//console.log(o3.fullName2());
nombreCompleto = o3.fullName2;
console.log(nombreCompleto());
