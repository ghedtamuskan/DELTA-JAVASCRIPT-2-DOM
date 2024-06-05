// let btns = document.querySelectorAll("button")

// for( btn of btns){
//     // btn.onclick = sayHello  //no parenthesis bcoz we r only assigning name not executing it
//     // btn.onmouseenter = function(){
//     //     console.log("you entered a button")
//     // }
 

// //Event Listener
// //Multiple functions executed at the same time
//     btn.addEventListener("click",sayHello)
//     btn.addEventListener("click",sayName)

//     // btn.addEventListener ("dblclick", function (){
//     //     console.log("you double clicked me")
//     // })
// }
// function sayHello(){
//     alert("hello")
// }
// function sayName(){
//     alert("Apna college")
// }
   

// PART 10

//Activity for add event listeners

let btn = document.querySelector("button")

btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    let random = getRandomColor();
    h3.innerText = random;

    let div = document.querySelector("div");
    div.style.backgroundColor = random;
    console.log("color updated");
})

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}
//add event listner
let p= document.querySelector("p")
p.addEventListener("click",function(){
    console.log("para was clicked")
})
//eventListner for elements
let box = document.querySelector(".box");
box.addEventListener("click",function(){
    console.log("mouse inside box")
})

//this in Event listener
let butn = document.querySelector(".btn");
butn.addEventListener("click",function(){
    console.dir(this.style.backgroundColor="blue")
    
})
let h2 = document.querySelector("h2");
let h4 = document.querySelector("h4");

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor="yellow"
}
h2.addEventListener("click",changeColor)
h4.addEventListener("click",changeColor)

//Keyboards events
let input = document.querySelector("input");
input.addEventListener("keydown",function(event){
    console.log("code=",event.code)  //ArrowUp(U), ArrowDown(D),ArrowLeft(L),ArrowRight(P)
    if (event.code=="ArrowUp"){
        console.log("character moves forward")
    }
    else if (event.code=="ArrowDown"){
        console.log("character moves backward")
    }
    else if (event.code=="ArrowLeft"){
        console.log("character moves left")
    }
    else if (event.code=="ArrowRight"){
        console.log("character moves right")
    }
})
//Form event

let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    let user=  this.elements[0]  //document.querySelector("#user");    //this.elements[0]  ,form.elements[0]   both will work same
    let pass= document.querySelector("#pass");    // this.elements[1]
console.log(user.value)    //Extracting form data
console.log( pass.value)
alert(`Hi ${user.value},your password is set to ${pass.value}`)
console.dir(form)
// let inp = document.querySelector(".inp")  //Extracting form data
// console.dir(inp)
// console.log(inp.value)     //not inner text
})


//More events 
//change event
let user = document.querySelector("#user")
user.addEventListener("change",function(){
    console.log("input changed");
    console.log("final changed value = " , this.value)
})

//input event
let userr = document.querySelector("#user")
user.addEventListener("input",function(){
    // console.log("input event");
    console.log("final input value = " , this.value)
})

//Activity for more events  text editor
let inp = document.querySelector("#textor");
let para = document.querySelector("p")
inp.addEventListener("input" , function(){
    console.log(inp.value)
    p.innerText = inp.value;
})

let inputt = document.querySelector("#textevent");
inputt.addEventListener("mouseout",function(){
    console.log("mouse out")
    
})

let output = document.querySelector("#main");
let inpt = document.querySelector("#name");
inpt.addEventListener("input",function(){
    console.log(inpt.value)
   main.innerText=inpt.value
output.addEventListener("click",changeColor)
})
function changeColor(){
    console.log(main.innerText);
    main.style.backgroundColor="lightgreen"}



