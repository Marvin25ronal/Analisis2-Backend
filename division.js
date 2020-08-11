this.division = function(n1, n2) {
	if(isNaN(n1) || isNaN(n2)){
		//Retorna error si alguno de los valores no es numérico
		return "Error";
	}
	return n1 / n2;   // La función retorna la division de n1 y n2
}