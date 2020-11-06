//uc1
const Max = 256;
let num = 1;
let n = 3;
let count=0;
while (num <= Max&&count<n) {
    count++;
    console.log(num);
    num *= 2;
}

//UC 2
function magicNumber(x, start, end) { 
    let mid=Math.floor((start + end)/2); 
    if (mid===x) return true;  
    if(mid > x)  
        return magicNumber(x, start, mid-1); 
    else
        return magicNumber(x, mid+1, end); 
} 

let magicnumber = 84
let range = { left: 1, right: 100 };
let flag = false;
while (!flag) {
    flag = magicNumber(magicnumber, 1,100);
}
console.log("Magic number is reached");

//UC3
const HEAD = 0;
const TAIL = 1;
let countH = 0;
let countT = 0;
let winner = false;
while (!winner) {
    let toss = Math.floor(Math.random() * 10) % 2;

    switch (toss) {
        case HEAD:
            countH++;
            if (countH == 11) winner = true;
            break;
        case TAIL:
            countT++;
            if (countT == 11) winner = true;
            break;
        default:
            break;
    }
}
if (countH == 11) {
    console.log("Head wins");
}
if (countT == 11) {
    console.log("Tail wins");
}

//UC 4

let start = 100;
let target = 200;
let totCount=0;
let wins=0;
let final = start;
while(final!=target&&final>0){
    totCount++;
    let bet = Math.floor(Math.random()*10)%2;
    if(bet==1){
        wins++;
        final+=2;
    }else{
        final--;
    }
}
if(final==target){
    console.log("Target is reached with number of wins: "+wins +" and total number of gambles: "+totCount);
}else{
    console.log("Lost");
}