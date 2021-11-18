var price1=18000,price2=19000,price3=20000;price4=21000;
var n1,n2,n3,n4;
n1=document.getElementById("n-1").innerText;
n2=document.getElementById("n-2").innerText;
n3=document.getElementById("n-3").innerText;
n4=document.getElementById("n-4").innerText;

var sum1=0,sum2=0,sum3=0,sum4=0;
var q1=0,q2=0,q3=0,q4=0,q5=0;
function add1(){
  q1=document.getElementById("q-1").value;
  document.getElementById("added-1").innerText="Added "
  sum1=price1*q1;
}

function add2(){
   q2=document.getElementById("q-2").value;
  document.getElementById("added-2").innerText="Added "
  sum2=q2*price2;

}
function add3(){
   q3=document.getElementById("q-3").value;
  document.getElementById("added-3").innerText="Added "
  sum3=q3*price3;
}
function add4(){
   q4=document.getElementById("q-4").value;
  document.getElementById("added-4").innerText="Added "
  sum4=q4*price4;
}
function total(){
var total = sum1+sum2+sum3+sum4;
localStorage.setItem("Sum1",sum1);
localStorage.setItem("Sum2",sum2);
localStorage.setItem("Sum3",sum3);
localStorage.setItem("Sum4",sum4);

localStorage.setItem("Total",total);

localStorage.setItem("Product1",n1);
localStorage.setItem("Product2",n2);
localStorage.setItem("Product3",n3);
localStorage.setItem("Product4",n4);

localStorage.setItem("Quantity1",q1);
localStorage.setItem("Quantity2",q2);
localStorage.setItem("Quantity3",q3);
localStorage.setItem("Quantity4",q4);

window.location.href = "summaryBill.html";
}
localStorage.clear();
