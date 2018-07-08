const username = "israel93";
const password = 'israel93';
const url = `mongodb://${username}:${password}@ds127771.mlab.com:27771/websocketclimate`;

port = process.env.PORT || 3000;


module.exports = { port, url };
