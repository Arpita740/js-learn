/*comments in Javascript*/
/*variablees*/
var A="arpita";
document.write(A,"<br>");
/*let*/
let a=10;
document.write(a,"<br>");
document.write(typeof(a),"<br>");
/*const*/
const s="hello";
document.write(s ,"<br>");
/*data type*/
var x="y";
var z=10
var u=false;
var array={first:"arpita"};
var sum= null;
var x=undefined;
document.write(x," ",z," ",sum," ",array," ",u)
/*arithmetic operator*/
document.write("<br><br>arithmatic<br>")
var num1=2
var num2=5
var sum=num2-num1;
document.write(sum,"<br>")
var num3=2
var num4=5
var sum2=num1*num2;
document.write(sum2,"<br>")
var num3=2
var num3=5
var sum3=num1/num2;
document.write(sum3,"<br>")
var num4=2
var num4=5
var sum4=num1**num2;
document.write(sum4,"<br>")
var num5=2
var num5=5
var sum5=num2%num1;
document.write(sum5,"<br>")
var num6=4
num6++
document.write(num6,"<br>")
var num6=4
num6--
document.write(num6,"<br> <br>")
/*assignment operator*/
document.write("<br><br>assignment operator<br>")
var h1=2
var h2=4
h2-=h1
document.write(h1,"</br>")
h1+=h2
document.write(h1,"</br>")
h1*=h2
document.write(h1,"</br>")
h1/=h2
document.write(h1,"</br>")
h1**=h2
document.write(h1,"</br>")
h1%=h2
document.write(h1,"</br>")
/*console*/
document.write("<br><br>google chrome console<br>")
var i="hello what"
console.log(i)
console.log([1,2,3])
console.error("oops")
console.warn("just warning")
console.time("test")
console.warn("just warning")
console.warn("just warning")
console.warn("just warning")
console.warn("just warning")
console.timeEnd("test")
/*comparision operator*/
var y=15
var z=16
console.log(y>z)
console.log(y==z)
console.log(y<z)
console.log(y<=z)
console.log(y>=z)
console.log(y===z)
console.log(y!=z)
console.log(y!==z)
/*if statement*/
var x=15
if(x>10){
    console.log("x greater")
}

/*logical operator*/
var age=20;
if(age>=18&&age<=21){
    console.log("eligeble");
}
if(age>=18||age<=21){
    console.log("eligeble to vote");
}
if(age!=18){
    console.log("yes this is not equal to 18")
}
/*if else*/
if(x>10){
    console.log("x greater")
}
else{
    console.log("not greater")
}
/*if else statement*/
document.write("<br><br>if else if<br>")
per=89
if(per>=80 && per<=100){
    document.write("distinction")   
}
else if(per>=60 && per<80)   
{
    document.write("good")   
}
else if(per>=35 && per<60)   
{
    document.write("pass")   
}
else if(per<35)   
{
    document.write("fail")   
}
else{
    document.write("enter valid marks")
}
/*ternary operator*/
document.write("<br><br>***ternary operator***<br>")
var i=8
var b=9

i>b?document.write("true"):document.write("false")
document.write("<br><br>***switch statement***<br>")
var day=1
switch (day) {
    case 0:
        
        break;
        case 0:
        document.write("monday")
        break;
        case 1:
            document.write("tuesday<br>")
        break;
        case 2:
            document.write("wednesday")
        break;
        case 3:
            document.write("thursday")
        break;
        case 4:
            document.write("friday")
        break;
        case 5:
            document.write("saturday")
        break;
        case 6: case 7:
            document.write("sunday")
        break;
      
    default:
        document.write("enter valid day")
        break;
}

var age=15
switch(true){
    case(age>=15 && age<=20) :
document.write("eligible")
break;
default:
        document.write("enter valid age")
        break;
}

document.write("<br><br>***alert box***<br>")
alert("Hello ")
var i=10;
var b=20
if(b>i){
    alert("b is greater")
}
else{
    alert("i greater")
}


document.write("<br><br>***confirm box***<br>")
var t=confirm("do you like javascript")
if(t){
    alert("thank you")}
    else{
        alert("oops")
    }
    document.write("<br><br>***pormpt box***<br>")
