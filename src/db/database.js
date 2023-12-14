const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Create a new database instance
let db = new sqlite3.Database(
  path.resolve(__dirname, "dashboard-db.db"),
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the SQLite database.");
  }
);

module.exports = db;
