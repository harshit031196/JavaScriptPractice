//UC1  

function convert(value,type){
    switch(type){
      case "FAHRENHEIT":
            if(value < 32 || value > 212){
              console.log("Incorrect value!!!");
              break;
            }
            console.log("CONVERSION To FAHRENHEIT : " + (value*9/5) + 32);
            break;
      case "CELCIUS":
            if(value < 0 || value > 100){
              console.log("Incorrect value!!!");
              break;
            }
            console.log("DEGREE TO CELCIUS : " + (value - 32) * 5/9);
            break;
    }
  }
  convert(12,"CELCIUS");

//UC2

function checkPalindrome(number){
    let reverse = 0;
    let remainder=0;
    let temp = number;
    while(temp!=0){
        remainder = temp%10;
        reverse = reverse*10+remainder;
        temp = Math.floor(temp/10);
    }
    if(number == reverse){
        console.log("Number is Palindrome!!");
    } else{
        console.log("Number is not palindrome");
    }
    
}
checkPalindrome(121);
checkPalindrome(1212);

//UC3

function checkPrime(n){
    let sqrt = Math.floor(Math.sqrt(n));
    for(var i=2 ;i <= sqrt ;i++){
      if(n%i == 0){
        return false;
      }
    }
    return true;
}
let num = 111;
if(checkPrime(num)){
    console.log("The number is prime");
}else{
    console.log("The number is not prime");
}
checkPalindrome(num);
