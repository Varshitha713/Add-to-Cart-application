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
  let itemsArray = Object.entries(snapshot.val())

 clearShoppingListEl()

  for (let i = 0 ;i < itemsArray.length; i++){

   let currentItem = itemsArray[i]
   let currentItemID = currentItem[0]
   let currentItemValue = currentItem[1]
    appendItemToShoppingListEl(currentItem)
  }
})
function clearShoppingListEl(){
shoppingListEl.innerHTML=""
}
//functions to refactor the code

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToShoppingListEl(item) {
   //shoppingListEl.innerHTML += `<li>${itemValue}</li>`
 let itemID =item[0]
 let itemValue =item[1]
   let newEl=document.createElement("li")
   newEl.textContent=itemValue
   shoppingListEl.append(newEl)
 }