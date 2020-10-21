//script para gerar os números aleatórios correspondentes a mega-sena da virada do fim de ano. Boa sorte!
function gerador(){ //função responsável por gerar 6 dezenas ao pressionar o botão do evento onclick.
	var loteria;
	
	for (i = 1; i<=6; i++) {
		loteria = Math.floor(Math.random() * 60); 
	  document.getElementById(String(i)).innerHTML = loteria + 1;
	}
}