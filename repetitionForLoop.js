let n = 7;
let start = 1;
for (var i = 1; i <= n; i++) {
    start *= 2;
    console.log(start);
}


//uc2
let harmonicSum = 0;
for (var i = 1; i <= n; i++) {
    harmonicSum += (1 / i);
}
console.log(harmonicSum);


//uc3
let num = 111;
if(checkPrime(num)){
    console.log("The number is prime");
}else{
    console.log("The number is not prime");
}
function checkPrime(n){
    let sqrt = Math.floor(Math.sqrt(n));
    for(var i=2 ;i <= sqrt ;i++){
      if(n%i == 0){
        return false;
      }
    }
    return true;
}

//uc4
for (var i = 2; i <= n; i++) {
    if (checkPrime(i))
        console.log(i);
}


//UC5
function getFactorial(number) {
    if (number == 0) return 1;

    return number * getFactorial(number - 1);
}
console.log(getFactorial(n));


//UC 6
function getPrimeFactors(num) {
    for (var i = 2; i <= num; i++) {
        if(checkPrime(i)&&num%i==0){
            console.log(i)
        }
    }
}
getPrimeFactors(24);