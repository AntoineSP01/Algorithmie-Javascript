class Pokemon{
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    getAttackPokemon(a, b){ 
        console.log(a.name + " attaque ")
        let degat = a.attack - b.defense
        b.hp = b.hp - degat
        if( b.hp < 0){
            b.hp = 0
        }
        console.log("il inflige " + degat + " de dégats, il reste " + b.hp + " à " + b.name)
        if(poke1.hp <= 0){
            console.log(poke1.name + " est mort")
        } else if(poke2.hp <= 0) {
            console.log(poke2.name + " est mort")
        }
    }

    isLucky(){
        let random = Math.random()
        return this.luck - random
    } 
    
}


let poke1 = new Pokemon("Carapuce", 14, 10, 50, 0.6)
let poke2 = new Pokemon("Salameche", 19, 8, 55, 0.4)

while(poke1.hp > 0 && poke2.hp > 0) {
    if(poke1.isLucky() > 0) {
        poke1.getAttackPokemon(poke1, poke2)
        
    } else {
        poke2.getAttackPokemon(poke2, poke1)
        
    }
    
    if(poke1.hp < 0 || poke2.hp < 0){
        break
    }

    if(poke2.isLucky() > 0) {
        poke2.getAttackPokemon(poke2, poke1)
        
    } else {
        poke1.getAttackPokemon(poke1, poke2)
       
    }
    
    if(poke1.hp < 0 || poke2.hp < 0){
        break
    }
}

