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
  switch (input) {
    case '\u0003':
      process.exit();
    case 'w':
      return "Move: up";
    case 'a':
      return "Move: left";
    case 's':
      return "Move: down";
    case 'd':
      return "Move: right";
    case 'r':
      return "Say: Heya!";
    case 'c':
      return "Say: Move it!";
    default:
      `Say: ${input}`;
  }
}

module.exports = {setupInput};