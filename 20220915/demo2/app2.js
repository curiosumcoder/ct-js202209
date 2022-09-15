'use strict';

fSearch.addEventListener('submit', event => {
    //console.log('Searching ...');
    event.preventDefault();

    const filter = sSearch.value;
    if (filter !== '')
    {
        console.log(`Searching ... ${filter}`);

        const ps = new ProductService();
        const filtered = ps.search(filter);
        console.log(filtered);

        if (filtered.length > 0)
        {
            results.innerHTML = '';

            const ul = document.createElement('ul');

            filtered.forEach(p => {
               const li = document.createElement('li');
               //li.innerText = p.productName;
               const p1 = document.createElement('p');
               p1.innerHTML = `${p.id} - <span class='nombre'>${p.productName}</span`;
               p1.innerHTML += `<br><small>${p.unitPrice}</small>`;
               li.appendChild(p1);

               ul.appendChild(li);
            });
            results.appendChild(ul);
        }
    }
});

const productSeach = filter => products.filter(p => p.productName.toLowerCase().includes(filter.toLowerCase()));

function Product(id=0, productName='', unitPrice=0.0) {
    this.id = id;
    this.productName = productName;
    this.unitPrice = unitPrice;

    this.description = () => `${this.id}, ${this.productName}, ${this.unitPrice}`;
}

Product.prototype.country = 'Costa Rica';

const p1 = new Product();
const p2 = new Product(123,'Tomates', 1200.0);

const ProductService = function() {
    this.search = (filter='') => products.filter(
        p => p.productName.toLowerCase().includes(
            filter.toLowerCase()));
}

const ps1 = new ProductService();


console.info('App ready!');