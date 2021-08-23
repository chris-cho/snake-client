const net = require('net');
const { IP, PORT, PLAYER} = require('./constants');

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('connect', () => {
    conn.write(`Name: ${PLAYER}`);
    conn.setEncoding('utf8');
    console.log("Successfully connected to game server" );
  });
  return conn;
}

module.exports = {
  connect,
}