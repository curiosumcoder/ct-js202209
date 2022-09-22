//import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";
import TableComponent from "./components/table.component.js";
import ProductService from "./services/product.service.js";

const ps = new ProductService(); // ProductService

document.querySelector("#app").innerHTML = `
  <form id="fSave">
    <div class="mb-3">
        <label class="form-label">Name</label>
        <input type="text" required maxlength="32" class="form-control" name="productName" />
    </div>
    <div class="mb-3">
        <label class="form-label">Unit Price</label>
        <input type="number" step="any" required class="form-control" name="unitPrice" />
    </div>
    <button class="btn btn-primary">Save</button>
  </form>
  <hr/>
  <div>
    <h5>Product search ...</h5>
    <form id="fSearch">
        <input type="search" placeholder="Type here ..." id="sSearch" />
    </form> 
    <table-component></table-component>
  </div>
`;

window.customElements.define("table-component", TableComponent);

document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");

  const tc = document.querySelector("table-component");
  let filtered = []; // Resultado de datos filtrado

  const fSave = document.querySelector("#fSave");
  fSave.addEventListener("submit", async (event) => {
    console.log("Saving ...");
    event.preventDefault();

    // Convertir los datos del formulario a JSON
    var formData = new FormData(fSave);
    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });

    await ps.save(object);
  });
  
  const fSearch = document.querySelector("#fSearch");
  fSearch.addEventListener("submit", async (event) => {
    //console.log('Searching ...');
    event.preventDefault();

    const filter = sSearch.value;
    if (filter !== "") {
      //console.log(`Searching ... ${filter}`);

      filtered = await ps.search(filter);
      tc.data = filtered.map(
        ({ productName, quantityPerUnit, unitPrice, category }) => ({
          productName,
          quantityPerUnit,
          unitPrice,
          categoryName: category?.categoryName ?? '',
        })
      );
    }
  });

  tc.addEventListener('click', event => {
    const p = filtered[tc.selected-1];
    console.log(p);
  });

  console.info("App ready!");
});
