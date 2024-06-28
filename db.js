import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: "Sneha@2012",
  database:"smartex"
})