//this is a comment and next we will learn about operators
//arithmetic operators
console.log(1%2);//modulus
console.log(2**10);//exponential symbol **
console.log(1*2);
let a=10000;
console.log(--a);
a++;
console.log(a);
a--;
console.log(a);

//assignment operators
let b=10;
b+=1;
console.log(b);
b**=2;
console.log(b);
//others like +=,*=,/=,%= etc

//comparision operators
let x=10,y=20;
console.log(a==b);
let z='10';
console.log(x==z);//string explicitly changed into the number
console.log(x===z);//stricter version to restrict the conversion
//other like >,<,=<,=>
console.log(x<=y);


//logical operators
//and &&,or ||,not !
let cond1 = x===z;
let cond2= x==z;
console.log(cond1&&cond2);//false
console.log(cond1||cond2);//true
console.log(!cond1);//true


//CONDITIONAL STATEMENTS

//1) IF STATEMENT
let mode="white-mode";
if(mode!=="dark-mode"){
    alert("i am not in dark mode");
}

//IF ELSE STATEMENT
let num=10;
if(num%2==0){
    console.log('i am even');
}
else{
    console.log('i am odd');
}

//ELSE IF STATEMENT

let i=10;
if(i==1){
    console.log('i am one');
}
else if (i==2){
    console.log('i am two');

}
else if(i==3){
    console.log('i am three');
}else{
    console.log('i am ten');
}

//ternary operator;
let age=19;
let sex='m';
let gender;
age>18?'can vote':'cannotvote';
sex=='m'?gender='male':gender='female';
console.log(gender);

//switch
const  color ='blac';
switch(color){
    case'orange':
        console.log('orange');
        break;
    case 'black':
        console.log('i am black');
        break;
    default:
        console.log('vijay reddy')
}

//prompt:an alert that can take input 
let work=prompt('em chestunnnav ra');//saved prompt in variable such that input given to the prompt alert is allocated to this variable
if(work==='nothing'){
    alert('pani chesko ra pumka');
}

