"use strict";


/* ***** Utilitaire ***** */

const gid = document.getElementById.bind(document);

/* ***** initialisation ***** */

document.addEventListener("DOMContentLoaded", initPage);

function initPage() {
	construireListes();
	gid("selectMonstre").addEventListener("change", changerMonstre);	
	gid("selectTemplate").addEventListener("change", changerTemplate);	
	gid("selectAge").addEventListener("change", changerAge);
	gid("buttonChercher").addEventListener("click", chercherMonstre);
}

function construireListes() {
	construireListeMonstres();
	construireListeTemplates();
}

function construireListeMonstres() {
	gid("selectMonstre").innerHTML = monstres.map(m => 
		`<option value="${m.nom}" data-famille="${m.famille}" data-niv="${m.niv}" data-vlc="${m.vlc}">${m.nom}</option>`)
		.join(""); 
	changerMonstre();
}

function construireListeTemplates() {
	gid("selectTemplate").innerHTML = 
		`<option value="" data-feminin="" data-niv="0" data-vlc="0">Aucun</option>` +
		templatesMonstres.map(t => {
			 let options = `<option value="${t.nom}" data-avant="${t.avant}" data-niv="${t.niv}" data-vlc="${t.vlc}">${t.nom}</option>`;
			 if (t.feminin) {
				 options += `<option value="${t.feminin}" data-avant="${t.avant}" data-niv="${t.niv}" data-vlc="${t.vlc}">${t.feminin}</option>`;
			 }
			 return options;
		   }
		)
		.join("");
	changerTemplate();
}

function mettreAjourListeAges() {
	const familleDuMonstre = gid("selectMonstre").selectedOptions[0].dataset.famille;
	gid("selectAge").innerHTML = ages[familleDuMonstre].map((a, i) => 
		`<option value="${a}" data-niv="${i}" >${a}</option>`)
		.join("");
	changerAge();
}


/* ***** actions ***** */

function changerMonstre() {
	const monstreDataset = gid("selectMonstre").selectedOptions[0].dataset;
	gid("familleAffichee").innerText = monstreDataset.famille;
	gid("nivAffiche").innerText = monstreDataset.niv;
	gid("vlcAffiche").innerText = (monstreDataset.vlc == 1 ? "oui" : "non"); //attention pas ===
	mettreAjourListeAges();
}

function changerTemplate() {
	const templateDataset = gid("selectTemplate").selectedOptions[0].dataset;
	
	gid("nivTemplate").innerText = (templateDataset.niv > -1 ? "+" : "") + templateDataset.niv;
	gid("vlcTemplate").innerText = (templateDataset.vlc > 0 ? "oui" : "");
	
}

function changerAge() {
	gid("nivAge").innerText = gid("selectAge").selectedOptions[0].dataset.niv;
}

function chercherMonstre() {
	const nom = gid("selectMonstre").value;
	const template = gid("selectTemplate").value;
	const age = gid("selectAge").value;
	const id = gid("inputNumero").value;
	
	let criteres = {};
	criteres.id = (id ? id : "99999999");
	const avant = (gid("selectTemplate").selectedOptions[0].dataset.avant === "1");
	criteres.nom = (template ? ( avant ? (template + " " + nom) : (nom + " " + template)) : nom) + " [" + age + "]"; 
	// todo : tester avec template devant si rien trouvé... ou avoir liste des templates à mettre devant
	
	let formData = new FormData();
	formData.append("l", JSON.stringify([criteres]));

	let request = new XMLHttpRequest();
	request.open("POST", "https://mz.mh.raistlin.fr/mz/getCaracMonstre.php");
	
	
	request.onload = traiterCdM;
	//function () {console.log(request.responseText); alert(request.responseText);};
		
	request.send(formData);
}

function traiterCdM() {
	try {
		const cdm = JSON.parse(this.responseText);
		console.log(cdm);
		let carac = "";
		for (let k in cdm[0]) {
			if (typeof cdm[0][k] === 'object' && cdm[0][k] !== null) {
				carac += "<p>" + k + " : <br>";
				for (let kk in cdm[0][k]) {
					carac += " " + kk + " : " + cdm[0][k][kk] + "<br>";
				}
				carac += "</p>";
			}
			else {
				carac += `<p>${k} : ${cdm[0][k]}</p>`;
			}
		}
		gid("affichageCaracteristiques").innerHTML = carac;
	}
	catch(e) {
		console.log(e);
		alert("Problème rencontré.");
	}
}
