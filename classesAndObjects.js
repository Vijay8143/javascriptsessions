const employee={
    calcTax1(){
        console.log("tax is 10%")
    }
};
let Vijay={
    salary:()=>{
    console.log("salary : 10000");
    },
    calcTax1(){
        console.log("tax is 20%")
    }
};
Vijay.__proto__=employee;//ASSIGNING THE CALCTAX AS PROTOTYPE
Vijay.calcTax1();//if same name calctax1 are defined in prototype and obj,the obj function overrides the prototype


class Car{       //class
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop")
    }
    setBrand(brand){
        this.brand=brand; //same name can be given
    }
}
let obj1=new Car();
obj1.start();
obj1.stop();
obj1.setBrand('object1');
//classes used when same template is used again and again

//Constructor
class student{
    constructor(){
        console.log('creating new object');
    }
    name(Name){
        console.log(`i am ${Name}`);
    }
}
//creating an object for student named vijay
let vijay=new student();//constructor invoked
vijay.name('Vijay');
//another student
let vinay=new student();//new constructor
vinay.name('Vinay');

//Inheritance:Passing down prop & methods from parent to child class
//Method Overriding(use extends keyword)
class Parent{
    hello(){
        console.log("hello");
    } 
}
class Child extends Parent{
}

let obj=new Child();
obj.hello(); 

//in case of same method in both parent and child class,child class overrides it.
//to acess parent class properties from child class, we use the super keyword
class Human{
    eats(){
        console.log('eat');
    }
    sleeps(){
        console.log('sleep');
    }
    work(){
        console.log('do nothing');
    }
}
class Doctor extends Human{
    work(){
        super.work() //invoke super
        console.log('see patients and cure them');
    }
}
let dochuman=new Doctor();
dochuman.work();

//error  handling
try{
    console.log(a+b+c);
}
catch(err){
    console.log(err)
}
finally     {
    console.log("i am finally block")
}
