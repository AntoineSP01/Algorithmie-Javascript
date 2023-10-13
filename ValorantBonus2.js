let Attaquants = [
    "Omen",
    "Phoenix",
    "Jett",
    "Fade",
    "Chamber"
]


let Défenseurs = [
    "Omen",
    "Phoenix",
    "Jett",
    "Fade",
    "Chamber"
]

let Spike = false
let Smoke = false
let MancheGagnéeAttaquant = 0
let MancheGagnéeDéfenseur = 0
let Equipemanchegagnante = null

let numeroManche = 1
let Equipe = null


while (MancheGagnéeAttaquant < 13 && MancheGagnéeDéfenseur < 13) {
    console.log("La manche n° " + numeroManche + " peut dès à présent débuté ")
    let ChoixEquipe = Math.floor(Math.random() * 2)
    let attaquant, défenseur

    if (ChoixEquipe === 0) {
        attaquant = Attaquants[Math.floor(Math.random() * Attaquants.length)]
        défenseur = Défenseurs[Math.floor(Math.random() * Défenseurs.length)]
        attaquantEquipe = "Attaquants"
        défenseurEquipe = "Défenseurs"
        const index = Défenseurs.indexOf(défenseur)
        Défenseurs.splice(index, 1)
    } else {
        attaquant = Défenseurs[Math.floor(Math.random() * Défenseurs.length)]
        défenseur = Attaquants[Math.floor(Math.random() * Attaquants.length)]
        attaquantEquipe = "Défenseurs"
        défenseurEquipe = "Attaquants"
        const index = Attaquants.indexOf(défenseur)
        Attaquants.splice(index, 1)
    }
    
    console.log(`${attaquant} des ${attaquantEquipe} tue de sang froid ${défenseur} des ${défenseurEquipe}`)


    
    if(défenseurEquipe === "Défenseurs"){
        if(Math.random() < 0.6){
            Spike = true
            console.log("Le spike a été posé")
        } else {
            console.log("Le spike n'a pas été posé")
        }
    } else {
        if(Math.random() < 0.4){
            Spike = true
            console.log("Le spike a été posé")
        } else {
            console.log("Le spike n'a pas été posé")
        }
    }

    while (Défenseurs.length > 0 && Attaquants.length > 0) {
            if (Spike == true) {
                if (Math.random() < 0.7) {
                    attaquant = Attaquants[Math.floor(Math.random() * Attaquants.length)]
                    défenseur = Défenseurs[Math.floor(Math.random() * Défenseurs.length)]
                    attaquantEquipe = "Attaquants"
                    défenseurEquipe = "Défenseurs"
                    console.log(`${attaquant} des ${attaquantEquipe} extermine ${défenseur} des ${défenseurEquipe}`)
                    const index = Défenseurs.indexOf(défenseur)
                    Défenseurs.splice(index, 1)
                } else {
                    attaquant = Défenseurs[Math.floor(Math.random() * Défenseurs.length)]
                    défenseur = Attaquants[Math.floor(Math.random() * Attaquants.length)]
                    attaquantEquipe = "Défenseurs"
                    défenseurEquipe = "Attaquants"
                    console.log(`${attaquant} des ${attaquantEquipe} trucide avec amour ${défenseur} des ${défenseurEquipe}`)
                    const index = Attaquants.indexOf(attaquant)
                    Attaquants.splice(index, 1)
                }
            } else {
                if(Smoke == true){
                    if (Math.random() < 0.6) {
                        attaquant = Attaquants[Math.floor(Math.random() * Attaquants.length)]
                        défenseur = Défenseurs[Math.floor(Math.random() * Défenseurs.length)]
                        attaquantEquipe = "Attaquants"
                        défenseurEquipe = "Défenseurs"
                        console.log(`${attaquant} des ${attaquantEquipe} extermine ${défenseur} des ${défenseurEquipe}`)
                        const index = Défenseurs.indexOf(défenseur)
                        Défenseurs.splice(index, 1)
                    } else {
                        attaquant = Défenseurs[Math.floor(Math.random() * Défenseurs.length)]
                        défenseur = Attaquants[Math.floor(Math.random() * Attaquants.length)]
                        attaquantEquipe = "Défenseurs"
                        défenseurEquipe = "Attaquants"
                        console.log(`${attaquant} des ${attaquantEquipe} trucide avec amour ${défenseur} des ${défenseurEquipe}`)
                        const index = Attaquants.indexOf(attaquant)
                        Attaquants.splice(index, 1)
                    }
                }else{
                    if (Math.random() < 0.5) {
                        attaquant = Attaquants[Math.floor(Math.random() * Attaquants.length)]
                        défenseur = Défenseurs[Math.floor(Math.random() * Défenseurs.length)]
                        attaquantEquipe = "Attaquants"
                        défenseurEquipe = "Défenseurs"
                        console.log(`${attaquant} des ${attaquantEquipe} liquide intelligement ${défenseur} des ${défenseurEquipe}`)
                        const index = Défenseurs.indexOf(défenseur)
                        Défenseurs.splice(index, 1)
                        if(attaquant === "Omen"){
                            if (Math.random() < 0.5) {
                                Smoke = true
                                console.log("Une smoke a été posé ! Les probabilités ont été modifié.")
                            } 
                        }
                       
                    } else {
                        attaquant = Défenseurs[Math.floor(Math.random() * Défenseurs.length)]
                        défenseur = Attaquants[Math.floor(Math.random() * Attaquants.length)]
                        attaquantEquipe = "Défenseurs"
                        défenseurEquipe = "Attaquants"
                        console.log(`${attaquant} des ${attaquantEquipe} démolit avec efficacité ${défenseur} des ${défenseurEquipe}`)
                        const index = Attaquants.indexOf(attaquant)
                        Attaquants.splice(index, 1)
                    }
                }
            }

            

    }

    if(Défenseurs.length == 0){
        MancheGagnéeAttaquant += 1
        Equipemanchegagnante = "attaquants"
    } else {
        MancheGagnéeDéfenseur += 1
        Equipemanchegagnante = "défenseurs"
    }
    Attaquants.splice(0, 5)
    Défenseurs.splice(0, 5)
    Attaquants.push("Omen","Phoenix","Jett","Fade","Chamber")
    Défenseurs.push("Omen","Phoenix","Jett","Fade","Chamber")

    console.log(`La manche n°${numeroManche} a été remporté par l'équipe des ${Equipemanchegagnante}`)
    console.log(`Le score est actuellement de ${MancheGagnéeAttaquant} à ${MancheGagnéeDéfenseur}` )
    console.log("________________________________________________")
    
    numeroManche += 1
    Spike = false
    Smoke = false
    
    
}

if(MancheGagnéeAttaquant == 13){
    console.log("La partie a été remporté par l'équipe des attaquants, gg à tous")
} else {
    console.log("La partie a été remporté par l'équipe des défenseurs, gg à tous")
}
