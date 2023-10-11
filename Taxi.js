let Personnage = {
    name : "John",
    heal : 10
}

let musics = [
    "Anissa de Wejdene",
    "Pokemon Générique n°1",
    "Demons D'Imagine Dragon",
    "Imagine de John Lennon ",
    "Bohemian Rhapsody de Queen "
]

let redlight = 30

while(redlight > 0){
    redlight = redlight - 1
    let music = musics[Math.floor(Math.random()*musics.length)];
    
    if(Personnage.heal === 0){
        console.log("EXPLOSION")
        break
    }
    if(redlight === 0){
        let changement = 10 - Personnage.heal
        console.log("Vous êtes bien arriver à destination, vous avez fait " + changement + " changements")
        
    } else {
        console.log("Actuellement la musique qui passe est " + music + ". Il reste " + redlight +" feux rouge avant d'arriver")
    }
    if(music === "Anissa de Wejdene"){
        Personnage.heal = Personnage.heal - 1
        console.log("Et il vous reste " + Personnage.heal + " points de santé")
    }
}
