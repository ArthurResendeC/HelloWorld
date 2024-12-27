class User{
    constructor(fullname,email,password){
        this.name = fullname
        this.email = email
        this.password = password
    }

    login(email,password){
        if(this.email !== email || this.password !== password){
            return console.log("Email ou senha inválidos...");
        }
        return console.log("Login bem sucedido");
    }
}

module.exports = {
    User
}