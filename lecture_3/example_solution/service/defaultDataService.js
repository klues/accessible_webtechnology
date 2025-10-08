import dataService from "./dataService.js";

let defaultDataService = {};

let DEFAULT_CONTACTS = [
    {
        id: 1,
        name: "Martina Muster"
    },
    {
        id: 2,
        name: "Max Muster"
    },
    {
        id: 3,
        name: "John Doe"
    },
    {
        id: 4,
        name: "Jane Doe"
    },
];

defaultDataService.createDefaultData = function () {
    if (dataService.getContacts().length === 0) {
        console.log("creating default contacts data...");
        dataService.save(dataService.KEY_CONTACTS, DEFAULT_CONTACTS);
    }
}

export default defaultDataService;