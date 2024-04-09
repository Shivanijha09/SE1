console.log("External JS");

var names =["Ajay", "Bhuvan", "Ravi", "Ganesh"]; 
             
var  n =[112, 114, 116, 118];
var person =[123, "Ajay", "Developer", 0099912345, " Hyderabad" ]

console.log(person[3]);
console.log(person.length); console.log(n[3]);
console.log(n); // not accessing


n[0] =110;
console.log(n);
n[4] =120; //OR n[n.length] =120;
console.log(n);
///////////////


n.push(124, 126);
n.pop(124);
n.pop();n.pop();
n.unshift(110);
n.shift(110);
n.splice(1,2);
console.log(n);
n.splice(2,0,222,444);
console.log(n);
n.splice(4,0,118,120,122,124);  //added 4 element
console.log(n);
n.unshift(0,1);
console.log(n);
n.pop();
console.log(n);
n.unshift(108,110);
console.log(n);
n.shift();
console.log(n);
n.splice(n.length-1,1);
console.log(n);
n.splice(2,2,222,444);
console.log(n);
var m =n.splice(1,3);
console.log("After splice");
console.log(n);console.log(m);
var m =n.concat(200,4000);
console.log("After Concat");
console.log(n);console.log(m);
var p =n.concat(200,4000);
console.log("After Concat");
console.log(n);console.log(p);

console.log("All Elements of array");
console.log(n[0]);console.log(n[1]);
console.log(n[2]);console.log(n[3]);
console.log(n[4]);console.log(n[5]);
console.log(n[6]);console.log("using Loop");
for(var a=0; a<n.length; a++){
console.log(n[a]);
}
console.log("Opposite order");
for(var a=n.length-1; a>=0; a--){
console.log(n[a]);
}
console.log("New Style");
for(var a=1; a<=n.length; a++){
console.log(n[n.length-a]);
}
for(var a=1; a<=10; a++){
console.log("Ravi");
a++; //printed 5 times only, it will come to variable then check for condition then it will go to incrementation part 1,3, 5, 7,9//
}

for(var a=1; a<=10; a++){
console.log("Ravi");
 a = a+2; 
//printed 4 times only, it will come to variable then check for condition then it will go to incrementation part 1,4, 7, 10//
}
