function Promo()
{
    let x=document.getElementById("fecha").value;
    alert(" ");
    var mes = x.substring(5, 7);
    let texto="";
    con=(mes);
    alert(con);
    if(mes==05)
    {
        document.getElementById("comentario").innerHTML="Felicidades, obtuviste un 2*1";
        texto+="<img src='promocion.webp'>"
    }
    else
    {
        document.getElementById("comentario").innerHTML="No obtuviste descuentos, suerte para la próxima!";
    }
    document.getElementById("demo").innerHTML=texto;
}
