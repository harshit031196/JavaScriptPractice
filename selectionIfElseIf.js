//UC!
let num = 3;
if(num == 0){
    console.log("Digit is ZERO");
}
else if(num == 1){
    console.log("Digit is ONE");
}
else if(num == 2){
    console.log("Digit is TWO");
}
else if(num == 3){
    console.log("Digit is THREE");
}
else if(num == 4){
    console.log("Digit is FOUR");
}
else if(num == 5){
    console.log("Digit is FIVE");
}
else if(num == 6){
    console.log("Digit is SIX");
}
else if(num == 7){
    console.log("Digit is SEVEN");
}
else if(num == 8){
    console.log("Digit is EIGHT");
}
else if(num == 9){
    console.log("Digit is NINE");
}
else{
    console.log("Number is not valid.");
}

//UC2
let dayNum = 1;
if(dayNum == 1)
  console.log("Sunday");
else if(dayNum == 2)
  console.log("Monday");
else if(dayNum == 3)
  console.log("Tuesday");
else if(dayNum == 4)
  console.log("Wednesday");
else if(dayNum == 5)
  console.log("Thursday");
else if(dayNum == 6)
  console.log("Friday");
else (dayNum == 7)
  console.log("Saturday");

// UC3
let num = 7418
let counter =0;
while (num > 0) {
    counter++;
    console.log((num%10));
    num/=10;
}

//UC4
const a = 9;
const b = 99;
const c = 999;

let exp1 = a+b*c;
let exp2 = a%b+c;
let exp3 = c+a/b;
let exp4 = a*b+c;
let maxVal = Math.max(exp1,exp2,exp3,exp4);
let minVal = Math.min(exp1,exp2,exp3,exp4);

if(exp1==maxVal){
    console.log("Max Value is :"+exp1);
}else if(exp2==maxVal){
    console.log("Max Value is :"+exp2);
}else if(exp3 == maxVal){
    console.log("Max Value is :"+exp3);
}else if(exp4 == maxVal){
    console.log("Max Value is :"+exp4);
}

if (exp1 == minVal) {
    console.log("Min Value is :" + exp1);
} else if (exp2 == minVal) {
    console.log("Min Value is :" + exp2);
} else if (exp3 == minVal) {
    console.log("Min Value is :" + exp3);
} else if (exp4 == minVal) {
    console.log("Min Value is :" + exp4);
}