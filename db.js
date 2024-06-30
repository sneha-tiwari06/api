import mysql from "mysql";

export const db = mysql.createConnection({
  host: "23.83.74.97",
  user: "ecis_smaruser",
  password: "W]u@,^=7DX^i",
  database: "ecis_smartex"
});
console.log("db connect")