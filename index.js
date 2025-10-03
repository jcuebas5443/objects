console.log(`helloworld`)

/*function change(){
let para = document.body.getElementsByTagName(`p`)
document.body.insertBefore(para[2],para[0])
console.log(para)
} 

let btn = document.getElementById("btn")
btn.remove()

let h3 = document.createElement(`p`)
h3.innerHTML = "<em>four</em>"
document.getElementById("daDiv").appendChild(h3)
*/

/*

let btn = document.createElement("button")
btn.innerHTML = "replace"
document.getElementById("daDiv").appendChild(btn)

btn.onclick = function replace(){
let p5 = document.createElement(`h1`)
p5.innerHTML="five"
let container = document.getElementById("daDiv")
let para = document.getElementById("four")
container.replaceChild(p5,para)
}
let count = 0
function repeat(){
    let child = document.createElement("p")
    child.innerHTML = "hello world "+ ++count
    let repeat = document.getElementById("repeat")
       repeat.appendChild(child) 
    

}

function repeat_1(x){
console.log(x)
console.log(x.id)
console.log(x.attributes)
console.log(x.value)
}
*/

function multi(){
    let input = Number(window.prompt(`please select a number`));
    let ul = document.getElementById("ul");
    let desighn = document.createElement("div");
    let innerUl = document.createElement("ul");

    desighn.style.marginBottom = "20px"; 

    for(let i = 1; i < 11; i++){
        let item = document.createElement("li");
        item.innerText = `${input} * ${i} = ${input * i}`;
        innerUl.appendChild(item);
    }

    desighn.appendChild(innerUl);
    ul.appendChild(desighn);
}










let colors=[]
function maker(){
    for(let x=1;x<11;x++){
let btn = document.createElement("button")
btn.innerHTML = "buttons"
btn.style.backgroundColor = randomColor()
document.getElementById("daDiv").appendChild(btn)

}
}
function randomColor(){
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)
     let original= `rgb(${r},${g},${b})`
     colors.push(original)
     return original
     

}


document.getElementById("colorSelect").addEventListener("change", function(){
    const buttons = document.getElementById("daDiv").getElementsByTagName("button");
    const value = this.value;

    for(let i=0; i<buttons.length; i++){
        if(value === "random"){
            buttons[i].style.backgroundColor = randomColor();
        } else if(value === "reset"){
            buttons[i].style.backgroundColor = colors[i];
        } else if(value){
            buttons[i].style.backgroundColor = value;
        }
    }
});
maker()