var t=prompt("what is your name?")
alert("Hello "+t)
document.write("Hello ",t)
document.write("<br><br>***Function***<br>")
function hello() {
    document.write("hello its function")
}
hello()
document.write("<br><br>***Function with parameter***<br>")
function sums(n1,n2) {
  var num3=n1+n2
    document.write(num3,"<br>")
}
sums(10,2)

function names1(fname="arpita",lname="sanyal") {
    
    document.write("<br>hello "+fname+" "+lname)
}
names1("ae","hu")
document.write("<br><br>***Function with return value***<br>")
function sum1(n1,n2) {
    var num3=n1+n2
     return num3 
  }
var h  =sum1(10,2)
  document.write(h,"<br>")
  
  document.write("<br><br>***global & local variable***<br>")
  var g="arpi"
  function hels(){
    var f="arpita"
    document.write(f,"<br>")
    document.write(g,"<br>")
  }
  hels();
  document.write(g)
  document.write("<br><br>***events***<br>")
  function names(fname="arpita",lname="sanyal") {
    
    alert("hello "+fname+" "+lname)
}
document.write("<br><br>***while loop***<br>")
var h=1
while(true){
    for( o=1;o<=3;o++)
    document.write("while loop <br>")
break
}
document.write("<br><br>***do while loop***<br>")
do {
    for( o=1;o<=4;o++)
    document.write(" do while loop <br>")
    break
} while (true);
document.write("<br><br>***for loop***<br>")
for(d=1;d<=3;d++){
    document.write("for loop <br>")
}
document.write("<br><br>***break and continue***<br>")
for(d=1;d<=3;d++){
    if (d==2) {
        document.write("con <br>")  
      continue  
    }
    document.write("continue <br>")
}
document.write("<br><br>***even odd no***<br>")
function evenodd(p) {
if (p%2==0) {
   document.write("even")

}
else{
    document.write("odd")    
}
}
evenodd(3)
document.write("<br><br>***nested loop***<br>")
for ( i = 1; i<=100; i=i+10) {
  for(j=i;j<i+10;j++){
document.write(j," ")
  }
   document.write("<br>") 
}
document.write("<br>") 
for(nume=1;nume<=5;nume++){
    for(numes=1;numes<=nume;numes++){
document.write(numes," ")

    }
    document.write("<br>") 
}
document.write("<br>") 
for(nume=1;nume<=5;nume++){
    for(numes=1;numes<=nume;numes++){
        document.write(nume," ")
    }
   
    document.write("<br>") 
}
document.write("<br>") 
document.write("<br><br>***array***<br>")
var array=[10,20,30,40]
for ( index = 0; index < array.length; index++) {
   
    document.write(array[index]," ")
}
document.write("<br><br>***create array***<br>")
var array=new Array(10,20,30)
for ( index = 0; index < array.length; index++) {
   
    document.write(array[index]," ")
}
document.write("<br>") 
var arrays=new Array()
arrays[0]=10
arrays[1]="poornima"
for ( index = 0; index < arrays.length; index++) {
   
    document.write(arrays[index]," ")
}
document.write("<br>") 

document.write("<br><br>***modify and remove***<br>")
var an=["arpita",20]
document.write(an,"<br>")
an[1]=21
document.write(an,"<br>")
delete an[1]
document.write(an,"<br>")
document.write("<br><br>***array sort***<br>")
var aa=["sanjay","aman","poornima"]
 document.write(aa,"<br>") 
 aa.sort();
 document.write(aa,"<br>") 
 document.write("<br><br>***reverse***<br>")
   aa.reverse()
   document.write(aa,"<br>")   

   document.write("<br><br>***pop push***<br>")
   var aa=["sanjay","aman","poornima"]
   document.write(aa,"<br>") 
   aa.pop();
   document.write(aa,"<br>") 
