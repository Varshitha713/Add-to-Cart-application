import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import  { getDatabase, ref,push,onValue}  from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


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
  clearInputFieldEl()
  
   //console.log(inputValue)
})
 
onValue(itemsInCart , function(snapshot){
  let itemsArray = Object.values(snapshot.val())
 clearShoppingListEl()
  for (let i = 0 ;i <   itemsArray.length;i++){
    appendItemToShoppingListEl(itemsArray[i])
  }
})
function clearShoppingListEl(){
shoppingListEl.innerHTML=""
}
//functions to refactor the code

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToShoppingListEl(itemValue) {
   shoppingListEl.innerHTML += `<li>${itemValue}</li>`
 }