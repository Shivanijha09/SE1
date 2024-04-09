var person =[123, "Ajay","Developer",9900229911,"Hyderabad"];
//creating objects
//1. using objects litreal{}
//Object key:value
var p ={id:123, name_:"Ajay", job:"Developer", phno:9900229911, place:"Hyderabad"};
console.log(p.job);
//2.using new oprator
var prsn = new Object();
    prsn.id = "123";
    prsn.job = "Developer";
    prsn.phno = 9900229911;
    prsn.place = "Hyderabad";

//Person.prototype.organozation ="ABC IT SOLNS";
console.log(person);
console.log(p);
console.log(prsn);

var p2 = new Object();
p2.id =142;
p2.name_= "Ravi";
p2.job = "Doctor";
p2.phno = 777880202;
p2.place = "Chennai";
console.log(p2);



function Person(a,b,c,d,e,g){
this.id=a;
this.name_=b;
this.job=c;
this.phno=d;
this.place=e;
this.salary=g;

this.info = function(){
console.log(this.name_+ " lives in "+this.place);

            }

this.annualSalary = function(){
console.log(this.salary*12);

            }
}
Person.prototype.about = "XYZ IT SOL PVT LTD";


//Person.prototype.organozation =function(){}
//"XYZ IT SOL PVT LTD";//object prototype or object constructor 
var p3 = new Person(144, "Hari","Tester",88888888,"Delhi",2000);
var p4 = new Person(188, "Ravi","Wester",99999999,"Chennai",4000);
console.log(p3.name_);
console.log(p3);
console.log(p3.organization);
console.log(p4);

//Object => properties+ functions =>members
//var n =[1,2,4,5]; n.length; n.push
p4.info();
p4.annualSalary();








