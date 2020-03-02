//const apiBase = "127.0.0.1:3000/";

let display = 0;

document.addEventListener("DOMContentLoaded", DOMLoaded);

function DOMLoaded(event) {

    console.log("DOM LOADED!\n");
    display = document.getElementById("participantList");

    //Add event listeners to buttons
    document.getElementById("getParts").addEventListener("click", getParticipants);
    document.getElementById("makeNewPart").addEventListener("click", makeNewParticipant);
    document.getElementById("changePartID").addEventListener("click", changeParticipantID);
    document.getElementById("deletePart").addEventListener("click", deleteParticipant);

    //Initialize textboxes
    document.getElementById("changeFrom").value = "";
    document.getElementById("changeTo").value = "";

    document.getElementById("deleteID").value = "";


}


//Get the participants from the backend
async function getParticipants(event) {
    //fetching the localhost:3000/api url, but can write api because everything in hosted in express
    let response = await fetch("api", { method: 'GET' });
    response = await response.json();
    displayJSON(response);

}

//Make a new participant
async function makeNewParticipant(event) {

    let response = await fetch("api", { method: 'POST' });
    response = await response.json();
    displayJSON(response);

}


//Change a participant's ID
async function changeParticipantID(event) {

    //Get values from textboxes
    //cF stands for changeFrom
    //cT stands for changeTo
    let cF = document.getElementById("changeFrom").value;
    let cT = document.getElementById("changeTo").value;

    //If the numbers are invalid or if the textboxes are empty
    //Display an error
    //isNaN is a built in javascript function for "is not a number"
    //Number() to convert string to integer
    if (isNaN(Number(cF)) || isNaN(Number(cT)) || cF == "" || cT == "") {

        clearElements();
        let $p = document.createElement("p");

        $p.innerHTML = "INVALID PUT INPUT!";
        display.appendChild($p);
        return;

    }

    let response = await fetch(`api/${cF}/${cT}`, { method: 'PUT' });
    response = await response.json();

    //Clear textboxes
    document.getElementById("changeFrom").value = "";
    document.getElementById("changeTo").value = "";

    displayJSON(response);

}

//Delete a participant
async function deleteParticipant(event) {

    let id = document.getElementById("deleteID").value;
    //If the numbers is invalid or if the textbox is empty
    if (isNaN(Number(id)) || id == "") {

        clearElements();
        let $p = document.createElement("p");

        $p.innerHTML = "INVALID DELETE INPUT!";
        display.appendChild($p);
        return;
    }

    let response = await fetch(`api/${id}`, { method: 'DELETE' });
    response = await response.json();

    //clear delete input box
    document.getElementById("deleteID").value = "";
    //displays json with ID removed
    displayJSON(response);
}


function displayJSON(response) {

    clearElements();

    //If the response contains an error, print it instead
    if (response.error) {
        showElements(response);
        return;
    }

    //Display each participant
    response.participants.forEach(showElements);
}


//Clears the elements of the JSON
function clearElements() {

    while (display.hasChildNodes()) {
        display.removeChild(display.lastChild);
    }

}

//Show the JSON elements
function showElements(item) {

    let $p = document.createElement("p");
    $p.innerHTML = JSON.stringify(item);
    display.appendChild($p);
}