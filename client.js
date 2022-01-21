const net = require("net");
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("connected");
    conn.write("Name: ABC");
    //conn.write("Move: up");
    
  });
  conn.on("data", (message) => {
    // code that does something when the connection ends
    console.log(message);
  });

  return conn;
};

module.exports = connect;