aa.push("aww")
document.write(aa,"<br>") 
document.write("<br><br>***shift and unshift***<br>")
var aa=["sanjay","aman","poornima"]
document.write(aa,"<br>") 
aa.shift()
document.write(aa,"<br>") 
aa.unshift("lon")
document.write(aa,"<br>") 
document.write("<br><br>***concat and join***<br>")
var aa=["sanjay","aman","poornima"]
document.write(aa,"<br>") 
var ab=[1,2,3]
document.write(ab,"<br>") 
var ac=aa.concat(ab)
document.write(ac,"<br>") 
var ad=ac.join(" / ")
document.write(ad,"<br>") 
document.write("<br><br>***slice and splice***<br>")
var aa=["sanjay","aman","poornima","pok"]
document.write(aa,"<br>") 
var ff=aa.slice(1,3)
document.write(ff,"<br>") 
var ab=[1,2,3]
document.write(ab,"<br>")
ab.splice(1,0,25,69)
document.write(ab,"<br>") 
document.write("<br><br>***is array***<br>")
var aa=["sanjay","aman","poornima","pok"]
document.write(aa,"<br>") 
af=Array.isArray(aa)
document.write(af,"<br>") 
var aa=10
document.write(aa,"<br>") 
af=Array.isArray(aa)
document.write(af,"<br>") 
document.write("<br><br>***indexof and lastindex***<br>")
var aa=["sanjay","aman","poornima","aman"]
document.write(aa,"<br>") 
var af=aa.indexOf("aman")
document.write(af,"<br>") 
var aa=["sanjay","aman","poornima","aman"]
document.write(aa,"<br>") 
var af=aa.indexOf("aman",2)
document.write(af,"<br>") 
var aa=["sanjay","aman","poornima","aman"]
document.write(aa,"<br>") 
var af=aa.lastIndexOf("aman")
document.write(af,"<br>") 
document.write("<br><br>***includes***<br>")
var aa=["sanjay","aman","poornima","aman"]
document.write(aa,"<br>") 
var af=aa.includes("aman")
document.write(af,"<br>") 
document.write("<br><br>***some() and every***<br>")
var ages=[10,20,5,15]
document.write(ages,"<br>") 

var af=ages.some(adult)
document.write(af,"<br>") 
function adult(ages) {
    return ages>=18
}
var ages=[10,20,5,15]
document.write(ages,"<br>") 
var af=ages.every(adult)
document.write(af,"<br>") 
function adult(ages) {
    return ages>=18
}
document.write("<br><br>***find() findindex()***<br>")
var ages=[10,20,5,15]
document.write(ages,"<br>") 
var af=ages.find(adult)
document.write(af,"<br>") 
function adult(ages) {
    return ages>=18
}
var ages=[10,20,5,15]
document.write(ages,"<br>") 
var af=ages.findIndex(adult)
document.write(af,"<br>") 
function adult(ages) {
    return ages>=18
}
document.write("<br><br>***array filterer***<br>")
var ages=[10,20,5,15,18,56]
document.write(ages,"<br>") 
var af=ages.filter(adult)
document.write(af,"<br>") 
function adult(ages) {
    return ages>=18
}
document.write("<br><br>***to string,valueof,fill()***<br>")
var ages=[10,20,5,15,18,56]
document.write(ages,"<br>") 
ages.toString()
document.write(ages,"<br>")
// fill
var ages=[10,20,5,15,18,56]
document.write(ages,"<br>") 
ages.fill("ram")
document.write(ages,"<br>")
document.write("<br><br>***for each***<br>")
var aa=["sanjay","aman","poornima","aman"]
document.write(aa,"<br>") 
aa.forEach(function(value){
document.write(value+"<br>")
})
var aa=["sanjay","aman","poornima","aman"]
document.write(aa,"<br>") 
aa.forEach(function(value,index){
document.write(index," ",value,"<br>")
})
var aa=["sanjay","aman","poornima","aman"]
document.write(aa,"<br>") 
aa.forEach(loop)
    function loop(value,index){
document.write(index," ",value,"<br>")
}
document.write("<br><br>***objects***<br>")
var aa={
    firstname:"arpita",
    lastname:"sanyal",
  
    friend:["ajay","anil"],
    age:function(){
        return 21
    },
   fullname:function(){
        return this.firstname+" "+this.lastname
    } ,
    living:{
        'city':'kolkata',
        'country':'india'
    }
};
document.write(aa.firstname,"<br>")
document.write(aa.friend,"<br>")
document.write(aa.age(),"<br>")
document.write(aa.fullname(),"<br>")
document.write(aa.living.city,"<br>")

