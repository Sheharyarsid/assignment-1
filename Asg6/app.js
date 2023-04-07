// ANS 06: //Sheharyar Siddiqui

let num = +prompt("Enter number");
if(num % 3==0 && num % 5==0 ){
    console.log("FizzBuzz");
} else if(num % 5 ==0){
    console.log("Buzz");
} else if (num % 3==0){
    console.log("Fizz");
} else {
    console.log("Invalid Number");
}