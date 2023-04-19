function IdUt() {return document.getElementById('idUtilisateur').value};

function Titre() {return document.getElementById('titre').value};

function Auteur() {return document.getElementById('auteur').value};

function Resume() {return document.getElementById('resume').value};

function PqRessenti() {return document.getElementById('pqRessenti').value};

function Recomm() {
	let elt = document.getElementById('slctRecomm');
	return '' + elt.options[elt.selectedIndex].value;
};

function Type(){
	let otp = "";
	const table = document.getElementById('tblType');
	let boxes = table.getElementsByTagName("INPUT");
	for (var i = 0; i < boxes.length; i++) {
		if (boxes[i].checked) {
			otp += boxes[i].value + ' ';
		};
	};
	return otp.slice(0,-2);
};

function Genre(){
	let otp = "";
	const table = document.getElementById('tblGenre');
	let boxes = table.getElementsByTagName("INPUT");
	for (var i = 0; i < boxes.length; i++) {
		if (boxes[i].checked) {
			let val = boxes[i].value;
			if (val === "Autre") {
				val = document.getElementById('autregenre').value;
			};
			otp += val + ', ';
		};
	};
	return otp.slice(0,-2);
};

function Theme(){
	let otp = "";
	const table = document.getElementById('tblTheme');
	let boxes = table.getElementsByTagName("INPUT");
	for (var i = 0; i < boxes.length; i++) {
		if (boxes[i].checked) {
			let val = boxes[i].value;
			if (val === "Autre") {
				val = document.getElementById('autretheme').value;
			};
			otp += val + ', ';
		};
	};
	return otp.slice(0,-2);
};

function Ressenti(){
	let otp = "";
	const table = document.getElementById('tblRessenti');
	let boxes = table.getElementsByTagName("INPUT");
	for (var i = 0; i < boxes.length; i++) {
		if (boxes[i].checked) {
			let val = boxes[i].value;
			if (val === "Autre") {
				val = document.getElementById('autreressenti').value;
			};
			otp += val + ', ';
		};
	};
	return otp.slice(0,-2);
};

function Quali(){
	let otp = "";
	const table = document.getElementById('tblQuali');
	let boxes = table.getElementsByTagName("INPUT");
	for (var i = 0; i < boxes.length; i++) {
		if (boxes[i].checked) {
			let val = boxes[i].value;
			if (val === "Autre") {
				val = document.getElementById('autrequali').value;
			};
			otp += val + ', ';
		};
	};
	return otp.slice(0,-2);
};

function Facon(){
	let otp = "";
	const table = document.getElementById('tblFacon');
	let boxes = table.getElementsByTagName("INPUT");
	for (var i = 0; i < boxes.length; i++) {
		if (boxes[i].checked) {
			let val = boxes[i].value;
			if (val === "Autre") {
				val = document.getElementById('autrefacon').value;
			};
			otp += val + ', ';
		};
	};
	return otp.slice(0,-2);
};

function Age() {
	let sliderVal = "à partir de " + document.getElementById("myRange").value;
	if (sliderVal === "à partir de 16" ) {
		sliderVal = 'plus de 15';
	};
	document.getElementById("age").innerHTML = sliderVal + ' ans';
};

document.getElementById("myRange").oninput = function(){Age()};

function etoiles() {
	if (document.getElementById('star-a').checked) {return "J’ai adoré ce livre car j'ai trouvé l'histoire très "}
	else if (document.getElementById('star-b').checked) {return "J’ai beaucoup aimé ce livre car j'ai trouvé l'histoire "}
	else if (document.getElementById('star-c').checked) {return "J’ai aimé ce livre car j'ai trouvé l'histoire "}
	else if (document.getElementById('star-d').checked) {return "Je n’ai pas trop aimé ce livre car j'ai trouvé l'histoire très "}
	else if (document.getElementById('star-e').checked) {return "J’ai détesté ce livre car j'ai trouvé l'histoire trop "}
	else {return ""};
};

var idUt = IdUt();
var titre = Titre();
var auteur = Auteur();
var type = Type();
var genre = Genre();
var theme = Theme();
var resume = Resume();
var ressenti = Ressenti();
var pqRessenti = PqRessenti();
var rating = document.getElementById("myRange").value;
var quali = Quali();
var facon = Facon();
var recomm = Recomm();
var age = Age();

function genere(idUt,titre,auteur,type,genre,theme,resume,ressenti,pqRessenti,rating,quali,facon,recomm,age) {
	
	return  titre +', écrit par '+ auteur +', est '+ type +' '+ genre +' qui parle '+ theme + '. '+ resume +" L'histoire nous fait ressentir "+ ressenti + ' ' + pqRessenti +'. '+ rating + quali +'. Ce livre '+ facon +" est "+ recomm +".Il est par ailleurs plutôt déstiné pour les lecteurs à partir de "+ age +" ans!"; 
};

document.getElementById("genere").onclick = function(){document.getElementById("outputCrit").innerHTML = genere(IdUt(),Titre(),Auteur(),Type(),Genre(),Theme(),Resume(),Ressenti(),PqRessenti(),etoiles(),Quali(),Facon(),Recomm(),document.getElementById("myRange").value)};

function copyotp() {
	var copyText = document.getElementById("outputCrit");
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	document.execCommand("copy");
	alert("La critique à été copié!");
};
	
document.getElementById("copy").onclick = function() {copyotp()};

