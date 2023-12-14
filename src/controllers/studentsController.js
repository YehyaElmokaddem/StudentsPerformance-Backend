const StudentPerformance = require("../models/studentPerformance");

//get all students
const getAll = async (req, res) => {
  console.log("fetching all students...");
  try {
    const students = await StudentPerformance.fetchAll();
    res.status(200).send(students);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error retrieving students", error: error.message });
  }
};

module.exports = {
  getAll,
};
