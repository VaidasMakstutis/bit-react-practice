const consoleItems = (data) => {

    const ulElement = document.createElement('ul');
    document.querySelector('.container').appendChild(ulElement)

    for (let item of data) {
        for (let key in item) {
           let liElement = document.createElement('li');
           liElement.textContent = `Preke:${key}-Reikšmė:"${item[key]}`;
           document.querySelector('ul').appendChild(liElement)
        }
    }
};

export default consoleItems;