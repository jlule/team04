import ProductData from './productData.js'
import ProductList from './productList.js'
import { loadHeaderFooter } from './utils.js'

loadHeaderFooter();

const product_data = new ProductData('tents')
console.log(product_data)

const listElement = document.querySelector('.product-list')

const product_list = new ProductList('tents', product_data, listElement)
product_list.init();

console.log(product_list)


// PopUp for the newsletter...


let closeButton = document.querySelector("#exit-banner")

function popUp() {

    document.querySelector("#pop-up-box").style.display = "block";

}

function closePopUp(){

    document.querySelector("#pop-up-box").style.display = "none";

}


closeButton.addEventListener("click", closePopUp)
window.onload = popUp() 

