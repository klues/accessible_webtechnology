let dataService = {
    save(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    },
    get(key) {
        let dataString = localStorage.getItem(key);
        try {
            return JSON.parse(dataString);
        } catch (e) {
            return null;
        }
    }
};

export default dataService;