function avg(list) {
    const filteredList = filter(list);
    return filteredList.length > 0 && filteredList.reduce((a, b) => a + b) / filteredList.length;
}

function filter(list) {
    return list.filter(item => item && !isNaN(item) && isFinite(item));
}

function isValid(num) {
    return num && !isNaN(num) && isFinite(num);
}

async function sleep(delay) {
    return new Promise((resolve) => setTimeout(resolve, delay));
}

export { avg, filter, isValid, sleep };
