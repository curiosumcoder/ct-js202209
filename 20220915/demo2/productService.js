class ProductService 
{
    constructor(baseURL='http://localhost')
    {
        this.baseURL = baseURL;
    }

    get BaseURL()
    {
        return this.baseURL
    }

    search = (filter='') => products.filter(
        p => p.productName.toLowerCase().includes(
            filter.toLowerCase()));
}