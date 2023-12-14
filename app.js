const express = require("express");
const app = express();
// Importing routes
const Routes = require("./src/routes/routes");

// parsing application/json
app.use(express.json());

// Use routes
app.use("/api/v1", Routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
