import ComponentBase from "../component_base.mjs";

class Test extends ComponentBase{
    #Template = "components/test/test.html";

    render(){
        return this.fetchFile(this.#Template);
    }
}

export { Test };