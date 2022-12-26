//Ex1.1
for(let num = 0;num<=10;num++) {
    console.log(num);
}


//Ex1.2
for(let num1 = 1;num1 <= 10;num1++) {
if(num1%2 == 0) {
console.log(num1);
}
}

//Ex1.3
function evenNumUntil2(num) {
for( i =2; i<=num ;i +=2 ) {
    console.log(i);
   }
}
evenNumUntil2(20);

//Ex1.4
function printUntil20() {
    for(i=1;i<=20;i++) {
        if(i===13) {
            continue;
        }
         console.log(i);
    }
}
printUntil20()


//Ex1.5
function print10Reverse() {
    for(i=10;i>0;i--) {
        console.log(i);
    }
}

print10Reverse();


//Ex1.6

function printUntil7() {
    for(i=1;i<=10;i+=2) {
        console.log(i);
        if(i===7) {
            break;
        }
        
    }
}
printUntil7()

//Ex1.7

const array = [1,2,3,4,5,6,7,8,9,19,12,3,4,5,6,87,21,1,2]
function PrintArray (){
    for (let i =0;i<array.length;i++){
          console.log(array[i]);
    }
}
PrintArray(array);

//Ex1.8

const array1 = [1,2,3,4,5]
 function printEvenNumbers(array1){
for(i = 1;i<array1.length;i+=2) {
    console.log(array1[i]);
}
}

printEvenNumbers(array1);

//Ex1.9

function returnSum (array2) {
    let sum=0;
    for (i=0;i<=array2.length;i++) {
        sum+=i;
        console.log(sum);
    }
}

returnSum([1,2,3]);

//Ex1.10
function countTheWord (word) {
    let count = 0;
    for(i=0;i<=word.length;i++) {
     count ++; 
    }
    console.log(count);
}
countTheWord('dfgjsdfgkjndsfg');

//Ex1.11
function sortMyArray () {
    let mainArray=[2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
    let evensArray = [];
    let oddsArray = [];
    for(let i=0;i<mainArray.length;i++) {
        if(mainArray[i] %2 ==0) {
            evensArray.push(mainArray[i]);
        }
        else {
            oddsArray.push(mainArray[i]);
        }
       
    }
    console.log(evensArray);
    console.log(oddsArray);
}
sortMyArray();


//Ex1.12
function checkTheY(str) {
    for(let i = 0; i< str.length; i++){
        if(str.indexOf("y") != -1) {
            console.log('yes!');
            break;
        }
        else {
            console.log('no!!');
        }
    }
}

checkTheY('hillel hey');


//Ex1.13
function findTheBiggestNum(array4) {
     array4 = [1,40,100,3,5,77];
    let biggest= 0;
    for(i=0;i<array4.length;i++) {
if(array4[i]>biggest) {
    biggest = array4[i];
}
    }
    console.log(biggest);
}
findTheBiggestNum();

//Ex2

let startfuel;
let astronautsNum;
let altitudeLevel;

//2.1
function num (){
let z = 1;
while(z<=10) {
 console.log(z);
 z++;   
}
}
num()

//2.2
function even(){
let e = 2;
while(e<=10){ 
console.log(e);
e+=2 
}
}
even()

//2.3
function odd(){
    let o = 1;
    while(o<=10){ 
    console.log(o);
    o+=2 
    }
    }
    odd()


//2.4
function ReversNum(){
    let i = 10;
    while(i>0){ 
    console.log(i);
    i-=1
    }
    }
    ReversNum()

//2.5
function YourNumber (){
let num = prompt("What is the secret number?");
let i = 1;
while (i <= num){
console.log(i)
i++;
}
}
YourNumber();

//2.6
function CalNumber (){
        let num = prompt("What is the secret number?");
        let i = 1;
        let sum = 0;
        while (i <= num){
        sum+=i;
        i++;
        }
        console.log(sum);
    }
    CalNumber();

//2.7
 function CalNumber1 (){
        let num = prompt("What is the secret number?");
        let i = 1;
        let sum = 1;
        while (i <= num){
        sum*=i;
        i++;
        }
        console.log(sum);
    }
    CalNumber1();

//2.8
 function Patrol(){
        let sum = prompt("how much fuel do you have?");
        while (sum<=5000 || sum>=30000){
        sum = prompt("how much fuel do you have?")
        }
        console.log(sum);
    }
    Patrol();

function Sign(){
    let simbol = "";
    for (i = 0; i<6; i++){
        simbol+='*';
        console.log(simbol)
    }   
}
Sign()

function Sign1(){
        let simbol = "";
        for (i = 0; i<3; i++){
            for(j = 0; j<=i; j++){
                simbol+='*';
                console.log(simbol)
            }
    }
}
Sign1()

function multiplication(){
        for(i=0; i<=10; i++){
            for(j=0;j<=10; j++)
            console.log (`${i}*${j}=${i*j}`)
        }
}
multiplication();