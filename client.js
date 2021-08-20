const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: '50541'
  });

  

  conn.on('connect', () => {
    conn.write('Name: HSC')
    conn.setEncoding('utf8');
    console.log("Successfully connected to game server" );
  });
  return conn;
}

module.exports = {
  connect,
}