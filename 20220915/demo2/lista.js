console.info('Iniciando lista ...');

const p = { id: 1, nombre: "Tomate" };

const datos = [
    p,
    { id: 2, nombre: "Lechuga" },
    { id: 3, nombre: "Zanahoria" }
];

// DOM API (Document Object Model)

const body = document.querySelector('body');

if (body)
{    
    let lineas = '';
    for (const p of datos) {
        lineas += `<li><span class='nombre'>${p.nombre}</span></li>`;
    }

    body.innerHTML += `<ul>${lineas}</ul>`;
}
