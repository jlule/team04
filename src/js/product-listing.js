import ProductData from './productData.js'
import ProductList from './productList.js'
import { loadHeaderFooter, getParam } from './utils.js'

loadHeaderFooter();

// old code, when all we used was tents.
// const product_data = new ProductData('tents')
// console.log(product_data)

// const listElement = document.querySelector('.product-list')

// const product_list = new ProductList('tents', product_data, listElement)
// product_list.init();

// console.log(product_list)

const category = getParam('category');
// first create an instance of our ProductData class.
const dataSource = new ProductData();
// then get the element we want the product list to render in
const listElement = document.querySelector('.product-list');
// then create an instance of our ProductList class and send it the correct information.
const myList = new ProductList(category, dataSource, listElement);
// finally call the init method to show our products
myList.init();