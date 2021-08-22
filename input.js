const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
}

const handleUserInput = (input) => {
  if (input === '\u0003') {
    process.exit();
  } else {
  return input;
  }
}

module.exports = {setupInput, handleUserInput};