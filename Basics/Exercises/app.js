//1. Create a number variable num with some value, print "good" if number is divisible by 10 or print "bad" if not.
let num = 20;
console.log("Question 1");
if (num %10 == 0){
    console.log("Good");
}
else{
    console.log("Bad");
}

//2. A golden string is a golden string if it starts with character "A" or "a" and has a total length > 5, print if a string is golden or not.
console.log("Question 2");
let str = "Amanda";
if ((str[0] == "A" || str[0] == "a") && (str.length >5)){
    console.log("A golden string");
}
else{
    console.log("Not a golden string");
}

//3. Write a switch statement to print months in a quarter.
//Months in Quarter 1: Jan, Feb, March
//Months in Quarter 2: April, May, June
//Months in Quarter 3: July, Aug, Sept
//Months in Quarter 4: Oct, Nov, Dec
console.log("Question 3")
let quarter = 4;
switch(quarter){
    case 1:
        console.log("Quarter 1: Jan, Feb, March");
        break;
    case 2:
        console.log("Quarter 2: April, May, June");
        break;
    case 3:
        console.log("Quarter 3: July Aug, Sept");
        break;
    case 4:
        console.log("Quarter 4: Oct, Nov, Dec");
        break;
    default :
        console.log("Out of range");
}

//4 Write a program to find the largest of three numbers.
console.log("Question 4")
let a = 10, b = 40, c =50;
if (a>b && a>c){
    console.log("A is greatest");
}
else if(b>a && b>c){
    console.log("b is greatest");
}
else{
     console.log("c is greatest");
}

//5 Write a program to check if 2 numbers have the same last digit eg. 32 and 47852 have the same last digit ie.2.
let num1 = 32;
let num2 = 47852;
if((num1%10)== (num2%10)){
    console.log("Numbers have the same last digit ie.", num1%10);
}
else{
    console.log("numbers don't have the same last digit");
}