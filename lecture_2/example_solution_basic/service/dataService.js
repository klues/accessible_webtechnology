let dataService = {};

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

export default dataService;