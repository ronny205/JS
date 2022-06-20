var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "new_db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
 // var sql = "CREATE TABLE work (name VARCHAR(255), address VARCHAR(255))";
  var sql = "INSERT INTO work(name, address) VALUES ('Teacher', 'Dr. DY Patil School Of MCA')";
  var sql = "INSERT INTO work VALUES ('Teacher', 'Dr. DY Patil School Of MCA')";
  var sql = "UPDATE work SET address = 'Willingdon College' WHERE address = 'Dr. DY Patil School Of MCA'";
  
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("created");
  });
});