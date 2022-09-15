'use strict';

fSearch.addEventListener('submit', event => {
    //console.log('Searching ...');
    event.preventDefault();

    const filter = sSearch.value;
    if (filter !== '')
    {
        console.log(`Searching ... ${filter}`);

        const filtered = productSeach(filter);
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

// Funciones
function productSeach(filter) {
    //var ABC = 123;
   
    return products.filter(p => p.productName.toLowerCase().includes(filter.toLowerCase()));
}

// Función anónima
const productSeach1 = function (filter='queso') {

    const result = products.filter(function (p) {        
        return p.productName.toLowerCase().includes(filter.toLowerCase())
    });
    
    return result;
}

// Arrow function
const productSeach2 = filter => {

    const result = products.filter(function (p) {        
        return p.productName.toLowerCase().includes(filter.toLowerCase())
    });
    
    return result;
}

const productSeach3 = filter => products.filter(p => p.productName.toLowerCase().includes(filter.toLowerCase()));


console.info('App ready!');