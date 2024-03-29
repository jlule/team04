import ProductData from './productData.js';
import ProductDetails from './productDetails.js';
import { getParam }  from './utils.js';


const dataSource = new ProductData();
const productId = getParam('product');
const product = new ProductDetails(productId, dataSource);
product.init();


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
  
  setLocalStorage(e, product);

}


document.querySelector("#addToCart").addEventListener("click", addToCart)

