const db = db.require('./model.js');

const controller = {};

//setlect all
controller.selectAll = () => {
    const SQLQuery = 'SELECT * from tableName;';
    db.query(SQLQuery)
        .then(data => console.log(data))
}


//add

controller.add = () => {
    const SQLQuery = 'INSERT INTO tableName( columnName, columnName...) VALUES( $1, $2...) RETURNING *;';
    const values = ['value1, value2...'];

    db.query(SQLQuery, values)
        .then(data => console.log(data));

}

module.exports = controller;