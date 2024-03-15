import ComponentBase from "../component_base.mjs";

class Auth extends ComponentBase {
    #template = "components/auth/auth.html";

    async render(){
        return await this.fetchFile(this.#template);
    }

    login(router){
        if(this.#tokenExistsInSession()) {
            router.load("home");
            return true;
        }

        document.querySelector("form.login").addEventListener("submit", async event =>{
            event.preventDefault();

            const userName = event.target.elements[0].value;
            const password = event.target.elements[1].value;

            let auth = await this.#doLogin(userName, password);

            if("token" in auth) {
                sessionStorage.setItem('token', auth.token);
                router.load("home");
                return true;
            }

            alert(auth.message);
            return false;
        });
    }

    #tokenExistsInSession(){
        return sessionStorage.getItem("token") !== null;
    }

    logout(router){
        sessionStorage.removeItem('token');
        Router.load("login");
        return true;
    }

    async #doLogin(userName, password){
        let request = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userName: userName,
                password: password
            })
        });
        
        return await request.json();
    }
}

export { Auth };