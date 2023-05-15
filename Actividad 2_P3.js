var total;//variable para los puntos totales

function califica()
{
    var total=0;//se inicializa la varible en 0 para evitar la basura
    for (var i=0; i<6; i++)//ciclo for para evaluar cada pregunta el valor de la variable "i" cambiara dependiendo del número de preguntas que contenga el formulario
    {
        var res=0;
        var nom="r"+i;//Indica el radio
        var result=document.getElementsByName(nom);
        for (var j=0; j<result.length; j++)//Para evaluar cada radio 
        {
            if(result[j].checked==true)//condición para saber si ya esta seleccionado 
                res=parseInt(result[j].value);//Todos los radios tienen un valor de 5
        }
        total=total+res;//El total de los puntos obtenidos
        document.getElementById("total").innerHTML="Puntos obtenidos: "+total;
    }
    if(total==25)//si su puntuación es igual a 25, se le dirá al usuario que su conocimiento es excelente
        document.getElementById("comentario").innerHTML="¡EXCELENTE!";
    else
        if(total==20)//si su puntuación es igual a 20, se le dirá al usuario que su conocimiento es regular
            document.getElementById("comentario").innerHTML="Regular";
    else
        if(total<=15)//si su puntuación es menor o igual a 15, se le dirá al usuario que necesita estudiar más
        document.getElementById("comentario").innerHTML="Estudia un poco más";
}


function generar()
{
    //Crear objeto o instancia en js
    var doc = new jsPDF();

    //Tamaño de letra
    doc.setFontSize(40);
    //Color del texto
    doc.setTextColor(9,7,121);
    doc.Text(40, 20, "Encuesta");
    doc.setTextColor(17,122,209);
    doc.setFontSize(30);
    doc.text(50,35, "Es importante tu participación");
    doc.setFontSize(20);
    doc.text(20,50, "25 puntos. Excelente. \r Todas tus respuestas son correctas");
    doc.text(20,50, "20 puntos. Muy bien. \r Obtuviste 4 respuestas correctas");
    doc.text(20,50, "15 puntos. Regular. \r Obtuviste 3 respuestas correctas");
    doc.text(20,50, "10 puntos. Mal \r Obtuviste 2 respuestas correctas");
    doc.text(20,50, "5 puntos. Muy mal. \r Obtuviste 1 respuesta correcta");
    doc.text(20,50, "0 puntos. Terrible. \r Todas tus respuestas son incorrectas");

    var string = doc.output('datauristring');
    $('iframe').attr('src', string);
}

