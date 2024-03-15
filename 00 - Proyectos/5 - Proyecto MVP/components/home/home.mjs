import ComponentBase from "../component_base.mjs";

class Home extends ComponentBase {
    #template = "components/home/home.html";
    #user = null;
    #welcome = "!!! welcome";

    constructor(){
        super();

        this.#user = new User();
    }

    async render(){
        let content = await this.fetchFile(this.#template);

        return this.#asingTemplateValue(content);
        
        //return this.fetchFile(this.#template);
    }

    #asingTemplateValue(content){
        return content.replace(/{name}/, `${this.#welcome} ${this.#user.name}`);
    }
}

export { Home };