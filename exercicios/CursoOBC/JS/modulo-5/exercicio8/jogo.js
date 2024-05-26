class Character{
    constructor(name,hp,atk,def){
        this.name = name
        this.hp = hp
        this.atk = atk
        this.def = def
    }

    atack(target){
        const damage = Math.max(0, this.atk - target.def)
        target.hp -= damage
    }
}




class Thief extends Character{
    constructor(name, hp, atk, def){
        super(name,hp,atk,def)
    }

    atack(target){
        const damage = Math.max(0, 2 * (this.atk - target.def))
        target.hp -= damage
        if (damage === 0) {
            console.log("A defesa do alvo é alta demais!");
        } else {
            console.log(`O ${target.name} sofreu ${damage} pontos de dano!`);
        }
    }
}





class Mage extends Character{
    constructor(name,hp,atk,def, mPower){
        super(name,hp,atk,def)
        this.magicPower = mPower
    }

    atack(target){
        const damage = Math.max(0, (this.atk + this.magicPower) - target.def)
        target.hp -= damage
        if (damage === 0) {
            console.log("A defesa do alvo é alta demais!");
        } else {
            console.log(`O ${target.name} sofreu ${damage} pontos de dano!`);
        }
    }
    heal(target){
        target.hp += 2 * this.magicPower
    }
}






class Warrior extends Character{
    constructor(name,hp,atk,def,shield,shieldMode = false){
        super(name,hp,atk,def)
        this.shield = shield
        this.shieldMode = shieldMode
    }

    atack(target){
        if (this.shieldMode) {
            console.log("Não é possível atacar enquanto em modo de defesa!");
        } else{
            const damage = Math.max(0, this.atk - target.def)
            target.hp -= damage
            if (damage === 0) {
                console.log("A defesa do alvo é alta demais!");
            } else {
                console.log(`O ${target.name} sofreu ${damage} pontos de dano!`);
            }
        }
    }

    changeShieldMode(){
        if (this.shieldMode) {
            this.shieldMode = false
            this.def -= this.shield
        } else{
            this.shieldMode = true
            this.def += this.shield
        }
    }
}


const mountain = new Warrior("Mountain", 500, 750, 500, 300)
const prince = new Thief("Prince", 300, 400, 300)
const eunuco = new Mage("Varys", 200, 500, 0, 400)


