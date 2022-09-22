const PRODUCT_URL = "http://localhost:3000/products";

export default class ProductService {
  async get(id) {
    const response = await fetch(`${PRODUCT_URL}/${id}`);

    if (response.ok) {
      let data = await response.json();
      return data;
    }
  }

  async search(filter = "") {
    let url = `${PRODUCT_URL}?productName_like=${filter}`;
    //console.log(`URL: ${url}`);

    let response = await fetch(url);

    let data = null;
    if (response.ok) {
      data = await response.json();
    }

    return data;
  }

  async save(data) {
    let postResponse = await fetch(`${PRODUCT_URL}`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (postResponse.ok) {
      alert("¡La operación fué satisfactoria!");
    }
  }

  async edit(data) {
    let putResponse = await fetch(`${PRODUCT_URL}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (putResponse.ok) {
      alert("¡La operación fué satisfactoria!");
    }
  }

  async delete(id) {
    const response = await fetch(`${PRODUCT_URL}/${id}`, {
      method: "delete",
    });

    if (response.ok) {
      alert("¡La operación fué satisfactoria!");
    }
  }
}
