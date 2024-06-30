import mysql from "mysql";

export const db = mysql.createConnection({
  host: "23.83.74.97",
  user: "root",
  password: "Sneha@2012",
  database: "smartex_db"
});
console.log("db connect")