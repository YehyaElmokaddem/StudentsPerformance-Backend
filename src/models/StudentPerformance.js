const db = require("../db/database");

class StudentPerformance {
  constructor(
    id,
    gender,
    raceEthnicity,
    parentalEducation,
    lunch,
    testPrepCourse,
    mathScore,
    readingScore,
    writingScore
  ) {
    this.id = id;
    this.gender = gender;
    this.raceEthnicity = raceEthnicity;
    this.parentalEducation = parentalEducation;
    this.lunch = lunch;
    this.testPrepCourse = testPrepCourse;
    this.mathScore = mathScore;
    this.readingScore = readingScore;
    this.writingScore = writingScore;
  }

  // Static method to fetch all student performances
  static fetchAll() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM students_performance", [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // Static method to fetch count
  static fetchCount() {
    return new Promise((resolve, reject) => {
      db.all(
        "SELECT COUNT(*) AS count FROM students_performance",
        [],
        (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });
  }

  // Static method to fetch count Gender Distribution
  static fetchCountByGender() {
    return new Promise((resolve, reject) => {
      db.all(
        "SELECT gender, COUNT(*) AS count FROM students_performance GROUP BY gender",
        [],
        (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });
  }

  // Static method to fetch count Ethnicity Distribution
  static fetchCountByEthnicity() {
    return new Promise((resolve, reject) => {
      db.all(
        "SELECT race_ethnicity, COUNT(*) AS count FROM students_performance GROUP BY race_ethnicity",
        [],
        (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });
  }

  // Static method to fetch count for students with completed test preperation course
  static fetchCountByPreperationCourse() {
    return new Promise((resolve, reject) => {
      db.all(
        "SELECT test_preparation_course, COUNT(*) AS count FROM students_performance WHERE test_preparation_course= 'completed'",
        [],
        (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });
  }

  // Static method to fetch average scores
  static getAverageScores() {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT
          AVG(math_score) AS avg_math_score,
          AVG(reading_score) AS avg_reading_score,
          AVG(writing_score) AS avg_writing_score
        FROM students_performance
      `;

      db.get(query, [], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  // Static method to fetch performance by gender
  static getPerformanceByGender() {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT
          gender,
          AVG(math_score) AS avg_math_score,
          AVG(reading_score) AS avg_reading_score,
          AVG(writing_score) AS avg_writing_score
        FROM students_performance
        GROUP BY gender
      `;

      db.all(query, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // Static method to fetch performance by lunch
  static getPerformanceByLunch() {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT
          lunch,
          AVG(math_score) AS avg_math_score,
          AVG(reading_score) AS avg_reading_score,
          AVG(writing_score) AS avg_writing_score
        FROM students_performance
        GROUP BY lunch
      `;

      db.all(query, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // Static method to fetch performance by test preperation course
  static getPerformanceByPreperationCourse() {
    return new Promise((resolve, reject) => {
      const query = `
      SELECT
      test_preparation_course,
      AVG(math_score) AS avg_math_score,
      AVG(reading_score) AS avg_reading_score,
      AVG(writing_score) AS avg_writing_score
    FROM students_performance
    GROUP BY test_preparation_course
      `;

      db.all(query, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // Static method to fetch performance by race ethnicity
  static getPerformanceByRaceEthnicity() {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT
          race_ethnicity,
          AVG(math_score) AS avg_math_score,
          AVG(reading_score) AS avg_reading_score,
          AVG(writing_score) AS avg_writing_score
        FROM students_performance
        GROUP BY race_ethnicity
      `;

      db.all(query, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // Static method to fetch performance by parental education
  static getPerformanceByParentalEducation() {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT
          parental_level_of_education,
          AVG(math_score) AS avg_math_score,
          AVG(reading_score) AS avg_reading_score,
          AVG(writing_score) AS avg_writing_score
        FROM students_performance
        GROUP BY parental_level_of_education
      `;

      db.all(query, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  static getPerformanceByTestPreparation() {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT
          test_preparation_course,
          AVG(math_score) AS avg_math_score,
          AVG(reading_score) AS avg_reading_score,
          AVG(writing_score) AS avg_writing_score
        FROM students_performance
        GROUP BY test_preparation_course
      `;

      db.all(query, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}

module.exports = StudentPerformance;
