"use strict";

const monstres = [
{nom: "Abishaii Bleu", famille: "Démon", niv: 19, vlc: 1},
{nom: "Abishaii Noir", famille: "Démon", niv: 10, vlc: 1},
{nom: "Abishaii Rose", famille: "Démon", niv: 1, vlc: -1 },
{nom: "Abishaii Rouge", famille: "Démon", niv: 23, vlc: 1},
{nom: "Abishaii Vert", famille: "Démon", niv: 15, vlc: 1},
{nom: "Ame-en-peine", famille: "Mort-Vivant", niv: 8, vlc: 1},
{nom: "Amibe Géante", famille: "Monstre", niv: 9, vlc: 0},
{nom: "Anaconda des Catacombes", famille: "Monstre", niv: 8, vlc: 0},
{nom: "Ankheg", famille: "Insecte", niv: 10, vlc: 0},
{nom: "Anoploure purpurin", famille: "Insecte", niv: 36, vlc: 0},
{nom: "Aragnarok du Chaos", famille: "Insecte", niv: 16, vlc: 1},
{nom: "Araignée Géante", famille: "Insecte", niv: 2, vlc: 0},
{nom: "Ashashin", famille: "Humanoïde", niv: 35, vlc: 0},
{nom: "Balrog", famille: "Démon", niv: -1, vlc: 1},
{nom: "Banshee", famille: "Mort-Vivant", niv: 16, vlc: 1},
{nom: "Barghest", famille: "Démon", niv: 36, vlc: 1},
{nom: "Basilisk", famille: "Monstre", niv: 11, vlc: 0},
{nom: "Behemoth", famille: "Démon", niv: 34, vlc: 1},
{nom: "Behir", famille: "Monstre", niv: 14, vlc: 0},
{nom: "Beholder", famille: "Monstre", niv: 59, vlc: 1},
{nom: "Boggart", famille: "Humanoïde", niv: 3, vlc: 0},
{nom: "Bondin", famille: "Monstre", niv: 9, vlc: 0},
{nom: "Bouj'Dla", famille: "Monstre", niv: 19, vlc: 0},
{nom: "Bouj'Dla Placide", famille: "Monstre", niv: 37, vlc: 1},
{nom: "Bulette", famille: "Monstre", niv: 19, vlc: 0},
{nom: "Caillouteux", famille: "Humanoïde", niv: 1, vlc: 0},
{nom: "Capitan", famille: "Mort-Vivant", niv: 35, vlc: 0},
{nom: "Carnosaure", famille: "Monstre", niv: 25, vlc: 0},
{nom: "Champi-Glouton", famille: "Humanoïde", niv: 3, vlc: 1},
{nom: "Chauve-Souris Géante", famille: "Animal", niv: 4, vlc: 1},
{nom: "Cheval à Dents de Sabre", famille: "Animal", niv: 23, vlc: 0},
{nom: "Chevalier du Chaos", famille: "Démon", niv: 22, vlc: 1},
{nom: "Chimère", famille: "Monstre", niv: 13, vlc: 1},
{nom: "Chonchon", famille: "Monstre", niv: 24, vlc: 0},
{nom: "Coccicruelle", famille: "Insecte", niv: 22, vlc: 0},
{nom: "Cockatrice", famille: "Monstre", niv: 5, vlc: 0},
{nom: "Crasc", famille: "Monstre", niv: 14, vlc: 0},
{nom: "Crasc Maexus", famille: "Monstre", niv: 29, vlc: 0},
{nom: "Crasc Médius", famille: "Monstre", niv: 19, vlc: 0},
{nom: "Crasc parasitus", famille: "Monstre", niv: 14, vlc: 0},
{nom: "Croquemitaine", famille: "Mort-Vivant", niv: 6, vlc: 0},
{nom: "Cube gélatineux", famille: "Monstre", niv: 32, vlc: 0},
{nom: "Daemonite", famille: "Démon", niv: 27, vlc: 1},
{nom: "Diablotin", famille: "Démon", niv: 5, vlc: 1},
{nom: "Dindon du Chaos", famille: "Animal", niv: 1, vlc: 0},
{nom: "Dindon du Glacier", famille: "Animal", niv: 2, vlc: 0},
{nom: "Dindon du Glouglou", famille: "Animal", niv: -1, vlc: 0},
{nom: "Dindon du Manger", famille: "Animal", niv: 4, vlc: 0},
{nom: "Djinn", famille: "Monstre", niv: 29, vlc: 0},
{nom: "Djõhzàÿ Bõhvàÿ", famille: "Humanoïde", niv: -1, vlc: 0},
{nom: "Ectoplasme", famille: "Mort-Vivant", niv: 18, vlc: 1},
{nom: "Effrit", famille: "Monstre", niv: 27, vlc: 1},
{nom: "Elémentaire d'Air", famille: "Démon", niv: 23, vlc: 1},
{nom: "Elémentaire d'Eau", famille: "Démon", niv: 17, vlc: 0},
{nom: "Elémentaire de Feu", famille: "Démon", niv: 21, vlc: 0},
{nom: "Elémentaire de Terre", famille: "Démon", niv: 21, vlc: 0},
{nom: "Elémentaire du Chaos", famille: "Démon", niv: 26, vlc: 0},
{nom: "Elémentaire Magmatique", famille: "Démon", niv: -1, vlc: 0},
{nom: "Erinyes", famille: "Démon", niv: 7, vlc: 1},
{nom: "Esprit d'Alouïne", famille: "Mort-Vivant", niv: 24, vlc: 0},
{nom: "Esprit-Follet", famille: "Monstre", niv: 16, vlc: 0},
{nom: "Essaim Cratérien", famille: "Insecte", niv: 30, vlc: 1},
{nom: "Essaim Sanguinaire", famille: "Insecte", niv: 25, vlc: 1},
{nom: "Ettin", famille: "Humanoïde", niv: 8, vlc: 0},
{nom: "Familier", famille: "Monstre", niv: 1, vlc: -1 },
{nom: "Fantôme", famille: "Mort-Vivant", niv: 24, vlc: 1},
{nom: "Feu Follet", famille: "Monstre", niv: 20, vlc: 0},
{nom: "Flagelleur Mental", famille: "Humanoïde", niv: 33, vlc: 0},
{nom: "Foudroyeur", famille: "Insecte", niv: 38, vlc: 0},
{nom: "Fumeux", famille: "Démon", niv: 22, vlc: 1},
{nom: "Fungus Géant", famille: "Monstre", niv: 9, vlc: 1},
{nom: "Fungus Violet", famille: "Monstre", niv: 4, vlc: 1},
{nom: "Furgolin", famille: "Humanoïde", niv: 10, vlc: 0},
{nom: "Gargouille", famille: "Monstre", niv: 3, vlc: 0},
{nom: "Géant de Pierre", famille: "Humanoïde", niv: 13, vlc: 0},
{nom: "Géant des Gouffres", famille: "Humanoïde", niv: 22, vlc: 0},
{nom: "Geck'oo", famille: "Animal", niv: 15, vlc: 0},
{nom: "Geck'oo Majestueux", famille: "Animal", niv: 40, vlc: 0},
{nom: "Glouton", famille: "Animal", niv: 20, vlc: 0},
{nom: "Gnoll", famille: "Humanoïde", niv: 4, vlc: 0},
{nom: "Gnu Domestique", famille: "Animal", niv: 1, vlc: 1},
{nom: "Gnu Sauvage", famille: "Animal", niv: 1, vlc: 1},
{nom: "Gobelin Magique", famille: "Humanoïde", niv: 1, vlc: 0},
{nom: "Goblin", famille: "Humanoïde", niv: 4, vlc: 0},
{nom: "Goblin de la tribu des Dents Pourries", famille: "Humanoïde", niv: 4, vlc: 0},
{nom: "Goblours", famille: "Humanoïde", niv: 4, vlc: 0},
{nom: "Golem d'Argile", famille: "Humanoïde", niv: 15, vlc: 0},
{nom: "Golem de Chair", famille: "Humanoïde", niv: 8, vlc: 0},
{nom: "Golem de cuir", famille: "Humanoïde", niv: 1, vlc: 0},
{nom: "Golem de fer", famille: "Humanoïde", niv: 31, vlc: 0},
{nom: "Golem de métal", famille: "Humanoïde", niv: 1, vlc: 0},
{nom: "Golem de mithril", famille: "Humanoïde", niv: 1, vlc: 0},
{nom: "Golem de neige", famille: "Monstre", niv: 1, vlc: 0},
{nom: "Golem de papier", famille: "Humanoïde", niv: 1, vlc: 0},
{nom: "Golem de Pierre", famille: "Humanoïde", niv: 23, vlc: 0},
{nom: "Golem de Poussière", famille: "Humanoïde", niv: -1, vlc: 0},
{nom: "Gorgone", famille: "Monstre", niv: 11, vlc: 0},
{nom: "Goule", famille: "Mort-Vivant", niv: 4, vlc: 1},
{nom: "Gowap Apprivoisé", famille: "Animal", niv: 0, vlc: 0},
{nom: "Gowap Sauvage", famille: "Animal", niv: 0, vlc: 0},
{nom: "Gremlins", famille: "Humanoïde", niv: 3, vlc: 0},
{nom: "Gritche", famille: "Démon", niv: 39, vlc: 1},
{nom: "Gros Zombie de Taupe Nécromant", famille: "Mort-Vivant", niv: 0, vlc: -1 },
{nom: "Grouilleux", famille: "Monstre", niv: 4, vlc: 0},
{nom: "Grylle", famille: "Monstre", niv: 31, vlc: 0},
{nom: "Harpie", famille: "Monstre", niv: 4, vlc: 0},
{nom: "Hellrot", famille: "Démon", niv: 18, vlc: 1},
{nom: "Homme-Lézard", famille: "Humanoïde", niv: 4, vlc: 0},
{nom: "Hurleur", famille: "Humanoïde", niv: 8, vlc: 0},
{nom: "Hydre", famille: "Monstre", niv: -1, vlc: 0},
{nom: "Incube", famille: "Démon", niv: 13, vlc: 1},
{nom: "Kilamo et La Mouche", famille: "Monstre", niv: -1, vlc: 0},
{nom: "Kobold", famille: "Humanoïde", niv: 2, vlc: 0},
{nom: "Labeilleux", famille: "Insecte", niv: 26, vlc: 0},
{nom: "Leprechaun", famille: "Humanoïde", niv: -1, vlc: 0},
{nom: "Lézard Géant", famille: "Monstre", niv: 5, vlc: 0},
{nom: "Liche", famille: "Mort-Vivant", niv: -1, vlc: 1},
{nom: "Limace Géante", famille: "Insecte", niv: 10, vlc: 0},
{nom: "Loup-Garou", famille: "Humanoïde", niv: 8, vlc: 0},
{nom: "Lutin", famille: "Humanoïde", niv: 4, vlc: 0},
{nom: "Mante Fulcreuse", famille: "Insecte", niv: 30, vlc: 0},
{nom: "Manticore", famille: "Monstre", niv: 9, vlc: 0},
{nom: "Marilith", famille: "Démon", niv: 33, vlc: 1},
{nom: "Méduse", famille: "Humanoïde", niv: 6, vlc: 0},
{nom: "Mégacéphale", famille: "Humanoïde", niv: 38, vlc: 0},
{nom: "Mille-Pattes Géant", famille: "Insecte", niv: 14, vlc: 0},
{nom: "Mimique", famille: "Monstre", niv: 6, vlc: 0},
{nom: "Minotaure", famille: "Humanoïde", niv: 7, vlc: 0},
{nom: "Mohrg", famille: "Mort-Vivant", niv: 35, vlc: 1},
{nom: "Molosse Satanique", famille: "Démon", niv: 8, vlc: 1},
{nom: "Momie", famille: "Mort-Vivant", niv: 4, vlc: 1},
{nom: "Monstre Rouilleur", famille: "Monstre", niv: 3, vlc: 0},
{nom: "Mouch'oo Domestique", famille: "Monstre", niv: 14, vlc: 0},
{nom: "Mouch'oo Majestueux Domestique", famille: "Monstre", niv: 33, vlc: 0},
{nom: "Mouch'oo Majestueux Sauvage", famille: "Monstre", niv: 33, vlc: 0},
{nom: "Mouch'oo Sauvage", famille: "Monstre", niv: 14, vlc: 0},
{nom: "Nâ-Hàniym-Hééé", famille: "Mort-Vivant", niv: 0, vlc: 0},
{nom: "Naga", famille: "Monstre", niv: 10, vlc: 0},
{nom: "Nécrochore", famille: "Mort-Vivant", niv: 37, vlc: 1},
{nom: "Nécromant", famille: "Mort-Vivant", niv: 39, vlc: 1},
{nom: "Nécrophage", famille: "Mort-Vivant", niv: 8, vlc: 0},
{nom: "Nuage d'Insectes", famille: "Insecte", niv: 7, vlc: 0},
{nom: "Nuée de Vermine", famille: "Insecte", niv: 13, vlc: 0},
{nom: "Ogre", famille: "Humanoïde", niv: 7, vlc: 0},
{nom: "Ombre", famille: "Mort-Vivant", niv: 2, vlc: 1},
{nom: "Ombre de Roches", famille: "Monstre", niv: 13, vlc: 1},
{nom: "Orque", famille: "Humanoïde", niv: 3, vlc: 0},
{nom: "Ours-Garou", famille: "Humanoïde", niv: 18, vlc: 0},
{nom: "Palefroi infernal", famille: "Démon", niv: 29, vlc: 1},
{nom: "Phoenix", famille: "Monstre", niv: 36, vlc: -1 },
{nom: "Phoenix1", famille: "Monstre", niv: 32, vlc: 0},
{nom: "Phoenix2", famille: "Monstre", niv: 34, vlc: 0},
{nom: "Phoenix3", famille: "Monstre", niv: 36, vlc: 1},
{nom: "Pititabeille", famille: "Insecte", niv: 1, vlc: 1},
{nom: "Plante Carnivore", famille: "Monstre", niv: 4, vlc: 1},
{nom: "Plante Carnivore Phénoménale", famille: "Monstre", niv: 15, vlc: 1},
{nom: "Poisson Rouge", famille: "Animal", niv: -1, vlc: 0},
{nom: "Poisson Rouge Domestique", famille: "Monstre", niv: -1, vlc: 0},
{nom: "Pseudo-Dragon", famille: "Démon", niv: 5, vlc: 0},
{nom: "Raquettou", famille: "Humanoïde", niv: -1, vlc: 0},
{nom: "Rat Géant", famille: "Animal", niv: 1, vlc: 0},
{nom: "Rat-Garou", famille: "Humanoïde", niv: 3, vlc: 0},
{nom: "Réhzineû de N'hoyël", famille: "Monstre", niv: -1, vlc: 0},
{nom: "Rocketeux", famille: "Humanoïde", niv: 5, vlc: 0},
{nom: "Sagouin", famille: "Animal", niv: 3, vlc: 0},
{nom: "Scarabée Géant", famille: "Insecte", niv: 4, vlc: 0},
{nom: "Scorpion Géant", famille: "Insecte", niv: 10, vlc: 0},
{nom: "Shai", famille: "Démon", niv: 28, vlc: 1},
{nom: "Sidoine", famille: "Insecte", niv: -1, vlc: 1},
{nom: "Slaad", famille: "Monstre", niv: 5, vlc: 0},
{nom: "Sorcière", famille: "Humanoïde", niv: 17, vlc: 1},
{nom: "Spectre", famille: "Mort-Vivant", niv: 14, vlc: 0},
{nom: "Sphinx", famille: "Humanoïde", niv: 30, vlc: 1},
{nom: "Squelette", famille: "Mort-Vivant", niv: 1, vlc: 1},
{nom: "Strige", famille: "Insecte", niv: 2, vlc: 0},
{nom: "Succube", famille: "Démon", niv: 13, vlc: 1},
{nom: "Tertre Errant", famille: "Monstre", niv: 20, vlc: 1},
{nom: "Thri-kreen", famille: "Insecte", niv: 10, vlc: 0},
{nom: "Tigre-Garou", famille: "Humanoïde", niv: 12, vlc: 0},
{nom: "Titan", famille: "Humanoïde", niv: 26, vlc: 0},
{nom: "Trancheur", famille: "Monstre", niv: 35, vlc: 0},
{nom: "Tubercule Tueur", famille: "Animal", niv: 14, vlc: 1},
{nom: "Tutoki", famille: "Monstre", niv: 4, vlc: 0},
{nom: "Vampire", famille: "Mort-Vivant", niv: 29, vlc: 1},
{nom: "Ver Carnivore Géant", famille: "Monstre", niv: 12, vlc: 0},
{nom: "Veskan du Chaos", famille: "Humanoïde", niv: 14, vlc: 0},
{nom: "Vouivre", famille: "Monstre", niv: 33, vlc: 0},
{nom: "Worg", famille: "Monstre", niv: 5, vlc: 0},
{nom: "Xorn", famille: "Démon", niv: 14, vlc: 0},
{nom: "Yéti", famille: "Humanoïde", niv: 8, vlc: 0},
{nom: "Yuan-ti", famille: "Humanoïde", niv: 15, vlc: 0},
{nom: "Zombi de Trõll", famille: "Mort-Vivant", niv: -1, vlc: -1 },
{nom: "Zombie", famille: "Mort-Vivant", niv: 2, vlc: 1},
{nom: "Zombie d'Apocalypse", famille: "Mort-Vivant", niv: 4, vlc: 0}
];


