import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import  { getDatabase, ref,push}  from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
  databaseURL:"https://add-to-cart-d29a5-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const itemsInCart = ref(database, "items")
//here items are the acutal cart items



const inputFieldEl = document.getElementById("input-field")
const addButtonEl=document.getElementById("add-btn")
const shoppingListEl = document.getElementById("shopping-list")

addButtonEl.addEventListener("click",function() {
  let inputValue=inputFieldEl.value
   push(itemsInCart, inputValue)
  shoppingListEl.innerHTML += `<li>${inputValue}</li>`
  inputFieldEl.value=''
   //console.log(inputValue)
})








//functions to refactor the code

/*function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToShoppingListEl(itemValue) {
   shoppingListEl.innerHTML += `<li>${itemValue}</li>`
 }*/