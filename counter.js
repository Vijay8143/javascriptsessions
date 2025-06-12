let count=document.querySelector("button");
let show=document.querySelector("p");
let prevcount=0;
count.addEventListener("click",()=>{
    prevcount++;
    show.textContent=`You have Clicked ${prevcount} times`
})