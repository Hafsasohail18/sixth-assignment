// CHAPTER # 21-25: STRINGS METHODS


// TASK 1
 /*var fname=prompt(" Enter your first name: ");
 var lname=prompt(" Enter your last name: ");
 var FullName=fname + " " + lname;
 alert(" Good Morning! " + FullName);*/

 // TASK 2
 /*var FavMob= prompt(" Enter your favourite mobile : ");
 var length= FavMob.length;
 document.write(" My favourite mobile is: " + FavMob + "<br>");
 document.write(" Length of string: " + length);*/

 //TASK 3
 /*var word="Pakistani";
 var index=word.indexOf("n");
 document.write(" String: " + word + "<br>");
 document.write(" Index of n is : " + index);*/

 // TASK 4
/*var word="Hello World";
var index=word.lastIndexOf("l");
document.write(" String: " + word + "<br>");
document.write(" Index of l is : " + index);*/


//TASK 5
 /*var word="Pakistani";
 var index=word.indexOf("i");
 document.write(" String: " + word + "<br>");
 document.write(" Index of i is : " + index);*/

 //TASK 6
 /*var fname=prompt(" Enter your first name: ");
 var lname=prompt(" Enter your last name: ");
 var string= fname.concat(" " + lname);
 alert(" Good Morning! " + string);*/

 //TASK 7
 /*var city = "Hyderabad";
 document.write(" city: " + city + "<br>");
 var replace = city.replace("Hyder","Islam");
 document.write(" After replacement: " + replace);*/

 // TASK 8
 /*var message = "Ali and Sami are best friends. They play cricket and football together.";
 document.write(message + "<br>");
 var replace = message.replace(/and/g,"&");
 document.write(" After replacement: " + replace);*/

 // TASK 9
 /*var string= 472;
 document.write(" Value : " + string + "<br>");
 document.write(" Type : " + " string " + "<br>" );
 var num = parseInt(string);
 document.write(" Value : " + num + "<br>" );
 document.write(" Type : " + " Number "  + "<br>");*/

 // TASK 10
 /*var input = prompt(" Enter any text: ");
 document.write(" User input : " + input  + "<br>");
 var upper = input.toUpperCase();
 document.write(" Upper case : " + upper);*/

 // TASK 11
/*var input = prompt(" Enter any text: ");
 document.write(" User input : " + input  + "<br>");
 var upper = input.toLowerCase();
 document.write(" Upper case : " + upper);*/

 // TASK 12
 /*var num = 35.36;
 document.write(" Number : " + num);
 var string = num.toString();
 document.write(" String : " + string);*/

 //TASK 13
 /*var UserName= prompt(" Enter Username: ");
 for( var i = 0; i< UserName.length; i++) {
     var Uname = UserName.charCodeAt(i);
 if( Uname === 33 || Uname === 44 || Uname === 46 || Uname === 64){
     alert( " Please enter your valid Username.");
     break;
 }
}*/

 // TASK 14
/*var str = ("cake","apple pie","cookie", "chips", "patties");
 str.toUpperCase();
var user = prompt(" Welcome to Hafsa's Bakery. What do you want to order? ");
if(user === str){
    alert(" It is available");
}
else{
    alert(" Not available");
}*/

// TASK 15
/*var pass= prompt(" Enter your Password: ");
document.write(" Entered password: " + pass + "<br>");
for (var i = 0; i < pass.length ;i++){
    var char= pass.charCodeAt(i);
    if (char >=33 && char <=47 || char == 64){
    document.write(" Please enter only numbers and letters " + "<br>" + " Please enter a valid password ");
    break;
}
else if( parseInt(pass)){
    document.write(" Password should not start with numbers " + "<br>" + " Please enter a valid password");
    break;
}
 else if (pass.length <=6 ){
    document.write(" Password should be 6 characters long " + "<br>" + " Please enter a valid password ");
}
else{
    document.write(" Perfect! Your password is correct");
    break;
}
}*/

// TASK 16
/*var uni = "University of Karachi";
var split= uni.split();
document.write(split);*/

// TASK 17
/*var input= prompt(" Enter any word: ");
document.write(" User input: " + input + "<br>");
var LWord=input.charAt(input.length-1);
document.write( " Last cahracter of input: " + LWord);*/

