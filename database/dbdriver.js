let mysql = require('mysql');

class DBDriver {

     con = mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: database
    });

    insertTest(name, food, feeling) {
        this.con.connect(function(err) {
            console.log("Connected to DB");
            let values = "('" + name + "', '" + food + "', '" + feeling + "')";
            console.log(values);
            var sql = "INSERT INTO questions (name, food, feeling) VALUES " + values;
            connection.query(sql, function(err, result) {
                console.log("1 row added successfully");
            });
        });
    }
}

module.exports = DBDriver;