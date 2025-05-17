const inputFieldEl = document.getElementById("input-field")
const addButtonEl=document.getElementById("add-btn")

addButtonEl.addEventListener("click",function() {
  let inputValue=inputFieldEl.value
  console.log(inputValue)
})