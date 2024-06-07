const privateLog = (message) => {
    const d = new Date();
    console.log(d.toLocaleString(), message);
}

const boh = "boh";

const log = (message) => {
    privateLog(message);
}

module.exports = { boh, log };