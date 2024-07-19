//using if-else statements
console.log("Traffic light demo")

let color = "yellow";

if(color === "red"){
    console.log("Stop, Color is red");
}
else if (color === "yellow"){
    console.log("Wait, Color is yellow");
}
else if (color === "green"){
    console.log("Go, Color is green");
}
 

let marks = 88;
if(marks >=90){
    console.log("A+");
}
else if(marks >80){
    console.log("A");
}
else if(marks >=80){
    console.log("B+");
}
else if(marks >=70){
    console.log("B");
}
else if(marks >=60){
    console.log("C");
}
else{
    console.log("D");
}

//Exercise
let size ="M";
if(size ==="XL"){
    console.log("Popcorn price is:", 250);
}
else if(size === "L"){
    console.log("Popcorn prize is:", 200);
}
else if(size === "M"){
    console.log("Popcorn prize is:", 100);
}
else{
    console.log("Popcorn prize is:", 50);
}