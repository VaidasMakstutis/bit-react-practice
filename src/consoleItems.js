const consoleItems = (data) => {
    for (let item of data) {
        for (let key in item) {
            console.log(key, ":", item[key]);
        }
    }
};

export default consoleItems;