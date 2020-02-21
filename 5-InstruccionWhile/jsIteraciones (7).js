function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

do {
	 numero = parseInt(prompt("ingrese un numero"));

 while (isNaN(numero)){
	numero = parseInt(prompt("esto no es un numeor"));

}	

acumulador = acumulador + 1;
contador   = contador   + 1;

seguir = prompt("Quiere ingresar otro numero");
}while (seguir == "s"); 
	
promedio = acumulador / contador;


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN