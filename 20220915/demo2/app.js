'use strict';

fSearch.addEventListener('submit', event => {
    //console.log('Searching ...');
    event.preventDefault();

    const filter = sSearch.value;
    if (filter !== '')
    {
        console.log(`Searching ... ${filter}`);

        // ProductServie
        const ps = new ProductService();
        const filtered = ps.search(filter);
        console.log(filtered);

        // GridComponent
        const gc = new GridComponent('grid1', filtered);
        gc.render();
    }
});

console.info('App ready!');