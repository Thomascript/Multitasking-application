//script para gerar os números aleatórios correspondentes a mega-sena da virada do fim de ano. Boa sorte!
function gerador(){ //função responsável por gerar 6 dezenas ao pressionar o botão do evento onclick.
    var loteria = Math.floor(Math.random() * 60); 
	document.getElementById('1').innerHTML = loteria + 1;
	var loteria = Math.floor(Math.random() * 60);
	document.getElementById('2').innerHTML = loteria + 1;
	var loteria = Math.floor(Math.random() * 60);
	document.getElementById('3').innerHTML = loteria + 1;
	var loteria = Math.floor(Math.random() * 60);
	document.getElementById('4').innerHTML = loteria + 1;
	var loteria = Math.floor(Math.random() * 60);
	document.getElementById('5').innerHTML = loteria + 1;
	var loteria = Math.floor(Math.random() * 60);
	document.getElementById('6').innerHTML = loteria + 1;
}