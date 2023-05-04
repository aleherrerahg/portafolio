<?php
if(isset($_POST['submit']))
{
    $para = "181617@upslp.edu.mx";
    $asunto = "Enviando informacion";
    $nombre = $_POST['nombre'];
    $correo = $_POST['email'];
    $mensaje = $_POST['mensaje'];
    $pregunta1 = $_POST['pregunta1'];
    $pregunta2 = $_POST['pregunta2'];
    $pregunta3 = $_POST['pregunta3'];
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf8\r\n";
    $cuerpo = " Enviado por: $nombre\n\n E-Mail: $correo\n\n pregunta1: $pregunta1\n\n pregunta2: $pregunta2\n\n pregunta3: $pregunta3\n\n Mensaje: $mensaje\n\n";

    $bool = mail($para,$asunto,$cuerpo,$headers);
}
else
{
    echo "Algo ocurrio mal...";
}
?>