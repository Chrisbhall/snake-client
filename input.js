let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = ((key) => {
  
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write("Move: up");
    //console.log("Move: up");
  } else if (key === 's') {
    connection.write("Move: down");
    // console.log("Move: down");
  } else if (key === 'a') {
    connection.write("Move: left");
    //console.log("Move: left");
  } else if (key === 'd') {
    connection.write("Move: right");
    //console.log("Move: right");
  } else if (key === '1') {
    connection.write(`Say: Hello`);
  } else if (key === '2') {
    connection.write(`Say: I am da best`);
  } else if (key === '3') {
    connection.write(`Say: Bye`);
  }
});
// your code here
//process.stdin.on('data',

module.exports = setupInput;

/*
    "Move: up" - move up one square (unless facing down)
    "Move: down" - move down one square (unless facing up)
    "Move: left" - move left one square (unless facing right)
    "Move: right" - move left one square (unless facing left)
*/