'use strict';

const form0 = document.getElementById('fSearch');
const form1 = document.querySelector('#fSearch');

fSearch.addEventListener('submit', function (event) {
    //console.log('Searching ...');
    event.preventDefault();

    const filter = sSearch.value;
    if (filter !== '')
    {
        console.log(`Searching ... ${filter}`);

        const filtered = products.filter(function (p) {
            //return p.productName.toLowerCase().indexOf(filter.toLowerCase()) !== -1
            return p.productName.toLowerCase().includes(filter.toLowerCase())
        });
        console.log(filtered);

        if (filtered.length > 0)
        {
            results.innerHTML = '';

            const ul = document.createElement('ul');

            filtered.forEach(function (p) {
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

console.info('App ready!');