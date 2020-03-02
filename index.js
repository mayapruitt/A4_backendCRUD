const express = require('express');
let jFile = require('./db/data.json');
const app = express();

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

//Use the public folder for the front end, static indicates it won't change
app.use(express.static('public'));


//API GET = READ
app.get("/api", (request, response) => {
    response.json(jFile);
})

//API POST = CREATE
app.post("/api", (request, response) => {
    //Get highest ID
    let newID = 0;
    jFile.participants.forEach(item => {
        if (item.id > newID) {
            newID = item.id;
        }
    });
    newID += 1;
    const newData = Object.assign({ id: newID }, request.body);
    jFile.participants.push(newData);
    response.json(jFile);
})

//API PUT = UPDATE
app.put("/api/:id/:newID", (request, response) => {

    const selectedID = request.params.id;
    const newID = request.params.newID;

    //Checks if the selected ID (the one the user wants to update) 
    //exists already in the particants array
    //=== type checking
    let item = jFile.participants.find(item => {
        return item.id === Number(selectedID);
    });

    //If the selected ID does not exist in the array, 
    //return the fact that it is undefined
    if (item === undefined) {
        response.json({ error: `The key '${selectedID}' does not exist` });
        return;
    }

    //see if the new ID (what the user wants to change it to) exists already
    if (!(jFile.participants.find(item => {
            return item.id === Number(newID);
        }) === undefined)) {
        response.json({ error: `The new ID '${newID}' is taken!` });
        return;
    }

    //If new ID is available, update the ID
    item.id = Number(newID);

    response.json(jFile);

});

app.delete("/api/:id", (request, response) => {

    const selectedID = request.params.id;
    //Check for the selected ID
    let item = jFile.participants.find(item => {
        return item.id === Number(selectedID);
    });

    //If the selected ID does not exist, return that
    if (item === undefined) {
        response.json({ error: `The key '${selectedID}' does not exist` });
        return;
    }

    //Remove the element of the array
    jFile.participants.splice(jFile.participants.indexOf(item), 1);

    response.json(jFile);

})

app.listen(3000, () => {
    console.log("type http://localhost:3000 into the browser");

});