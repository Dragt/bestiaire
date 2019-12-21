"use strict";

const URL_BESTIAIRE = "https://dragt.github.io/bestiaire/";

/* ***** Utilitaire ***** */

const gid = document.getElementById.bind(document);

/* ***** initialisation ***** */

document.addEventListener("DOMContentLoaded", initPage);

function initPage() {
	construireListes();
	traiterParametres();
	mettreAjourAffichageRecherche();
	gid("choixRechercheMonstreTemplateAge").addEventListener("change", mettreAjourAffichageRecherche);	
	gid("choixRechercheMonstreComplet").addEventListener("change", mettreAjourAffichageRecherche);
	gid("selectMonstre").addEventListener("change", changerMonstre);	
	gid("selectTemplate").addEventListener("change", changerTemplate);	
	gid("selectAge").addEventListener("change", changerAge);
	gid("inputNumero").addEventListener("change", mettreAJourLienCopier);
	gid("inputMonstreNomComplet").addEventListener("change", mettreAJourLienCopier);
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


function mettreAjourAffichageRecherche() {
	if(gid("choixRechercheMonstreTemplateAge").checked) {                // document.querySelector("input[name=choixRecherche]")
		gid("zoneSelectMonstreTemplateAge").style.display = "block";
		gid("zoneSelectMonstreComplet").style.display = "none";
	}
	else {
		gid("zoneSelectMonstreTemplateAge").style.display = "none";
		gid("zoneSelectMonstreComplet").style.display = "block";
	}
	mettreAJourLienCopier();
}

function traiterParametres() {
	var oParametre = {};
	let searchParametres = decodeURIComponent(window.location.search);

	if (searchParametres.length > 1) {
	  for (var aItKey, nKeyId = 0, aCouples = searchParametres.substr(1).split("&"); nKeyId < aCouples.length; nKeyId++) {
		aItKey = aCouples[nKeyId].split("=");
		oParametre[unescape(aItKey[0])] = aItKey.length > 1 ? unescape(aItKey[1]) : "";
	  }
	}
	
	if(oParametre.numero) gid("inputNumero").value = oParametre.numero;
	
	if(oParametre.monstreComplet) {
		gid("inputMonstreNomComplet").value = oParametre.monstreComplet;		
		gid("choixRechercheMonstreComplet").checked = true;
	}
	else {
		if(oParametre.monstre) gid("selectMonstre").value = oParametre.monstre;
		changerMonstre();
		if(oParametre.template) gid("selectTemplate").value = oParametre.template;
		changerTemplate();
		if(oParametre.age) gid("selectAge").value = oParametre.age;
		changerAge();
		gid("choixRechercheMonstreTemplateAge").checked = true;
	}	
		
	mettreAJourLienCopier();
	mettreAjourAffichageRecherche();
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
	mettreAJourNiveauTotal();	
	mettreAJourLienCopier();
}

function changerAge() {
	gid("nivAge").innerText = gid("selectAge").selectedOptions[0].dataset.niv;
	mettreAJourNiveauTotal();		
	mettreAJourLienCopier();
}

function chercherMonstre() {
	const nom = gid("selectMonstre").value;
	const template = gid("selectTemplate").value;
	const age = gid("selectAge").value;
	const id = gid("inputNumero").value;
	
	let criteres = {};
	criteres.id = (id ? id : "99999999"); // Si pas de numéro > 4000000 le service ne renvoie pas les résultats V2
	
	if (gid("choixRechercheMonstreTemplateAge").checked) {
		const avant = (gid("selectTemplate").selectedOptions[0].dataset.avant === "1");
		criteres.nom = (template ? ( avant ? (template + " " + nom) : (nom + " " + template)) : nom) + " [" + age + "]";
	}
	else {
		criteres.nom = gid("inputMonstreNomComplet").value;
	}
	
	let formData = new FormData();
	formData.append("l", JSON.stringify([criteres]));

	let request = new XMLHttpRequest();
	request.open("POST", "https://mz.mh.raistlin.fr/mz/getCaracMonstre.php");
	
	
	request.onload = traiterCdM;
	//function () {console.log(request.responseText); alert(request.responseText);};
		
	request.send(formData);
}

function traiterCdM() {
	let infosCdm;
	try {
		infosCdm = JSON.parse(this.responseText);
		console.log(infosCdm);
	}
	catch(e) {
		console.log(e);
		alert("Problème rencontré.");
	}
	
	const cdm = infosCdm[0];
	
	// version générique
	/* let carac = "";
	for (let k in cdm) {
		if (typeof cdm[k] === 'object' && cdm[k] !== null) {
			carac += "<p>" + k + " : <br>";
			for (let kk in cdm[k]) {
				carac += " " + kk + " : " + cdm[k][kk] + "<br>";
			}
			carac += "</p>";
		}
		else {
			carac += `<p>${k} : ${cdm[k]}</p>`;
		}
	}
	gid("affichageCaracteristiques").innerHTML = carac;
	*/
	
	// todo : décider comment afficher les données
	
	let carac = `${cdm.nom}<br>
Famille du monstre : ${cdm.fam}<br>
Niveau : ${cdm.niv.min}<br>
Points de Vie : entre ${cdm.pv ? (cdm.pv.min2 ? cdm.pv.min2 : cdm.pv.min) : ""} et ${cdm.pv ? (cdm.pv.max2 ? cdm.pv.max2 : cdm.pv.max) : ""}<br>
Dés d'Attaque : entre ${ cdm.att ? (cdm.att.min2 ? cdm.att.min2 : cdm.att.min) : "" } et ${cdm.att ? (cdm.att.max2 ? cdm.att.max2 : cdm.att.max) : ""}<br>
Dés d'Esquive : entre ${cdm.esq ? (cdm.esq.min2 ? cdm.esq.min2 : cdm.esq.min) : ""} et ${cdm.esq ? (cdm.esq .max2 ? cdm.esq.max2 : cdm.esq.max) : ""}<br>
Dés de Dégât : entre ${cdm.deg ? (cdm.deg.min2 ? cdm.deg.min2 : cdm.deg.min) : ""} et ${cdm.deg ? (cdm.deg.max2 ? cdm.deg.max2 : cdm.deg.max) : ""}<br>
Dés de Régénération : entre ${cdm.reg ? (cdm.reg.min2 ? cdm.reg.min2 : cdm.reg.min) : ""} et ${cdm.reg ? (cdm.reg.max2 ? cdm.reg.max2 : cdm.reg.max) : ""}<br>
Armure Physique : entre ${cdm.armP ? (cdm.armP.min2 ? cdm.armP.min2 : cdm.armP.min) : ""} et ${cdm.armP ? (cdm.armP.max2 ? cdm.armP.max2 : cdm.armP.max) : ""}<br>
Armure Magique : entre ${cdm.armM ? (cdm.armM.min2 ? cdm.armM.min2 : cdm.armM.min) : ""} et ${cdm.armM ? (cdm.armM.max2 ? cdm.armM.max2 : cdm.armM.max) : ""}<br>
Armure : entre ${cdm.arm ? (cdm.arm.min2 ? cdm.arm.min2 : cdm.arm.min) : ""} et ${cdm.arm ? (cdm.arm.max2 ? cdm.arm.max2 : cdm.arm.max) : ""}<br>
Vue : entre ${cdm.vue ? (cdm.vue.min2 ? cdm.vue.min2 : cdm.vue.min) : ""} et ${cdm.vue ? (cdm.vue.max2 ? cdm.vue.max2 : cdm.vue.max) : ""}<br>
Maitrise Magique : entre ${cdm.MM ? (cdm.MM.min2 ? cdm.MM.min2 : cdm.MM.min) : ""} et ${cdm.MM ? (cdm.MM.max2 ? cdm.MM.max2 : cdm.MM.max) : ""}<br>
Résistance Magique : entre ${cdm.RM ? (cdm.RM.min2 ? cdm.RM.min2 : cdm.RM.min) : ""} et ${cdm.RM ? (cdm.RM.max2 ? cdm.RM.max2 : cdm.RM.max) : ""}<br>
Capacité spéciale : ${cdm.pouv}<br>
Nombre d'attaques : ${cdm.nb_att}<br>
Attaque magique : ${""}<br>
Attaque à distance : ${""}<br>
Vitesse de Déplacement : ${cdm.vit}<br>
Durée Tour : entre ${cdm.duree ? (cdm.duree.min2 ? cdm.duree.min2 : cdm.duree.min) : ""} et ${cdm.duree ? (cdm.duree.max2 ? cdm.duree.max2 : cdm.duree.max) : ""}<br>
DLA : ${""}<br>
Voir le Caché : ${cdm.vlc}<br>
Vole : ${""}<br>
Sang froid : ${cdm.sangf}<br>
Portée du Pouvoir : ${cdm.portpouv}<br>
Nombre CdM : ${cdm.nCdM}`;

	gid("affichageCaracteristiques").innerHTML = carac;

}

function mettreAJourNiveauTotal() {
	let nivTotal = 0;
	for (let e of document.querySelectorAll("#nivAffiche, #nivTemplate, #nivAge")) {
		nivTotal += Number(e.innerText);
	}
	gid("valeurNiveauTotal").innerText = nivTotal;
}

function mettreAJourLienCopier() {
	
	const numero = gid("inputNumero").value;
	
	if (gid("choixRechercheMonstreTemplateAge").checked) {
		const nom = encodeURIComponent(gid("selectMonstre").value);
		const template = encodeURIComponent(gid("selectTemplate").value);
		const age = encodeURIComponent(gid("selectAge").value);	
		gid("lienCopier").href = URL_BESTIAIRE + //window.location.hostname + window.location.pathname +
	                         `?monstre=${nom}&template=${template}&age=${age}&numero=${numero}`;	
	}
	else {
		const nomComplet = encodeURIComponent(gid("inputMonstreNomComplet").value);
		gid("lienCopier").href = URL_BESTIAIRE + //window.location.hostname + window.location.pathname +
	                         `?monstreComplet=${nomComplet}&numero=${numero}`;
	}	
	
}



