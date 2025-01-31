const session = {
    save: (key, data) => {
        sessionStorage.setItem(key, JSON.stringify(data));
    },
    load: (key) => {
        const res = sessionStorage.getItem(key);
        return JSON.parse(res);
    },
    remove: (key) => {
        sessionStorage.removeItem(key);
    }
}

export default session;