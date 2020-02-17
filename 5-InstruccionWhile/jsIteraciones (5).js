function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (!(sexo == "m" || sexo == "f" ))  {

    sexo = prompt("Error ingrese f o m");

     
}
document.getElementById("Sexo").value = sexo;

}//FIN DE LA FUNCIÓN 