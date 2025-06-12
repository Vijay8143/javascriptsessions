//getting an element using the id
let para=document.getElementById("2");
console.log(para);
console.dir(para);
// by classname
let para2=document.getElementById("1");
console.dir(para2);
//by tag
let para3=document.getElementsByTagName('p');
console.log(para3);


let button=document.querySelector("button");
if(button.innerText=="changemode"){
    document.body.style.background="lightgreen";
}

//home work
let heading=document.querySelector("h1");
heading.innerText=heading.innerText +' from Vijay Reddy';
//get and set attribute of element/tag
let attr=heading.getAttribute("id");
console.log(attr);
console.log(heading.setAttribute("class","vijay"));
let heading1=document.querySelector("h1");
let el=document.createElement("button");
console.dir(el);//create new element
console.dir(heading1.after(el));//adding it after heading element outside
button.remove();//removed button
