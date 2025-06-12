for(let i=1;i<=5;i++){
    console.log("i am ",i);
}
//for-of :different form of for loop to traverse arrays and strings
let str='vijay reddy';
for(let i of str){
    console.log(i);
}
//not intiallization and incrment required
//no indexing required just direct i value needs to be printed


//for-in used of objects
let i={ 
    name:'vijay',
    age:18,
    sex:"male"
};
for(let he in i){
    console.log(he,':',i[he]);
}

//print all even numbers from 1 to 100
// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

//strings 
let str1="vijay";
let str2="i am vijay reddy";
//inbuilt properties
console.log(str2.length);//length of string
console.log(str1[1]);//indices of string
//travsering string using length and indices
for(let i=0;i<str2.length;i++){
    console.log(str2[i]);
}


//TEMPLATE LITERALS
let ob={
    name:'vijay',
    age:'10'
};
//normal way of printing
console.log('i am' ,ob.name,'and i am',ob.age,'years old');
//using template literals ``
console.log( `i am ${ob.name}and i am ${ob.age} years old`)

//str methods
let nen='   vijay      ';
console.log(nen.toUpperCase());//uppercase
console.log(nen.trim());//trim to remove all  white spaces


//ARRAYS
let students=['vijay','latha','vinith','vinay'];
console.log(students);
console.log(students.length);
//arrays are mutable in javascript
for(let x of students){
    console.log(x);
}//using for of for iterating ,others loops can also be used

//array methods
students.push('bunny');//add at end
students.pop();
console.log(typeof(students.toString()));//convert to string
let students2=['bunny'];
students=students.concat(students2);
console.log(students);
//unshift-add at start 
students.unshift('ajay');
//shift -delete from start
let val=students.shift();
console.log(val);       