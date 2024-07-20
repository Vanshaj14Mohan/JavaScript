//1 ->"A good string" is a string that starts with "a" 7 has a length > 3. WAP to find if a string is good or not.

let str = "amazing"
if(str[0]=== "a" && str.length >3){
    console.log("A Good string");
}
else{
    console.log("Not a good string");
}

//2 ->Output based.
let num = 12;
if((num %3 ===0) && (num+1 ===15) || (num - 1 ===11)){
    console.log("safe");
}
else{
    console.log("Unsafe");
}