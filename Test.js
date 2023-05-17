var total;//variable para los puntos totales

function califica()
{
    var total=0;//se inicializa la varible en 0 para evitar la basura
    for (var i=0; i<6; i++)//ciclo for para evaluar cada pregunta el valor de la variable "i" cambiara dependiendo del nÃºmero de preguntas que contenga el formulario
    {
        var res=0;
        var nom="r"+i;//Indica el radio
        var result=document.getElementsByName(nom);
        for (var j=0; j<result.length; j++)//Para evaluar cada radio 
        {
            if(result[j].checked==true)//condiciÃ³n para saber si ya esta seleccionado 
                res=parseInt(result[j].value);//Todos los radios tienen un valor de 5
        }
        total=total+res;//El total de los puntos obtenidos
        document.getElementById("total").innerHTML="Puntos obtenidos: "+total;
    }
    if(total==25)//si su puntuaciÃ³n es igual a 25, se le dirÃ¡ al usuario que su conocimiento es excelente
        document.getElementById("comentario").innerHTML="¡EXCELENTE!";
    else
        if(total==20)//si su puntuaciÃ³n es igual a 20, se le dirÃ¡ al usuario que su conocimiento es regular
            document.getElementById("comentario").innerHTML="Regular";
    else
        if(total<=15)//si su puntuaciÃ³n es menor o igual a 15, se le dirÃ¡ al usuario que necesita estudiar mÃ¡s
        document.getElementById("comentario").innerHTML="Estudia un poco m&#193s";
}
