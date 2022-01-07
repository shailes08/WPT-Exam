const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "wpt"
}

const record = {
    sender: "shailes",
    receiver: "neelesh",
    message: "Hi"
}

const addrecord = async (record) => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql = `insert into message (sender, receiver, message) values (?, ?, ?)`;
    await connection.queryAsync(sql, [record.sender, record.receiver, record.message]);
    await connection.endAsync();
    console.log("added");
}

const getrecord = async () => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql = "select * from message";
    const list = await connection.queryAsync(sql, []);
    console.log("list of record");
    console.log(list);
    return list;
}

getrecord();

module.exports = { addrecord, getrecord };