function suma()
{
    var x=document.getElementById("num1").value, y=document.getElementById("num2").value, sum;
    sum=parseInt(x)+parseInt(y);
    document.getElementById("resultado").innerHTML=sum;
}
function resta()
{
    var x=document.getElementById("num1").value, y=document.getElementById("num2").value, rest;
    rest=parseInt(x)-parseInt(y);
    document.getElementById("resultado").innerHTML=rest;
}
function multi()
{
    var x=document.getElementById("num1").value, y=document.getElementById("num2").value, mult;
    mult=parseInt(x)*parseInt(y);
    document.getElementById("resultado").innerHTML=mult;
}
function divi()
{
    var x=document.getElementById("num1").value, y=document.getElementById("num2").value, div;
    div=parseInt(x)/parseInt(y);
    document.getElementById("resultado").innerHTML=div;
}