// TASK 18
/*var string = "The quick brown fox jumps over the lazy dog";
var occur = string.indexOf("the");
document.write(occur);*/

// CHAPTER # 26-30: MATHS METHODS

// TASK 1
/*var num = prompt(" Enter any positive floating value : ");
document.write(" Number: " + num + "<br>" );
var round= Math.round(num);
document.write(" Round off value: " + round + "<br>");
var floor = Math.floor(num);
document.write(" Floor value: " + floor + "<br>" );
var ceil = Math.ceil(num);
document.write(" Ceil number: " + ceil + "<br>");*/

// TASK 2
/*var negNum= prompt(" Enter any negative floating number: ");
document.write(" Number: " + negNum + "<br>");
var round= Math.round(negNum);
document.write(" Round off value: " + round + "<br>");
var floor = Math.floor(negNum);
document.write(" Floor value: " + floor + "<br>" );
var ceil = Math.ceil(negNum);
document.write(" Ceil number: " + ceil + "<br>");*/

// TASK 3
/*var input= prompt(" Enter a number: ");
document.write(" The number is:" + input + "<br>");
var abs= Math.abs(input);
document.write(" The absolute value is : " + abs);*/

// TASK 4
/*var dice= Math.floor(Math.random()*6+1);
document.write(" Random dice value: " + dice);*/

// TASK 5
/*var toss = Math.floor(Math.random()*2+1);
document.write(toss + "<br>");
if(toss === 1){
    document.write(" Random coin value: " + "Tails");
}
else{
    document.write(" Random coin value: " + "Heads");
}*/

//TASK 6
/*var RanNum=Math.floor(Math.random()*100+1);
document.write(" The random number between 1 to 100: " + RanNum);*/

// TASK 7
/*var weight = prompt(" Enter your weight: ");
document.write(" The weight of the user is: " + weight + " kilograms ");*/

// TASK 8
/*var num= Math.floor(Math.random()*10+1);
var user= prompt(" Enter any number between 1 to 10: ");
if(num === user){
    alert(" Congratulation! You guessed the number correct:");
}
else{
    alert(" Try again.");
}*/

// CHAPTER 31-34:DATE METHODS
// TASK 1
/*var current= new Date();
document.write(current);*/

//TASK 2
/*var months= ['January','February','March','April','May','June','July','August','September','October','November','December'];
var A = new Date();
var current = months[A.getMonth()];
document.write(current);*/

// TASK 3
/*var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var A= new Date();
var current=days[A.getDay()];
document.write(current);*/

// TASK 4
/*var date=new Date();
var day= date.getDay();                                                        
if(day === 6 || day === 0){
    document.write(" It's fun day.");
} 
else{
    document.write("");
}*/

// TASK 5
/*var date= new Date();
if(date <= 16){
    document.write(" First fifteen days of month. ");
}
else{
    document.write(" Last days of month. ");
}*/

// TASK 6
/*var current= new Date();
document.write(" Current Date: " + current + "<br>");
var sec = current.getTime();
document.write(" Elapsed  milliseconds since January 1,1970 : " + sec + "<br>");
var min = sec/60000;
document.write(" Elapsed  minutes since January 1,1970 : " + min);*/

// TASK 7
/*var current = new Date();
var time = current.getHours();                                                // IT NEEDS TO CHECK.
document.write(time);
if(time <= 12){
    alert(" It's A.M");
}
else{
    alert(" It's P.M");
}*/

// TASK 8
/*var date = new Date();
date.setDate(11);
document.write(date);*/                                         // NOT DONE

// TASK 9
/*var date = new Date();
var FirstRam= new Date(" April 24,2020");
var cal = 24*60*60*1000;
var diff = Math.round(Math.abs(FirstRam-date)/cal);
document.write(diff + " days have passed since 1st Ramazan,2020 ");*/

// TASK 10
/*var curDate= new Date();
var RefDate= curDate.setDate("December 22,2001");
var diff = (curDate.getSeconds()-RefDate.getSeconds())*1000 ;
document.write(diff);*/

// TASK 11
/*var date= new Date();
date.setHours(date.getHours()-1);
document.write(date);*/

// TASK 12
/*var date= new Date();
date.setFullYear(date.getFullYear()-100);
document.write(date);*/

