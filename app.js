//DOM  DOCUMENT OBJECT MODEL   //PART 9

//Selecting elements
let smallImages = document.getElementsByClassName("oldImg");

for (let i = 0 ; i<smallImages.length; i++){
    console.dir(smallImages[i]);
}
//Query selector
console.dir (document.querySelector("h1"));     //by tag name
console.dir (document.querySelector("#description")); //by id
console.dir (document.querySelector(".oldImg")); //by classname

console.dir (document.querySelector("div a"));  // inside div anchor tag that first class is box link  

console.dir (document.querySelectorAll("div a")); //we get all tags 

//Using properties and methods 
//innertext  text content innerHTML
let para = document.querySelector('p')
console.log(para)
console.log(para.innerText)
console.log(para.textContent)
console.log(para.innerHTML)

// console.log(para.innerText= "Hi Iam <b> Peter parker</b>")   we cannot change to bold

console.log(para.innerHTML= "Hi Iam <b> Peter parker</b>")

let heading= document.querySelector("h1")
console.log(heading.innerHTML = `<ul>${heading.innerText} </ul>`)
console.log(heading.innerHTML= "<b> Spider man</b>")

//Manipulating attributes
let img = document.querySelector('img');
console.log(img)

img.getAttribute('id');
console.log(mainImg)

img.setAttribute('id','spidermanImg');
console.log(spidermanImg)

//Manipulating style
console.log(img.style)
console.dir(img)

let headingg=document.querySelector("h1")
console.log(headingg)

// headingg.style.color="purple"

headingg.style.backgroundColor="lightgreen"

let links= document.querySelectorAll(".box a")

// for (link of links ){  link.style.color= "brown"  //more easier way but set in inline style not inside css
// }
for (let i = 0 ; i<links.length; i++){
    links[i].style.color= "purple"
}

// let box = document.querySelector(".box")
// console.log(box.style)

// using classList
let imgg = document.querySelector('img');
console.log(imgg.classList)

let headiing=document.querySelector("h2")
console.log(headiing.classList)
let hh = headiing.classList.add("blue")  //to add 
console.log(hh)

let h = headiing.classList.remove("green")  //to remove
console.log(h)

let hhh = headiing.classList.contains("blue")  //to check if class exists
console.log(hhh)

let hhhh = headiing.classList.toggle("underline")  //to add or remove 
console.log(hhhh)//comes true but becomes false now 
let tog = headiing.classList.toggle("underline")  //to add or remove 
console.log(tog)//have become false now removed


let boxx = document.querySelector(".box")
let yellow = boxx.classList.add("yellowBg")  //to add 
console.log(yellow)
console.log(boxx.classList)

//Navigation

let h4 = document.querySelector("h4")
console.log(h4.parentElement)             //parentElement
let boxxx = document.querySelector(".box")
console.log(boxxx.children)               //children
console.log(boxxx.childElementCount)     //childElementCount

let ul = document.querySelector('ul')
console.log(ul.parentElement)
console.log(ul.children)

console.log(ul.children[1].previousElementSibling)  //previous
console.log(ul.children[1].nextElementSibling)      //next

let image= document.querySelector("img")
console.log(image.previousElementSibling.style.color = "orange")   //indirectly change color of h4 

// Adding elements 

let newP =document.createElement("p")
 console.log(newP)
 console.dir(newP)

 console.log(newP.innerText= "hi , iam a new para")
 console.dir(newP)

// console.log(newP.append(btn))

 //appendChild
 let body = document.querySelector('body')
console.log(body.appendChild(newP))      //in last in body

 let boxa = document.querySelector('.box')
console.log(boxa.appendChild(newP))      //last in box element

let btn = document.createElement("button")
console.dir(btn.innerText= "Click me")
console.log(boxa.appendChild(btn)) 
console.dir(btn.style.backgroundColor= "orange")

// append   add element in last
console.log(newP);
newP.append("  this is new text")
console.log(newP.append(btn))

//prepend    add elemnt in first
boxa.prepend(newP)
newP.prepend("  do not click this button")

//insertAdjacent

let button = document.createElement("button")
button.innerHTML= "NEW BUTTON!!"
console.log(button)

let p = document.querySelector("p")
console.log(p)
console.log(p.insertAdjacentElement('beforebegin',button))
p.insertAdjacentElement('afterbegin',button)
p.insertAdjacentElement('beforeend',button)
p.insertAdjacentElement('afterend',button)

// REmoving element
let bodyy = document.querySelector('body')
console.log(bodyy.removeChild(button))

// console.log(newP.remove(btn))

//Practice Qs

// que 1 <p> with red text says "hey iam red"
let pr = document.createElement("p")  // to create para
console.log(pr.innerText=("Hey iam red"))    //to write text inside para
body.append(pr)        //to add para in html document
pr.classList.add("red")   //to add color from css

// que 2 <h3> with blue text says "iam blue h3"
// let h3 = document.createElement("h3")  // to create h3
// console.log(h3.innerText=("Iam a blue h3!"))    //to write text inside h3
// body.append(h3)        //to add h3 in html document
// h3.classList.add("blue")

// que 3  <div> with a black border and pink background color with the another h1 and p
let div = document.createElement("div")  // to create div
let h1 = document.createElement("h1")
let pra = document.createElement("p")

h1.innerText="Iam in a div";
pra.innerText = "ME TOO"
div.append(h1,pra)
console.log(div.classList.add("div"))
body.append(div)
document.querySelector("body").append(div)

//Assignment questions Part 9
let butn = document.createElement("button")
let input = document.createElement("input")
butn.innerText= "Click me"
document.querySelector("body").append(input);
document.querySelector("body").append(butn)
//Adding new  attribute name
butn.setAttribute("id","btn")
input.setAttribute("placeholder", "username");

  //que 2 
let buttn = document.querySelector("#btn")
buttn.classList.add("btnStyle")
//que 3
let h3=  document.createElement("h3")
h3.innerText("DOM Practice")
h3.classList.add("domstyle")
document.querySelector("body").append(h3)
//que 4
let pp = document.createElement("p")
pp.innerHTML("Apna College <b>Delta</b> Practice")
document.querySelector("body").append(pp)







