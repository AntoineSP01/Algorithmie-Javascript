let Tueur = {
    name: "Jason",
    hp: 100
}

let Caractéristiques = [
    Chomeur = {
        name : "Chomeur",
        probabilitedemourir: 0.3,
        probabilitedemettredesdegats: 0.5,
        probabilitédemourirenmettantdesdegats: 0.2
    },

    Philosophe = {
        name : "Philosophe",
        probabilitedemourir: 0.15,
        probabilitedemettredesdegats: 0.55,
        probabilitédemourirenmettantdesdegats: 0.3
    },

    Mathématicien = {
        name : "Mathématicien",
        probabilitedemourir: 0.4,
        probabilitedemettredesdegats: 0.2,
        probabilitédemourirenmettantdesdegats: 0.4
    },

    Chanceux = {
        name : "Chanceux",
        probabilitedemourir: 0.1,
        probabilitedemettredesdegats: 0.8,
        probabilitédemourirenmettantdesdegats: 0.1
    },

    MecPasOuf = {
        name : "MecPasOuf",
        probabilitedemourir: 0.8,
        probabilitedemettredesdegats: 0.1,
        probabilitédemourirenmettantdesdegats: 0.1
    },

    Bigleux = {
        name : "Bigleux",
        probabilitedemourir: 0.1,
        probabilitedemettredesdegats: 0.1,
        probabilitédemourirenmettantdesdegats: 0.8
    },

    Aveugle = {
        name : "Aveugle",
        probabilitedemourir: 0.3,
        probabilitedemettredesdegats: 0.35,
        probabilitédemourirenmettantdesdegats: 0.35
    },

    Sportif = {
        name : "Sportif",
        probabilitedemourir: 0.15,
        probabilitedemettredesdegats: 0.15,
        probabilitédemourirenmettantdesdegats: 0.7
    },

    Historien = {
        name : "Historien",
        probabilitedemourir: 0.6,
        probabilitedemettredesdegats: 0.15,
        probabilitédemourirenmettantdesdegats: 0.25
    },

    Noah = {
        name : "Noah",
        probabilitedemourir: 1,
        probabilitedemettredesdegats: 0,
        probabilitédemourirenmettantdesdegats: 0
    }
]

let Name = [
    "Hermione",
    "Leo",
    "Yani",
    "Dimitri",
    "Pierre",
    "Jacque",
    "Charlotte",
    "Armand",
    "Claire",
    "Alexis"
]

function obtenirCaracteristiqueAleatoire() {
    const index = Math.floor(Math.random() * Caractéristiques.length);
    const caracteristique = Caractéristiques[index];
    return caracteristique;
}

let Survivants = [];

for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * Name.length);
    const name = Name.splice(randomIndex, 1)[0];
    const caractéristique = obtenirCaracteristiqueAleatoire();
    const survivant = {
        nom: name,
        caractéristique,
    };
    Survivants.push(survivant);
}

console.log('Voici la dream team pour buter Jason')

Survivants.forEach((survivant, index) => {
    console.log(`Survivant ${index + 1}:`);
    console.log(`Nom: ${survivant.nom} est un/e ${survivant.caractéristique.name} et à :`);
    console.log(`Une probabilité de mourir direct de : ${survivant.caractéristique.probabilitedemourir*100}%`);
    console.log(`Une probabilité d'esquivé et de mettre des dégats de: ${survivant.caractéristique.probabilitedemettredesdegats*100}%`);
    console.log(`Et enfin une probabilité de mettre des dégats plus important mais de mourir ensuite de : ${survivant.caractéristique.probabilitédemourirenmettantdesdegats*100}%`);
    console.log("---");
});

console.log("Après la présentation voici le tout attendu combat pour l'humanité, c'est partis !!")

let survivantsEnVie = Survivants.slice();  
let survivantsMorts = [];

while (Tueur.hp > 0 && survivantsEnVie.length > 0) {

    const survivantIndex = Math.floor(Math.random() * survivantsEnVie.length);
    const survivant = survivantsEnVie[survivantIndex];
    
    const randomOutcome = Math.random();
    
    if (randomOutcome < survivant.caractéristique.probabilitedemourir) {
        console.log(`Jason sacrifie ${survivant.nom} au nom de son papa bien aimé`);
        survivantsMorts.push(survivantsEnVie.splice(survivantIndex, 1)[0]); 

    } else if (randomOutcome < survivant.caractéristique.probabilitedemettredesdegats + survivant.caractéristique.probabilitedemourir) {
        console.log(`${survivant.nom} et inflige 10 dmg à Jason`);
        Tueur.hp -= 10; 

    } else {
        console.log(`${survivant.nom} inflige 15 dmg à Jason mais meurt dans d'horribles circonstances`);
        Tueur.hp -= 15; 
        survivantsMorts.push(survivantsEnVie.splice(survivantIndex, 1)[0]); 

    }
}

if (Tueur.hp <= 0) {    
    console.log("Les survivants ont gagné et ont réussi a buter Jason");
    console.log("RIP à " + survivantsMorts.map(survivant => survivant.nom).join(", ") + ", et au papa de Jason qui ne reverra plus jamais son fils");

} else {
    console.log("Jason a gagné");
}
