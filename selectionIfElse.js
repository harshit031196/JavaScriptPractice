//UC1
var a = Math.floor(Math.random()*(999-100+1)+100);
var b = Math.floor(Math.random()*(999-100+1)+100);
var c = Math.floor(Math.random()*(999-100+1)+100);
if(a>b){
    if(a>c){
        console.log("Maximum number is: "+a);
    }else{
        console.log("Maximum number is: "+c);
    }
}else{
    if(b>c){
        console.log("Maximum number is: "+b);
    }else{
        console.log("Maximum number is: "+c);
    }
}

if(a<b){
    if(a<c){
        console.log("Minimum number is: "+a);
    }else{
        console.log("Minimum number is: "+c);
    }
}else{
    if(b<c){
        console.log("Minimum number is: "+b);
    }else{
        console.log("Minimum number is: "+c);
    }
}

// //UC2
const startDate = new Date('03/01/2020');
const endDate = new Date('06/30/2020');


var checkDate = new Date(2020, 05, 24);
 if(checkDate >= startDate && checkDate <= endDate) {
    console.log("true");
  }else{
    console.log("false");
  }


//uc3
let year = 2016;
if(year%4 ==0 && year%100 != 0){
  console.log("Leap year");
} else if (year % 400 == 0){
  console.log("Leap year");
}else console.log("Not a leap year");

//uc4
var toss = Math.floor(Math.random()*10)%2;
if(toss==1){
    console.log("Heads");
}else{
    console.log("Tails");
}