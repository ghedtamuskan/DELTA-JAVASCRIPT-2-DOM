//Building todo with DOM

let btn = document.querySelector("button")
let ul = document.querySelector("ul")         //accessing our elements
let inp = document.querySelector("input")

btn.addEventListener("click", function(){
    let item = document.createElement("li");      //creating list item 
    item.innerText = inp.value;
    ul.appendChild(item);     //we want to add item as a child inside ul
    inp.value="";          //after adding reseting to empty string
    
    let delbtn = document.createElement("button")  //creating delete button for new elements in our todo list
    delbtn.innerText = "delete"
    delbtn.classList.add("delete")
   item.appendChild(delbtn)

})

ul.addEventListener("click", function(event){
    if(event.target.nodeName=="BUTTON"){          //event delegation   using event bubbling
        let listItem= event.target.parentElement;  // which item is clicked
        listItem.remove()};     
    console.log("deleted")
})
