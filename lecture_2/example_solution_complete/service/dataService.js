let dataService = {};

dataService.KEY_CONTACTS = 'KEY_CONTACTS';
dataService.KEY_CONVERSATIONS = 'KEY_CONVERSATIONS_';

dataService.save = function (key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

dataService.get = function (key) {
    let dataString = localStorage.getItem(key);
    try {
        return JSON.parse(dataString);
    } catch (e) {
        return null;
    }
}

dataService.getContacts = function() {
    return dataService.get(dataService.KEY_CONTACTS) || [];
}

dataService.getContact = function(contactId) {
    let contacts = dataService.getContacts();
    return contacts.find(c => c.id + '' === contactId);
}

dataService.getMessages = function(contactId) {
    return dataService.get(dataService.KEY_CONVERSATIONS + contactId) || [];
}

dataService.saveMessages = function(messages = [], contactId) {
    dataService.save(dataService.KEY_CONVERSATIONS + contactId, messages);
}

export default dataService;