/* ******************************************************** */

/*
// Récupération des infos de templates de monstres depuis la âge Mounty pedia comme ceci :
// http://mountypedia.mountyhall.com/Mountyhall/TemplateMonstres

trs = document.querySelector("table").querySelectorAll('tr')
tem = {};
for (tr of trs) {

    tds = tr.querySelectorAll('td');
    tem[tds[0].innerText] = {};
    tem[tds[0].innerText].nbAtt = tds[2].innerText;
    tem[tds[0].innerText].attMag = tds[3].innerText;
    tem[tds[0].innerText].attDist = tds[4].innerText;
    tem[tds[0].innerText].pv = tds[6].innerText;
    tem[tds[0].innerText].att = tds[7].innerText;
    tem[tds[0].innerText].esq = tds[8].innerText;
    tem[tds[0].innerText].deg = tds[9].innerText;
    tem[tds[0].innerText].reg = tds[10].innerText;
    tem[tds[0].innerText].arm = tds[11].innerText;
    tem[tds[0].innerText].rm = tds[12].innerText;
    tem[tds[0].innerText].mm = tds[13].innerText;
    tem[tds[0].innerText].vue = tds[14].innerText;
    tem[tds[0].innerText].pouvoir = tds[15].innerText;
    tem[tds[0].innerText].particularite = tds[16].innerText;
}

// Première version de templatesMonstre basé sur les infos de Rouletabille Mountyzilla, 
// avant de l'étendre avec les infos de Mountypedia

templatesMonstres = [
{avant: 0, nom: "Affamé", feminin: "Affamée", niv: 5, vlc: 0},
{avant: 0, nom: "Agressif", feminin: "Agressive", niv: 1, vlc: 0},
{avant: 0, nom: "Alchimiste", feminin: "", niv: 2, vlc: 0},
{avant: 1, nom: "Alpha", feminin: "", niv: 11, vlc: 1},
{avant: 0, nom: "Archaïque", feminin: "", niv: -1, vlc: 0},
{avant: 1, nom: "Archiatre", feminin: "", niv: 2, vlc: 0},
{avant: 0, nom: "Attentif", feminin: "Attentive", niv: -2, vlc: 0},
{avant: 0, nom: "Attentionné", feminin: "Attentionnée", niv: 2, vlc: 0},
{avant: 1, nom: "Barbare", feminin: "", niv: 1, vlc: 0},
{avant: 0, nom: "Berserker", feminin: "Berserkere", niv: 2, vlc: 0},
{avant: 1, nom: "Champion", feminin: "Championne", niv: 4, vlc: 0},
{avant: 0, nom: "Cogneur", feminin: "Cogneuse", niv: 2, vlc: 0},
{avant: 0, nom: "Colossal", feminin: "Colossale", niv: 7, vlc: 0},
{avant: 0, nom: "Coriace", feminin: "", niv: 1, vlc: 0},
{avant: 0, nom: "Corrompu", feminin: "Corrompue", niv: 1, vlc: 0},
{avant: 0, nom: "Cracheur", feminin: "Cracheuse", niv: 2, vlc: 0},
{avant: 0, nom: "de Cinquième Cercle", feminin: "", niv: 5, vlc: 0},
{avant: 0, nom: "de Premier Cercle", feminin: "", niv: -1, vlc: 0},
{avant: 0, nom: "de Quatrième Cercle", feminin: "", niv: 4, vlc: 0},
{avant: 0, nom: "de Second Cercle", feminin: "", niv: 0, vlc: 0},
{avant: 0, nom: "de Troisième Cercle", feminin: "", niv: 2, vlc: 0},
{avant: 0, nom: "des Abysses", feminin: "", niv: 3, vlc: 0},
{avant: 0, nom: "Effrayé", feminin: "Effrayée", niv: -1, vlc: 0},
{avant: 0, nom: "Enflammé", feminin: "Enflammée", niv: 5, vlc: 0},
{avant: 1, nom: "Enorme", feminin: "", niv: -999, vlc: 0},
{avant: 0, nom: "Enragé", feminin: "Enragée", niv: 3, vlc: 0},
{avant: 1, nom: "Esclave", feminin: "", niv: -4, vlc: 0},
{avant: 0, nom: "Esculape", feminin: "", niv: 2, vlc: 0},
{avant: 0, nom: "Ethéré", feminin: "Ethérée", niv: 3, vlc: 1},
{avant: 1, nom: "Fabulesque", feminin: "", niv: -999, vlc: 0},
{avant: 0, nom: "Fanatique", feminin: "", niv: 2, vlc: 0},
{avant: 0, nom: "Fou", feminin: "Folle", niv: 1, vlc: 0},
{avant: 0, nom: "Fouisseur", feminin: "Fouisseuse", niv: 0, vlc: 0},
{avant: 0, nom: "Frénétique", feminin: "", niv: 3, vlc: 0},
{avant: 1, nom: "Frondeur", feminin: "Frondeuse", niv: 2, vlc: 0},
{avant: 0, nom: "Fustigateur", feminin: "Fustigatrice", niv: 2, vlc: 0},
{avant: 1, nom: "Garde", feminin: "", niv: 0, vlc: 0},
{avant: 1, nom: "Gardien", feminin: "Gardienne", niv: 20, vlc: 0},
{avant: 0, nom: "Gargantuesque", feminin: "", niv: 3, vlc: 0},
{avant: 1, nom: "Gigantesque", feminin: "", niv: -999, vlc: 0},
{avant: 1, nom: "Grand Frondeur", feminin: "Grande Frondeuse", niv: 4, vlc: 0},
{avant: 1, nom: "Gros", feminin: "Grosse", niv: 0, vlc: 0},
{avant: 0, nom: "Guérisseur", feminin: "Guérisseuse", niv: 2, vlc: 0},
{avant: 1, nom: "Guerrier", feminin: "Guerrière", niv: 1, vlc: 0},
{avant: 1, nom: "Héros", feminin: "", niv: 5, vlc: 0},
{avant: 0, nom: "Homochrome", feminin: "", niv: 2, vlc: 0},
{avant: 0, nom: "Homomorphe", feminin: "", niv: 3, vlc: 0},
{avant: 0, nom: "Implacable", feminin: "", niv: 3, vlc: 0},
{avant: 0, nom: "Invocateur", feminin: "Invocatrice", niv: 5, vlc: 0},
{avant: 0, nom: "Lobotomisateur", feminin: "Lobotomisatrice", niv: 2, vlc: 0},
{avant: 1, nom: "Maître", feminin: "Maîtresse", niv: 8, vlc: 1},
{avant: 0, nom: "Malade", feminin: "", niv: -1, vlc: 0},
{avant: 0, nom: "Médicastre", feminin: "", niv: 2, vlc: 0},
{avant: 0, nom: "Mentat", feminin: "", niv: 2, vlc: 0},
{avant: 0, nom: "Morticole", feminin: "", niv: 2, vlc: 0},
{avant: 0, nom: "Mutant", feminin: "Mutante", niv: 2, vlc: 0},
{avant: 0, nom: "Nécromant", feminin: "Nécromante", niv: 5, vlc: 0},
{avant: 0, nom: "Ouvrier", feminin: "Ouvrière", niv: 0, vlc: 0},
{avant: 0, nom: "Parasitus", feminin: "", niv: 2, vlc: 0},
{avant: 1, nom: "Paysan", feminin: "Paysanne", niv: -1, vlc: 0},
{avant: 0, nom: "Pestiféré", feminin: "Pestiférée", niv: 0, vlc: 0},
{avant: 1, nom: "Petit", feminin: "Petite", niv: -1, vlc: 0},
{avant: 0, nom: "Planqué", feminin: "Planquée", niv: 1, vlc: 0},
{avant: 1, nom: "Prince", feminin: "Princesse", niv: 8, vlc: 0},
{avant: 0, nom: "Psychophage", feminin: "", niv: 2, vlc: 0},
{avant: 1, nom: "Reine", feminin: "", niv: 11, vlc: 1},
{avant: 0, nom: "Ronfleur", feminin: "Ronfleuse", niv: 2, vlc: 0},
{avant: 1, nom: "Scout", feminin: "Scoute", niv: 2, vlc: 0},
{avant: 1, nom: "Shaman", feminin: "", niv: 0, vlc: 0},
{avant: 0, nom: "Soldat", feminin: "Soldate", niv: 2, vlc: 0},
{avant: 1, nom: "Sorcier", feminin: "Sorcière", niv: 0, vlc: 1},
{avant: 0, nom: "Spectral", feminin: "Spectrale", niv: 3, vlc: 1},
{avant: 0, nom: "Strident", feminin: "Stridente", niv: 3, vlc: 0},
{avant: 0, nom: "Traqueur", feminin: "Traqueuse", niv: 1, vlc: 1},
{avant: 1, nom: "Très gros", feminin: "", niv: -999, vlc: 0},
{avant: 1, nom: "Voleur", feminin: "Voleuse", niv: 2, vlc: 0},
{avant: 0, nom: "Vorace", feminin: "", niv: 1, vlc: 0}
];


// ajouter les infos des templates
for (let template of templatesMonstres ) {
	infosPlus = tem[template.nom];
    Object.assign(template, infosPlus);
}

// le nouveau template monstre utilisé ci-dessous
// Du chipot, y a moyen de faire plus beau, mais ça passe. :)
JSON.stringify(templatesMonstres);

*/



