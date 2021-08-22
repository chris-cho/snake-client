const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: '192.168.228.12',
    port: '50541'
  });

  const setupInput = function() {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      } else {
      return stdin;
      }
    });
  }

  conn.on('connect', () => {
    conn.write('Name: HSC')
    conn.setEncoding('utf8');
    console.log("Successfully connected to game server" );
    setupInput();
  });
  return conn;
}

module.exports = {
  connect,
}

/* "Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left) */