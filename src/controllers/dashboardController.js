const StudentPerformance = require("../models/studentPerformance");

//get counts
const getCounts = async (req, res) => {
  console.log("fetching Counts...");
  try {
    const totalCount = await StudentPerformance.fetchCount();
    const countByGender = await StudentPerformance.fetchCountByGender();
    const countByEthnicity = await StudentPerformance.fetchCountByEthnicity();
    const countByCourse =
      await StudentPerformance.fetchCountByPreperationCourse();

    // Constructing the response object
    const response = {
      totalCount: totalCount[0].count,
      countByGender: countByGender,
      countByEthnicity: countByEthnicity,
      countByCourse: countByCourse[0].count,
    };

    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({
      message: "Error retrieving counts",
      error: error.message,
    });
  }
};

//get average score for students
const getAverageScores = async (req, res) => {
  console.log("fetching average scores...");
  try {
    const avg = await StudentPerformance.getAverageScores();
    avg.avg_absolute =
      (avg.avg_math_score + avg.avg_reading_score + avg.avg_writing_score) / 3;
    res.status(200).send(avg);
  } catch (error) {
    res.status(500).send({
      message: "Error retrieving average score",
      error: error.message,
    });
  }
};

//performance
const getPerformance = async (req, res) => {
  console.log("fetching performance in respect to all aspects...");
  try {
    //performance by students gender
    const performanceByGender =
      await StudentPerformance.getPerformanceByGender();
    //performance by students lunch
    const performanceByLunch = await StudentPerformance.getPerformanceByLunch();
    //performance by students test preperation course
    const performanceByPreperationCourse =
      await StudentPerformance.getPerformanceByPreperationCourse();
    //performance by students ethnicity
    const performanceByEthnicity =
      await StudentPerformance.getPerformanceByRaceEthnicity();
    //performance by students parental education
    const performanceByParentalEducation =
      await StudentPerformance.getPerformanceByParentalEducation();

    const response = {
      performanceByGender: performanceByGender,
      performanceByLunch: performanceByLunch,
      performanceByPreperationCourse: performanceByPreperationCourse,
      performanceByEthnicity: performanceByEthnicity,
      performanceByParentalEducation: performanceByParentalEducation,
    };
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({
      message: "Error retrieving performance details",
      error: error.message,
    });
  }
};

module.exports = {
  getCounts,
  getAverageScores,
  getPerformance,
};