const templatesMonstres = 
JSON.parse(`[{"avant":0,"nom":"Affamé","feminin":"Affamée","niv":5,"vlc":0},{"avant":0,"nom":"Agressif","feminin":"Agressive","niv":1,"vlc":0,"nbAtt":"+0","attMag":"Non","attDist":"Non","pv":" ","att":" ","esq":"--","deg":"++","reg":" ","arm":" ","rm":"?","mm":" ","vue":" ","pouvoir":" ","particularite":" "},{"avant":0,"nom":"Alchimiste","feminin":"","niv":2,"vlc":0,"nbAtt":" ","attMag":" ","attDist":" ","pv":" ","att":" ","esq":" ","deg":" ","reg":" ","arm":" ","rm":" ","mm":" ","vue":" ","pouvoir":" ","particularite":"Ramasse des objets Utilise des potions"},{"avant":1,"nom":"Alpha","feminin":"","niv":11,"vlc":1,"nbAtt":"x2","attMag":" ","attDist":"Oui","pv":"*3","att":"*3","esq":"*3","deg":"*3","reg":"*3","arm":"*3","rm":"*3","mm":"*3","vue":"normal","pouvoir":"*3","particularite":"DLA plus Lente"},{"avant":0,"nom":"Archaïque","feminin":"","niv":-1,"vlc":0},{"avant":1,"nom":"Archiatre","feminin":"","niv":2,"vlc":0,"nbAtt":"-1","attMag":"Non","attDist":"Non","pv":" ","att":" ","esq":" ","deg":" ","reg":" ","arm":" ","rm":" ","mm":" ","vue":" ","pouvoir":" ","particularite":"Soin des monstres"},{"avant":0,"nom":"Attentif","feminin":"Attentive","niv":-2,"vlc":0},{"avant":0,"nom":"Attentionné","feminin":"Attentionnée","niv":2,"vlc":0,"nbAtt":"-1","attMag":"Non","attDist":"Non","pv":" ","att":" ","esq":" ","deg":" ","reg":" ","arm":" ","rm":" ","mm":" ","vue":" ","pouvoir":" ","particularite":"Soin des monstres"},{"avant":1,"nom":"Barbare","feminin":"","niv":1,"vlc":0,"nbAtt":"+0","attMag":" ","attDist":"Non","pv":"++++","att":"++","esq":" ","deg":"++","reg":" ","arm":" ","rm":"?","mm":" ","vue":" ","pouvoir":" ","particularite":" "},{"avant":0,"nom":"Berserker","feminin":"Berserkere","niv":2,"vlc":0,"nbAtt":"x2","attMag":"Non","attDist":"Non","pv":"++++","att":"++","esq":" ","deg":"++","reg":" ","arm":" ","rm":"?","mm":" ","vue":" ","pouvoir":" ","particularite":" "},{"avant":1,"nom":"Champion","feminin":"Championne","niv":4,"vlc":0,"nbAtt":"+0","attMag":" ","attDist":"Non","pv":"+20","att":"=","esq":"+2","deg":"+2","reg":"+1","arm":"+2","rm":"?","mm":"?","vue":"=","pouvoir":"?","particularite":" "},{"avant":0,"nom":"Cogneur","feminin":"Cogneuse","niv":2,"vlc":0,"nbAtt":"+0","attMag":"Jamais","attDist":"Non","pv":" ","att":" ","esq":" ","deg":" ","reg":" ","arm":" ","rm":" ","mm":" ","vue":" ","pouvoir":" ","particularite":"Amnesie"},{"avant":0,"nom":"Colossal","feminin":"Colossale","niv":7,"vlc":0,"nbAtt":"+0","attMag":" ","attDist":"Non","pv":"+20","att":"=","esq":"+2","deg":"+2","reg":"+1","arm":"+2","rm":"?","mm":"?","vue":"=","pouvoir":"?","particularite":" "},{"avant":0,"nom":"Coriace","feminin":"","niv":1,"vlc":0,"nbAtt":"+0","attMag":"Non","attDist":"Non","pv":"+20","att":"=","esq":"-1","deg":"+2","reg":"+1","arm":"+4","rm":"?","mm":"?","vue":"+1","pouvoir":"?","particularite":" "},{"avant":0,"nom":"Corrompu","feminin":"Corrompue","niv":1,"vlc":0,"nbAtt":"+0","attMag":"Non","attDist":"Non","pv":"+10","att":"-2","esq":"-2","deg":"+1","reg":"=","arm":"=","rm":"++","mm":"?","vue":"-1","pouvoir":"?","particularite":" "},{"avant":0,"nom":"Cracheur","feminin":"Cracheuse","niv":2,"vlc":0,"nbAtt":"+0","attMag":" ","attDist":"Oui","pv":"?","att":"?","esq":"?","deg":"?","reg":"?","arm":"?","rm":"?","mm":" ","vue":"?","pouvoir":" ","particularite":"Attaque à distance"},{"avant":0,"nom":"de Cinquième Cercle","feminin":"","niv":5,"vlc":0,"nbAtt":"+0","attMag":"Non","attDist":"Non","pv":"+++","att":"++","esq":"++","deg":"++","reg":"++","arm":"+","rm":"?","mm":" ","vue":" ","pouvoir":" ","particularite":" "},{"avant":0,"nom":"de Premier Cercle","feminin":"","niv":-1,"vlc":0,"nbAtt":"+0","attMag":"Non","attDist":"Non","pv":" ","att":" ","esq":"-","deg":" ","reg":" ","arm":" ","rm":"?","mm":" ","vue":" ","pouvoir":" ","particularite":" "},{"avant":0,"nom":"de Quatrième Cercle","feminin":"","niv":4,"vlc":0,"nbAtt":"+0","attMag":"Non","attDist":"Non","pv":"+++","att":"++","esq":"++","deg":"++","reg":"+","arm":"++","rm":"++","mm":" ","vue":" ","pouvoir":" ","particularite":" "},{"avant":0,"nom":"de Second Cercle","feminin":"","niv":0,"vlc":0,"nbAtt":"+0","attMag":"Non","attDist":"Non","pv":" ","att":"+","esq":"-","deg":" ","reg":" ","arm":" ","rm":"?","mm":" ","vue":" ","pouvoir":" ","particularite":" "},{"avant":0,"nom":"de Troisième Cercle","feminin":"","niv":2,"vlc":0,"nbAtt":"+0","attMag":"Non","attDist":"Non","pv":"++","att":"++","esq":" ","deg":"++","reg":" ","arm":"++","rm":" ","mm":" ","vue":" ","pouvoir":" ","particularite":" "},{"avant":0,"nom":"des Abysses","feminin":"","niv":3,"vlc":0,"nbAtt":"+0","attMag":"Non","attDist":"Non","pv":"++++","att":"+","esq":"+","deg":"++","reg":" ","arm":"++","rm":"?","mm":" ","vue":" ","pouvoir":" ","particularite":" "},{"avant":0,"nom":"Effrayé","feminin":"Effrayée","niv":-1,"vlc":0,"nbAtt":"+0","attMag":" ","attDist":"Non","pv":" ","att":"--","esq":"+","deg":" ","reg":" ","arm":" ","rm":" ","mm":" ","vue":" ","pouvoir":" ","particularite":"Fuyard"},{"avant":0,"nom":"Enflammé","feminin":"Enflammée","niv":5,"vlc":0},{"avant":1,"nom":"Enorme","feminin":"","niv":-999,"vlc":0},{"avant":0,"nom":"Enragé","feminin":"Enragée","niv":3,"vlc":0,"nbAtt":"x2","attMag":" ","attDist":"Non","pv":" ","att":" ","esq":" ","deg":" ","reg":" ","arm":" ","rm":" ","mm":" ","vue":" ","pouvoir":" ","particularite":" "},{"avant":1,"nom":"Esclave","feminin":"","niv":-4,"vlc":0},{"avant":0,"nom":"Esculape","feminin":"","niv":2,"vlc":0,"nbAtt":"-1","attMag":"Non","attDist":"Non","pv":" ","att":" ","esq":" ","deg":" ","reg":" ","arm":" ","rm":" ","mm":" ","vue":" ","pouvoir":" ","particularite":"Soin des monstres"},{"avant":0,"nom":"Ethéré","feminin":"Ethérée","niv":3,"vlc":1,"nbAtt":" ","attMag":"Oui ?","attDist":"Oui","pv":" ","att":" ","esq":" ","deg":" ","reg":" ","arm":" ","rm":" ","mm":" ","vue":" ","pouvoir":" ","particularite":"Camouflage"},{"avant":1,"nom":"Fabulesque","feminin":"","niv":-999,"vlc":0},{"avant":0,"nom":"Fanatique","feminin":"","niv":2,"vlc":0,"nbAtt":"x2","attMag":" ","attDist":"Non","pv":"+","att":"++","esq":"--","deg":"++","reg":"+","arm":"-","rm":"?","mm":" ","vue":"--","pouvoir":" ","particularite":"Ne fuit pas"},{"avant":0,"nom":"Fou","feminin":"Folle","niv":1,"vlc":0,"nbAtt":"0","attMag":" ","attDist":"Non","pv":"++++","att":"++","esq":"--","deg":"+","reg":" ","arm":"++","rm":"?","mm":" ","vue":" ","pouvoir":" ","particularite":" "},{"avant":0,"nom":"Fouisseur","feminin":"Fouisseuse","niv":0,"vlc":0,"nbAtt":"+0","attMag":" ","attDist":"Non","pv":" ","att":" ","esq":" ","deg":" ","reg":" ","arm":" ","rm":" ","mm":" ","vue":" ","pouvoir":" ","particularite":"enfouit les trésors"},{"avant":0,"nom":"Frénétique","feminin":"","niv":3,"vlc":0,"nbAtt":"x2","attMag":" ","attDist":"Non","pv":" ","att":" ","esq":" ","deg":" ","reg":" ","arm":" ","rm":" ","mm":" ","vue":" ","pouvoir":" ","particularite":" "},{"avant":1,"nom":"Frondeur","feminin":"Frondeuse","niv":2,"vlc":0,"nbAtt":"+0","attMag":" ","attDist":"Oui","pv":"-40","att":"+2","esq":"+2","deg":"=","reg":"=","arm":"=","rm":"?","mm":"?","vue":"=","pouvoir":" ","particularite":" "},{"avant":0,"nom":"Fustigateur","feminin":"Fustigatrice","niv":2,"vlc":0,"nbAtt":"+0","attMag":" ","attDist":"Non","pv":" ","att":" ","esq":" ","deg":" ","reg":" ","arm":" ","rm":" ","mm":" ","vue":" ","pouvoir":" ","particularite":"Flagellation mentale"},{"avant":1,"nom":"Garde","feminin":"","niv":0,"vlc":0},{"avant":1,"nom":"Gardien","feminin":"Gardienne","niv":20,"vlc":0,"nbAtt":"+0","attMag":" ","attDist":"Non","pv":" ","att":" ","esq":" ","deg":" ","reg":" ","arm":" ","rm":" ","mm":" ","vue":" ","pouvoir":" ","particularite":" "},{"avant":0,"nom":"Gargantuesque","feminin":"","niv":3,"vlc":0,"nbAtt":"+0","attMag":" ","attDist":"Non","pv":"?","att":"?","esq":"-40","deg":"+2","reg":"+2","arm":"=","rm":"=","mm":"=","vue":"?","pouvoir":"?","particularite":" "},{"avant":1,"nom":"Gigantesque","feminin":"","niv":-999,"vlc":0,"nbAtt":"+0","attMag":" ","attDist":"Oui","pv":" ","att":" ","esq":" ","deg":" ","reg":" ","arm":" ","rm":" ","mm":" ","vue":" ","pouvoir":" ","particularite":" "},{"avant":1,"nom":"Grand Frondeur","feminin":"Grande Frondeuse","niv":4,"vlc":0,"nbAtt":"+0","attMag":" ","attDist":"Oui","pv":" ","att":"?","esq":"-40","deg":"+2","reg":"+2","arm":"=","rm":"=","mm":"=","vue":"?","pouvoir":"?","particularite":" "},{"avant":1,"nom":"Gros","feminin":"Grosse","niv":0,"vlc":0,"nbAtt":"+0","attMag":"Non","attDist":"Non","pv":"?","att":"?","esq":"?","deg":"?","reg":"?","arm":"?","rm":"?","mm":"?","vue":"?","pouvoir":"?","particularite":" "},{"avant":0,"nom":"Guérisseur","feminin":"Guérisseuse","niv":2,"vlc":0,"nbAtt":"-1","attMag":"Non","attDist":"Non","pv":" ","att":" ","esq":" ","deg":" ","reg":" ","arm":" ","rm":" ","mm":" ","vue":" ","pouvoir":" ","particularite":"Soin des monstres"},{"avant":1,"nom":"Guerrier","feminin":"Guerrière","niv":1,"vlc":0,"nbAtt":"+0","attMag":" ","attDist":"Non","pv":"++","att":"+","esq":"?","deg":"?","reg":"+","arm":"?","rm":"?","mm":"?","vue":"?","pouvoir":"?","particularite":" "},{"avant":1,"nom":"Héros","feminin":"","niv":5,"vlc":0,"nbAtt":"+0","attMag":" ","attDist":"Non","pv":"++","att":"+++","esq":"?","deg":"?","reg":"+","arm":"?","rm":"?","mm":"?","vue":"?","pouvoir":"?","particularite":"DLA plus courte"},{"avant":0,"nom":"Homochrome","feminin":"","niv":2,"vlc":0,"nbAtt":"+0","attMag":"Non","attDist":"Oui","pv":" ","att":" ","esq":" ","deg":" ","reg":" ","arm":" ","rm":" ","mm":" ","vue":" ","pouvoir":" ","particularite":"Camouflage"},{"avant":0,"nom":"Homomorphe","feminin":"","niv":3,"vlc":0,"nbAtt":"+0","attMag":" ","attDist":"Oui","pv":" ","att":" ","esq":" ","deg":" ","reg":" ","arm":" ","rm":" ","mm":" ","vue":" ","pouvoir":" ","particularite":"Camouflage"},{"avant":0,"nom":"Implacable","feminin":"","niv":3,"vlc":0,"nbAtt":"+0","attMag":" ","attDist":"Non","pv":"?","att":"?","esq":"?","deg":"?","reg":"?","arm":"?","rm":"?","mm":"?","vue":"?","pouvoir":"?","particularite":"?"},{"avant":0,"nom":"Invocateur","feminin":"Invocatrice","niv":5,"vlc":0,"nbAtt":"+0","attMag":"Oui","attDist":"Non","pv":" ","att":" ","esq":" ","deg":" ","reg":" ","arm":" ","rm":" ","mm":" ","vue":" ","pouvoir":" ","particularite":"Appel sous certaines conditions"},{"avant":0,"nom":"Lobotomisateur","feminin":"Lobotomisatrice","niv":2,"vlc":0,"nbAtt":"+0","attMag":" ","attDist":"Non","pv":" ","att":" ","esq":" ","deg":" ","reg":" ","arm":" ","rm":" ","mm":" ","vue":" ","pouvoir":" ","particularite":"Flagellation mentale mais uniquement sur compétence"},{"avant":1,"nom":"Maître","feminin":"Maîtresse","niv":8,"vlc":1},{"avant":0,"nom":"Malade","feminin":"","niv":-1,"vlc":0,"nbAtt":"+0","attMag":"Non","attDist":"Non","pv":"?","att":"?","esq":"?","deg":"?","reg":"?","arm":"?","rm":"?","mm":"?","vue":"?","pouvoir":"?","particularite":"Maladie + Perte de Pouvoir"},{"avant":0,"nom":"Médicastre","feminin":"","niv":2,"vlc":0,"nbAtt":"-1","attMag":"Non","attDist":"Non","pv":" ","att":" ","esq":" ","deg":" ","reg":" ","arm":" ","rm":" ","mm":" ","vue":" ","pouvoir":" ","particularite":"Soin des monstres"},{"avant":0,"nom":"Mentat","feminin":"","niv":2,"vlc":0,"nbAtt":"+0","attMag":"Oui","attDist":"Oui","pv":"?","att":"?","esq":"?","deg":"+","reg":"?","arm":"?","rm":"?","mm":"?","vue":"?","pouvoir":"?","particularite":" "},{"avant":0,"nom":"Morticole","feminin":"","niv":2,"vlc":0,"nbAtt":"-1","attMag":" ","attDist":"Non","pv":" ","att":" ","esq":" ","deg":" ","reg":" ","arm":" ","rm":" ","mm":" ","vue":" ","pouvoir":" ","particularite":"Soin des monstres"},{"avant":0,"nom":"Mutant","feminin":"Mutante","niv":2,"vlc":0,"nbAtt":"+0","attMag":"Oui","attDist":"Non","pv":"++","att":"+","esq":"+","deg":"+","reg":"++","arm":"?","rm":"?","mm":"?","vue":"?","pouvoir":"?","particularite":"?"},{"avant":0,"nom":"Nécromant","feminin":"Nécromante","niv":5,"vlc":0,"nbAtt":"+0","attMag":"Oui","attDist":"Non","pv":" ","att":" ","esq":" ","deg":" ","reg":" ","arm":" ","rm":" ","mm":" ","vue":" ","pouvoir":" ","particularite":"Appel"},{"avant":0,"nom":"Ouvrier","feminin":"Ouvrière","niv":0,"vlc":0,"nbAtt":"+0","attMag":" ","attDist":"Non","pv":"?","att":"?","esq":"?","deg":"?","reg":"?","arm":"?","rm":"?","mm":"?","vue":"?","pouvoir":"?","particularite":"?"},{"avant":0,"nom":"Parasitus","feminin":"","niv":2,"vlc":0},{"avant":1,"nom":"Paysan","feminin":"Paysanne","niv":-1,"vlc":0,"nbAtt":"+0","attMag":" ","attDist":"Non","pv":"++","att":"-","esq":" ","deg":" ","reg":" ","arm":"?","rm":"?","mm":"?","vue":"?","pouvoir":"?","particularite":"?"},{"avant":0,"nom":"Pestiféré","feminin":"Pestiférée","niv":0,"vlc":0},{"avant":1,"nom":"Petit","feminin":"Petite","niv":-1,"vlc":0,"nbAtt":"+0","attMag":" ","attDist":"Non","pv":" ","att":" ","esq":" ","deg":" ","reg":" ","arm":" ","rm":" ","mm":" ","vue":" ","pouvoir":" ","particularite":" "},{"avant":0,"nom":"Planqué","feminin":"Planquée","niv":1,"vlc":0,"nbAtt":"+0","attMag":" ","attDist":"Oui","pv":" ","att":" ","esq":" ","deg":" ","reg":" ","arm":" ","rm":" ","mm":" ","vue":" ","pouvoir":" ","particularite":"Camouflage"},{"avant":1,"nom":"Prince","feminin":"Princesse","niv":8,"vlc":0,"nbAtt":"+0","attMag":" ","attDist":"Non","pv":"+++","att":"++++","esq":"+++","deg":"++","reg":"+++","arm":"?","rm":"?","mm":"++","vue":"?","pouvoir":"?","particularite":"DLA très courte"},{"avant":0,"nom":"Psychophage","feminin":"","niv":2,"vlc":0,"nbAtt":"+0","attMag":"Non","attDist":"Non","pv":"?","att":"?","esq":"?","deg":"?","reg":"?","arm":"?","rm":"?","mm":"?","vue":"?","pouvoir":"?","particularite":"Flagellation mentale mais uniquement sur sortilège"},{"avant":1,"nom":"Reine","feminin":"","niv":11,"vlc":1,"nbAtt":"+1 ou x2 ?","attMag":" ","attDist":"Oui","pv":"?","att":"?","esq":"?","deg":"?","reg":"?","arm":"?","rm":"?","mm":"?","vue":"?","pouvoir":"?","particularite":" "},{"avant":0,"nom":"Ronfleur","feminin":"Ronfleuse","niv":2,"vlc":0,"nbAtt":"+0","attMag":"Non","attDist":"Non","pv":" ","att":" ","esq":" ","deg":" ","reg":" ","arm":" ","rm":" ","mm":" ","vue":" ","pouvoir":" ","particularite":"Ronflage"},{"avant":1,"nom":"Scout","feminin":"Scoute","niv":2,"vlc":0,"nbAtt":"+0","attMag":"Non","attDist":"Non","pv":"?","att":"?","esq":"+","deg":"-","reg":"--","arm":"?","rm":"?","mm":"?","vue":"?","pouvoir":"?","particularite":"?"},{"avant":1,"nom":"Shaman","feminin":"","niv":0,"vlc":0,"nbAtt":"+0","attMag":"Oui","attDist":"Oui","pv":"-","att":"-","esq":"?","deg":"?","reg":"?","arm":"?","rm":"?","mm":"?","vue":"?","pouvoir":"?","particularite":"si pas de pouvoir, donne un pouvoir parmi |acide, attaque affaiblissante, attaque aveuglante, attaque életrique, attaque paralysante, attaque gluante, aura de feu, coup perforant ou venin"},{"avant":0,"nom":"Soldat","feminin":"Soldate","niv":2,"vlc":0,"nbAtt":"+0","attMag":" ","attDist":"Non","pv":"?","att":"?","esq":"?","deg":"?","reg":"?","arm":"?","rm":"?","mm":"?","vue":"?","pouvoir":"?","particularite":"?"},{"avant":1,"nom":"Sorcier","feminin":"Sorcière","niv":0,"vlc":1,"nbAtt":"+0","attMag":" ","attDist":"Oui","pv":"?","att":"?","esq":"-","deg":"?","reg":"?","arm":"-","rm":"?","mm":"?","vue":"?","pouvoir":"?","particularite":"si pas de pouvoir, donne un pouvoir parmi charme, constriction, drain de vie, pétrification, souffle de feu, spore ou bien encore bénédiction"},{"avant":0,"nom":"Spectral","feminin":"Spectrale","niv":3,"vlc":1,"nbAtt":"+0","attMag":" ","attDist":"Oui","pv":"?","att":"?","esq":"?","deg":"?","reg":"?","arm":"?","rm":"?","mm":"?","vue":"?","pouvoir":"?","particularite":"Camouflage"},{"avant":0,"nom":"Strident","feminin":"Stridente","niv":3,"vlc":0,"nbAtt":"+0","attMag":" ","attDist":"Non","pv":"?","att":"?","esq":"?","deg":"?","reg":"?","arm":"?","rm":"?","mm":"?","vue":"?","pouvoir":"?","particularite":"Strident / auto"},{"avant":0,"nom":"Traqueur","feminin":"Traqueuse","niv":1,"vlc":1,"nbAtt":"+0","attMag":" ","attDist":"Non","pv":"?","att":"?","esq":"?","deg":"?","reg":"?","arm":"?","rm":"?","mm":"?","vue":"?","pouvoir":"?","particularite":" "},{"avant":1,"nom":"Très gros","feminin":"","niv":-999,"vlc":0},{"avant":1,"nom":"Voleur","feminin":"Voleuse","niv":2,"vlc":0,"nbAtt":"+0","attMag":" ","attDist":"Non","pv":"?","att":"?","esq":"++","deg":"-","reg":"--","arm":"++","rm":"?","mm":"?","vue":"?","pouvoir":"?","particularite":"vol d'objet"},{"avant":0,"nom":"Vorace","feminin":"","niv":1,"vlc":0,"nbAtt":"+0","attMag":" ","attDist":"Non","pv":"?","att":"?","esq":"?","deg":"?","reg":"?","arm":"?","rm":"?","mm":"?","vue":"?","pouvoir":"?","particularite":"?"}]` );


/* ******************************************************** */

const ages = {
"Insecte": [
"Larve",
"Immature",
"Juvénile",
"Imago",
"Développé",
"Mûr",
"Accompli",
"Achevé"
],
"Animal": [
"Bébé",
"Enfançon",
"Jeune",
"Adulte",
"Mature",
"Chef de harde",
"Ancien",
"Ancêtre"
],
"Démon": [
"Initial",
"Novice",
"Mineur",
"Favori",
"Majeur",
"Supérieur",
"Suprême",
"Ultime"
],
"Humanoïde": [
"Nouveau",
"Jeune",
"Adulte",
"Vétéran",
"Briscard",
"Doyen",
"Légendaire",
"Mythique"
],
"Monstre": [
"Nouveau",
"Jeune",
"Adulte",
"Vétéran",
"Briscard",
"Doyen",
"Légendaire",
"Mythique"
],
"Mort-Vivant": [
"Naissant",
"Récent",
"Ancien",
"Vénérable",
"Séculaire",
"Antique",
"Ancestral",
"Antédiluvien"
],
"délire": [
"Nouveau",
"Jeune",
"Adulte",
"Vétéran",
"Briscard",
"Doyen",
"Légendaire",
"Mythique"
]
}





