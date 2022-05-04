function convertToJson(res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Bad Response");
    }
  }



export default class ProductData  {
    constructor(category) {

      this.category = category;
      this.path = `../json/${this.category}.json`;
    }
    getData() {

        function getProductsData() {

            fetch("../json/tents.json")
              .then(convertToJson)
              .then((data) => {
                return data;
              });
        }
    }
    
    findProductById(id) {
        const correctProduct = products.find((item) => item.Id === e.target.dataset.id);
        return correctProduct;
    }
}