var as=new Object();
as.fname="isha"
as.age=21
as.course="CS"
document.write(as.fname)
console.log(as)


document.write("<br><br>*** array of object***<br>")
var aa=[
{firstname:"arpita",age:21},
{firstname:"ajay",age:21},
{firstname:"anil",age:21}
];

for ( de = 0;de<aa.length ; de++) {
  document.write(aa[de].firstname," ",aa[de].age,"<br>")
    
}
document.write("<br><br>***const variable with array and object***<br>")
const po=[20,36,23]
document.write(po,"<br>")
po[2]=52
document.write(po,"<br>")
document.write("<br><br>***for in loop***<br>")
var aa={
    firstname:"arpita",
    lastname:"sanyal",
  age:21
   };
for (var key in aa) {

   document.write(key," :  ",aa[key],"<br>")
}

document.write("<br><br>***map method***<br>")
var ages=[10,20,5,15,18,56]
var hh=ages.map(test)
document.write(hh)
function test(x){
    return x*10;
}
document.write("<br><br>***string method***<br>")
var str="javascript is good"
var ff=str.length
document.write(ff,"<br>")
var str="javascript is good"
var ff=str.toLowerCase()
document.write(ff,"<br>")
var str="javascript is good"
var ff=str.toUpperCase()
document.write(ff,"<br>")
var str="javascript is good"
var ff=str.includes("is")
document.write(ff,"<br>")
var str="javascript is good"
var ff=str.startsWith("java")
document.write(ff,"<br>")
var ff=str.endsWith("javascript")
document.write(ff,"<br>")
var str="javascript is good"
var ff=str.search("is")
document.write(ff,"<br>")
var str="javascript is good is"
var ff=str.match(/is/g)
document.write(ff,"<br>")
var str="javascript is good"
var ff=str.indexOf("is")
document.write(ff,"<br>")
var str="javascript is good"
var ff=str.lastIndexOf("is")
document.write(ff,"<br>")
var str="javascript is good"
var ff=str.replace("is","php")
document.write(ff,"<br>")
var str="    javascript is good"
var ff=str.trim()
document.write(ff,"<br>")
var str="javascript is good"
var ff=str.charAt(9)
document.write(ff,"<br>")
var str="javascript is good"
var ff=str.charCodeAt(2)
document.write(ff,"<br>")
var ff=String.fromCharCode(110)
document.write(ff,"<br>")
var str="javascript is good "
var str2="hello "
var str3="world"
var ff=str.concat(str2,str3)

document.write(ff,"<br>")
var str="javascript is good"
var ff=str.split(" ")
document.write(ff,"<br>")
var str="javascript is good"
var ff=str.split("i")
document.write(ff,"<br>")
var str="javascript is good "
var ff=str.repeat(2)
document.write(ff,"<br>")
var str="javascript is good "
var ff=str.slice(3)
document.write(ff,"<br>")
var str=50
var ff=str.toString()
document.write(ff+20,"<br>")
document.write("<br><br>***number method***<br>")
var tt="99"
var ji=Number(tt)
document.write(ji,"<br>")
var tt="99 years"
var ji=parseInt(tt)
document.write(ji,"<br>")
var tt="99.1 years"
var ji=parseFloat(tt)
document.write(ji,"<br>")
var tt="99.1 years"
var ji=isFinite(tt)
document.write(ji,"<br>")
var tt=77
var ji=Number.isInteger(tt)
document.write(ji,"<br>")
var tt=77.5555
var ji=tt.toFixed(2)
document.write(ji,"<br>")
var tt=77.5555
var ji=tt.toPrecision(2)
document.write(ji,"<br>")

