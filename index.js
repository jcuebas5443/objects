

let cart =[]
let item = document.getElementById("item-input")
let addItem = document.getElementById("add-button")
let groceryList = document.getElementById("grocery-list")


//make this list
function list(){
    groceryList.innerHTML =""

    if (cart.length===0){
        groceryList.innerHTML = "<li>no items yet</li>"
        return
    }
      for (var i = 0; i < cart.length; i++) {
    var li = document.createElement("li");
    li.textContent = cart[i].name;
    

    if(cart[i].purchased) {
      li.classList.add('purchased')
    }
    li.setAttribute('data-index', i)
    li.addEventListener('click', togglePurchased);
    groceryList.appendChild(li);
    
  }
  
}




//add
function addGrocery(){
   var name=item.value 
   if(name.trim()===""){
    return
   }
   cart.push({name:name ,purchased:false})
   item.value= ""
   list()

}

list()


function togglePurchased (event) {
  const listItem = event.currentTarget;
  const index = listItem.getAttribute('data-index');
  
  
  cart[index].purchased = !cart[index].purchased; 
  
  
  list();
}
