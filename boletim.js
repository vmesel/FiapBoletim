var verificaSituacao = function(mg,local) {
	var falta = 6.0 - mg;
	if(falta > 0){
		if(falta > 2.5){
			local.innerHTML = "EXAME"
		}else {
			falta = arredondar(falta);
			local.innerHTML = "Precisa de " + (falta*4) + " na PS"
		}
	}else{
		local.innerHTML = "PASSOU"
	}
}

var calcSem = function(nac, am, ps, local){
	var ms = (nac*0.2 + am*0.3 + ps*0.5);
	ms = arredondar(ms);
	local.innerHTML = ms;
	return ms;
}

var pegarValor = function(local){
	var val = local.innerHTML.replace(",",".");
	if(!isNaN(val)){
		return parseFloat(val)
	}else {
		local.innerHTML = 0;
		return 0;
	}
}

var calcMG = function(m1,m2,local){
	var mg = (m1+m2)/2;
	mg = arredondar(mg);
	local.innerHTML = mg
	return mg;
}

var arredondar = function(val) {
	val = Math.round(val*10);
	val = val/10;
	return val;
}

var listaMaterias = $('.i-boletim-table-row');

$.map( listaMaterias, function( mat, i ) {
	if(!isNaN(mat.children[6].innerHTML.replace(",","."))){
		var nac = pegarValor(mat.children[6]);
		var am = pegarValor(mat.children[7]);
		var ps = pegarValor(mat.children[8]);
	  var m2 = calcSem(nac,am,ps,mat.children[10]);
	  var m1 = pegarValor(mat.children[5]);
	  var mg = calcMG(m1,m2,mat.children[13]);
	  verificaSituacao(mg,mat.children[16])
  }
})