document.write("<br><br>***Math***<br>")
var tt=Math.ceil(5.2)
document.write(tt,"<br>")
var tt=Math.floor(3.2)
document.write(tt,"<br>")
var tt=Math.round(3.2)
document.write(tt,"<br>")
var tt=Math.trunc(3.2)
document.write(tt,"<br>")
var tt=Math.max(5,23,96,55,44)
document.write(tt,"<br>")
var tt=Math.min(5,23,96,55,44)
document.write(tt,"<br>")
var tt=Math.sqrt(25)
document.write(tt,"<br>")
var tt=Math.cbrt(125)
document.write(tt,"<br>")
var tt=Math.pow(2,3)
document.write(tt,"<br>")
var tt=Math.floor(Math.random()*10)+1;
document.write(tt,"<br>")
var tt=Math.abs(-5.22)
document.write(tt,"<br>")
var tt=Math.PI
document.write(tt,"<br>")
document.write("<br><br>***for each***<br>")
var now=new Date();
document.write(now.toDateString(),"<br>")
var now=new Date();
document.write(now.getDate(),"<br>")
var now=new Date();
document.write(now.getFullYear(),"<br>")
var now=new Date();
document.write(now.getMonth(),"<br>")
var now=new Date();
document.write(now.getDay(),"<br>")
var now=new Date();
document.write(now.getHours(),"<br>")
var now=new Date();
document.write(now.getMinutes(),"<br>")
var now=new Date();
document.write(now.getSeconds(),"<br>")
var now=new Date();
document.write(now.getMilliseconds(),"<br>")
var now=new Date();
now.setDate(6)
document.write(now,"<br>")
document.write("<br><br>***DOM***<br>")
var element;
element=document.getElementById("hello").innerText;
console.log(element)
element=document.getElementById("divtag").innerHTML
console.log(element)
element=document.getElementById("divtag").getAttribute("style")
console.log(element)
element=document.getElementById("divtag").getAttributeNode("style")
console.log(element)
element=document.getElementById("divtag").getAttributeNode("style").value
console.log(element)
element=document.getElementById("divtag").attributes
console.log(element)
element=document.getElementById("divtag").attributes[1].value
console.log(element)
element=document.getElementById("divtag").attributes[1].name
console.log(element)
document.write("<br><br>*** dom set ***<br>")
document.getElementById("hello").innerText="wow"
element=document.getElementById("hello").innerHTML
console.log(element)
element=document.getElementById("hello").innerHTML
console.log(element)
element=document.getElementById("hello").innerHTML="<h1>helllll</h1>"
console.log(element)
element=document.getElementById("divtag").setAttribute("class","xyz")
console.log(element)
element=document.getElementById("divtag").attributes[1].value="abc"
console.log(element)
element=document.getElementById("divtag").attributes[1].value="abc"
console.log(element)

document.write("<br><br>***query selector***<br>")
element=document.querySelector("#hello").innerHTML="<h1>helllll</h1>"
element=document.querySelector("#hello").getAttribute("class")

console.log(element)
document.write("<br><br>***css stylying***<br>")
element=document.querySelector("#divtag").style.background="tan" 
element=document.querySelector("#divtag").style.border 
console.log(element)
element=document.querySelector("#hello").className="aa"
element=document.getElementById("hello").innerHTML

console.log(element)


document.write("<br><br>***add event listner***<br>")
document.getElementById("nam").onclick=abcde;
function abcde() {
    document.getElementById("nam").style.background="pink"
}
document.getElementById("nam").addEventListener("click",function () {
    document.getElementById("nam").style.color="white"
})


document.write("<br><br>***for each***<br>")
document.querySelector("#inner").addEventListener('click',function () {
 alert("inner")   
},true)
document.querySelector("#outer").addEventListener('click',function () {
    alert("outer")   
   },true)


function focusFunction() {
 document.getElementById("ffname").style.background="blue"   
}

document.write("<br><br>***multidimenstional array***<br>")
var ad=[
    ["poornima",18,"female","cs"],
    ["raj",28,"male","cs"]
];
document.write("<table border='1px' cell>")
for(var su=0;su<4;su++){
    document.write("<tr >");
    for(var sun=0;sun<4;sun++){ 
        document.write("<td>"+ad[su][sun]+"</td>")  
}
document.write("/<tr >")  
}
document.write("</table >")


