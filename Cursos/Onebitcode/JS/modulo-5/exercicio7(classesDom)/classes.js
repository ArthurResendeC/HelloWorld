const container = document.getElementById("div")

class Component{
    constructor(name, HtmlElement){
        this.name = name
        this.element = this.#build(HtmlElement)
    }
    render(){
        container.appendChild(this.element)
    }
    #build(HtmlElement){
        return document.createElement(HtmlElement)
    }
    setId(name){
        this.element.setAttribute("id", name)
    }
}

const paragrafo = new Component("teste", "p")

paragrafo.render()

class Input extends Component{
    constructor(type , name, HtmlElement = "input"){
        super(name, HtmlElement)
        this.setId(name)
        this.setAttribute("type", type)
    }

    setAttribute(attr, value) {
        this.element.setAttribute(attr, value);
    }
}

class Label extends Component{
    constructor(txtContent, name, HtmlElement = "label"){
        super(name,HtmlElement)
        this.setTextContent(txtContent)
        this.setId(name)
    }

    setTextContent(txt){
        this.element.innerText = txt
    }
}

const labelTeste = new Label("Conteúdo", "inputTeste")
labelTeste.render()

const inputTeste = new Input("number", "inputTeste")
inputTeste.render()

class Form extends Component{
    constructor(){
        
    }
}