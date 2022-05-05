import ProductData from './productData.js';
import { getParams } from './util.js';
const dataSource = new ProductData('tents');
console.log(dataSource.getData());

const productId = getParam('product');

console.log(dataSource.findProductById(productId));

let products = [];


function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}


// or should we do it this way?
// async function getProductsDataAwait() {
//   products = await fetch("../json/tents.json").then(convertToJson);
// }

// add to cart button event handler
function addToCart(e) {
  setLocalStorage("so-cart", product);
}