// TASK 13
/*var age= prompt(" Enter your age: ");
document.write(" Your age is " + age + "<br>");
var date= new Date();
date.getFullYear(date.getFullYear()-age);
document.write(date);*/


// TASK 14
/*document.write("<h1>K-Electric Bill</h1>")
var name= prompt(" Enter your name: ")
document.write("Customer name: " + name + "<br>");
document.write(" Month: June" + "<br>");
var unit= prompt(" Enter units: ");
document.write(" Number of Units : " + unit + "<br>");
var charges= prompt(" Enter unit charges: ");
document.write(" Charges per units :" + charges + "<br>");
var net = unit * charges;
document.write(" Net Amount Payable (within Due Date): "+ net + "<br>");+
document.write(" Late payment surcharge: 350 " + "<br>");
var gross = net + 350;
document.write(" Gross amount payment ( after due date): " + gross + "<br>");*/


// CHAPTER 35-38: FUNCTION

// TASK 1
/*function currentDate(date) {
    document.write(date)
}
currentDate(new Date());*/                

// TASK 2
/*var FirstName=prompt(" Enter your first name: ");
var LastName= prompt(" Enter your last name: ");

function greeting(greet){
    alert(greet)
}
greeting(" Hello " + FirstName + " " +  LastName + "!");*/

// TASK 3
/*var num1= +prompt(" Enter first number: ");
var num2=+prompt(" Enter second number: ");

function addition(add){
    var a= num1+num2;
    return a;
}
document.write(addition());*/

// TASK 4
/*var num1= +prompt(" Enter first number: ");
var num2=+prompt(" Enter second number: ");
var sign= +prompt(" Enter operator: ");

function calculator(cal){
    if(sign === "+"){
        var res= num1+num2;
        document.write(" Result: " + res);
    }
    else if(sign === "-"){
        var res=num1-num2;
        document.write(" Result: " + res);
    }
    else if(sign === "*"){
        var res = num1*num2;
        document.write(" Result: " + res);
    }
    else{
        var res = num1/num2;
        document.write(" Result: " + res);
}
calculator();*/

// TASK 5
/*function sqrt(a,b){
  var c = Math.pow(a,b);
  return c;
}
 document.write(sqrt(2,2));*/


// TASK 6
/*function Factorial(n) { 
    var ans=1; 
      for (var i = 2; i <= n; i++) 
        ans = ans * i; 
    return ans; 
}
  alert( Factorial(5) );*/

// TASK 7
/*var input1=prompt(" Enter start number: ");
var input2=prompt(" Enter last number: ");
function counting(count){
    for(var i=input1; i <= input2;i++){
        document.write(i + "<br>");
    }
}
counting();*/

// TASK 8
/*var base=prompt(" Enter base of right angle triangle: ");
var per= prompt(" Enter perpendicular of right angle triangle: ");
function calculatehypo(){
    function calculatebase(){
        var a= base*base;
        var b= per*per;
        document.write(a,b);
    }
    var c= a+b;
}
calculatebase();
calculatehypo();*/

// TASK 9
/*function RectangleArea(width,height){
var area=width*height;
return area;
}
document.write(RectangleArea(20,40));*/

/*function RectangleArea(){
    var area= 20*40;
    return area;
}
document.write(RectangleArea());*/


// TASK 10
/*var string=prompt(" Enter any word: ");*/

// TASK 11
/*function uppercase(string){
  var array1 = string.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write(uppercase("the quick brown fox"));*/

// TASK 12
/*function LongestWord(string){
 var Word=string.split(" ");
 Word.sort(function(a, b){return b.length - a.length});
 return Word[0];
}
document.write(LongestWord("Web Development Tutorials"));*/

// TASK 13
/*var a = prompt(" Enter any string : ");
var b = prompt(" Enter any letter: ");
function occurence(){
    var c = a.indexOf(b);
    return c; 
}
document.write(occurence());*/

// TASK 14
/*function Circumference(radius) {
    var y = (Math.PI * radius) * 2;
  document.write("The circumfrence of circle is " + y + "." + "<br>");
  }
  function Area(radius) {
    var x = (Math.PI * radius) * radius;
  document.write("The area of circle is " + x + ".");
  }
  
  Circumference(50);
  Area(30);*/
