class GridComponent
{
    constructor(targetId, data)
    {
        this.targetId = targetId;
        this.data = data;
    }

    render = () => {
        const results = document.getElementById(this.targetId);
        const filtered = this.data;

        if (results && filtered.length > 0)
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
}