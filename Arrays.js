//UC 1
let num = new Array();
var firstL =Number.MIN_VALUE;
var secondL=Number.MIN_VALUE;
var firstS=Number.MAX_VALUE;
var secondS=Number.MAX_VALUE;
for(var i=0;i<10;i++){
    var a = Math.floor(Math.random()*(999-100+1)+100);
    num.push(a);
    if(a>firstL){
        secondL=firstL;
        firstL=a;
    }else{
        if(a>secondL){
            secondL=a;
        }
    }
    if(a<firstS){
        secondS=firstS;
        firstS=a;
    }else{
        if(a<secondS){
            secondS=a;
        }
    }
}
console.log(num);
console.log("The second largest numbes is: "+secondL+" and second smallest number is: "+secondS);

//UC2
num.sort(function(a, b){return a-b});
console.log("The second smallest number is: "+num[1]);
num.sort(function(a, b){return b-a});
console.log("The second largest number is: "+num[1]);

//UC3
let primeFactors = new Array();
function checkPrime(n){
    let sqrt = Math.floor(Math.sqrt(n));
    for(var i=2 ;i <= sqrt ;i++){
      if(n%i == 0){
        return false;
      }
    }
    return true;
}
function getPrimeFactors(num) {
    for (var i = 2; i <= num; i++) {
        if(checkPrime(i)&&num%i==0){
            primeFactors.push(i);
        }
    }
}
getPrimeFactors(140);
for(var i=0;i<primeFactors.length;i++){
    console.log(primeFactors[i]);
}

//UC5
var start=1;
var end = 99;
let arr = new Array();
for(var i = start;i<=end;i++){
    if(i%11==0)arr.push(i);
}
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}
