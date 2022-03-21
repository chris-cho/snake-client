const { keyMapping }  = require('./constants');

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    conn.write(handleUserInput(key));
  });
}

const handleUserInput = (input) => {
  if (input !== '\u0003') return keyMapping[input];
  process.exit()
  //input == '\u0003' ? process.exit() : keyMapping[input];
  //Why doesn't the above work?
}

module.exports = {setupInput};