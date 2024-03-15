document.querySelector(".request").addEventListener("click", async event =>{
let response = await requestActivity();
insertOutputResponse(response);
});

async function requestActivity(){
    const response = await fetch("https://www.boredapi.com/api/activity/");
    const jsonResponse = response.json();

    return jsonResponse;
}

function insertOutputResponse(response){
    let container = document.querySelector(".activity");

    container.innerHTML = "";

    let activity = document.createElement("h4");
    activity.append(response.activity);
    container.append(activity);

    let link = document.createElement("a");
    link.href = response.link;
    link.text = response.link;
    link.target = "_blank";
    container.append(link);

    let type = document.createElement("p");
    type.append(response.type);
    container.append(type);
}