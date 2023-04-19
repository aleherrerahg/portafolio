function suma()
{
    var num1, num2, resultado;
    num1=prompt("Escribe un número","");
    num2=prompt("Escribe un número","");
    resultado=parseInt(num1)+parseInt(num2);
    alert("La suma es: "+resultado);
}
function resta()
{
    var num1, num2, resultado;
    num1=prompt("Escribe un número","");
    num2=prompt("Escribe un número","");
    resultado=parseInt(num1)-parseInt(num2);
    alert("La resta es: "+resultado);
}
function multi()
{
    var num1, num2, resultado;
    num1=prompt("Escribe un número","");
    num2=prompt("Escribe un número","");
    resultado=parseInt(num1)*parseInt(num2);
    alert("La multiplicacion es: "+resultado);
}
function divi()
{
    var num1, num2, resultado;
    num1=prompt("Escribe un número","");
    num2=prompt("Escribe un número","");
    resultado=parseInt(num1)/parseInt(num2);
    alert("La división es: "+resultado);
}
function posionega()
{
    var num;
    num=prompt("Escribe un número","");
    if(parseInt(num)>0)
    {
        alert("Es positivo");
    }
    else 
    {
        if(parseInt(num)<0)
        {
            alert("Es negativo");
        }
    }
}