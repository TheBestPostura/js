class ComponentBase {
    async fetchFile(resourse){
        let content = await fetch(resourse);
        let response = await content.text();

        return response;
    }
}

export default ComponentBase;