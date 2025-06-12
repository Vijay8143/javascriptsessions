function age(){
    console.log('my age is 20');
}
age(); 
function sum(x,y){
    return x+y;
}
let op=sum(1,2);

// arrow function
const agee=(min)=>{
    console.log(min);
};
agee(20);

//function that takes string as input and returns the vowels from input
const countvowels=(x)=>{
    let count=0;
    for(let i of x){
        if (i==='a'||i==='e'||i==='i'||i==='o'||i==='u'){
            count++;
        }
    }
    return count;
};
let p=countvowels('vijay');
console.log(p);

//forEach function
let arr1=[1,2,3,4,5];
arr1.forEach((val)=>{
    console.log(val);;
})
//reduce method

let bigger=arr1.reduce((res,curr)=>{
    return res>curr?res:curr;//can also use res+curr for overall sum
});
console.log(bigger);

//using filter method
let students=[64,34,90,92,94,99];
let topthan90=students.filter((val)=>{
    
    return val>=90;
})
console.log(topthan90);

let n=prompt('enter a nummber');
let arr=[1,2,3,4,5];
for(let i=1;i<=n;i++){
    arr.unshift(i);
}
let allsum=arr.reduce((prev,curr)=>{
    return prev+curr;
});
let allproduct=arr.reduce((prev,curr)=>{
    return curr*prev;
})
console.log(`sum is ${allsum} and product is ${allproduct}`  );

