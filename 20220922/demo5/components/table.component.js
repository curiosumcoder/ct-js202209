export default class TableComponent extends HTMLElement {
  #attached = false;
  #tbody = null;
  #thead = null;
  #data = null;
  #selected = 0;
  constructor() {
    super();
  }
  connectedCallback() {
    this.#attached = true;
    this.innerHTML = `
        <style>
            table tr:hover {
                background-color: #CCFF33;
                cursor: pointer;
            }
        </style>
        <table id='table-container' class='table table-striped'>
            <thead></thead>
            <tbody></tbody>
        </table>         
        `;
    this.#tbody = this.querySelector("tbody");
    this.#thead = this.querySelector("thead");
    this.#tbody.addEventListener("click", event => {
        // <tr><td> ...
        this.#selected = event.target.parentNode.rowIndex;
    });
    this.#render();
  }
  #render() {
    if (this.#attached && this.#data !== null && this.#data.length > 0) {
      const keys = Object.keys(this.#data[0]);

      this.#thead.innerHTML = "";
      const tr = document.createElement("tr");
      keys.forEach((k) => {
        const th = document.createElement("th");
        th.innerText = k;
        tr.appendChild(th);
      });
      this.#thead.appendChild(tr);

      this.#tbody.innerHTML = "";
      this.#data.forEach((d) => {
        const tr = document.createElement("tr");
        keys.forEach((k) => {
          const td = document.createElement("td");
          td.innerText = d[k];
          tr.appendChild(td);
        });
        this.#tbody.appendChild(tr);
      });
    }
  }
  set data(data) {
    if (this.#data === data) return;
    this.#data = data;
    this.#render();
  }
  get data() {
    return this.#data;
  }
  get selected() {
    return this.#selected;
  }
}
