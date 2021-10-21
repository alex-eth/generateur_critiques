function idUt() {return document.getElementById('idUtilisateur').value};

function titre() {return document.getElementById('titre').value};

function auteur() {return document.getElementById('auteur').value};

function type(){
	let otp = "";
	const table = document.getElementById('tblType');
	let boxes = table.getElementsByTagName("INPUT");
	for (var i = 0; i < boxes.length; i++) {
		if (boxes[i].checked) {
			otp += boxes[i].value + ' ';
		};
	};
	return otp;
};

function genre(){
	let otp = "";
	const table = document.getElementById('tblGenre');
	let boxes = table.getElementsByTagName("INPUT");
	for (var i = 0; i < boxes.length; i++) {
		if (boxes[i].checked) {
			let val = boxes[i].value;
			if (val === "Autre") {
				val = document.getElementById('autregenre').value;
			};
			otp += val + ' ';
		};
	};
	return otp;
};

function theme(){
	let otp = "";
	const table = document.getElementById('tblTheme');
	let boxes = table.getElementsByTagName("INPUT");
	for (var i = 0; i < boxes.length; i++) {
		if (boxes[i].checked) {
			let val = boxes[i].value;
			if (val === "Autre") {
				val = document.getElementById('autretheme').value;
			};
			otp += val + ' ';
		};
	};
	return otp;
};

function ressenti(){
	let otp = "";
	const table = document.getElementById('tblRessenti');
	let boxes = table.getElementsByTagName("INPUT");
	for (var i = 0; i < boxes.length; i++) {
		if (boxes[i].checked) {
			let val = boxes[i].value;
			if (val === "Autre") {
				val = document.getElementById('autretheme').value;
			};
			otp += val + ' ';
		};
	};
	return otp;
};

document.getElementById('boutontest').onclick = function(){
	alert(type() + genre() + theme() + ressenti());
};