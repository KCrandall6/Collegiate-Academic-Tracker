// controller to get the courses and to add them

let db = require('./Models.js');

const coursesController = {};

coursesController.getCourses = (req, res, next) => {
  const courseQuery = 'SELECT * FROM courses';
  
  db.query(courseQuery)
    .then((data) => {
      res.locals.courses = data.rows;
      return next();
    })
    .catch((err) => {
      console.log('Error here: ', err);
      next(err);
    })
};


coursesController.addCourse = (req, res, next) => {
  const newData = req.body;
  console.log('newData', newData);
  const newQuery = `INSERT INTO courses (Course_Name, Course_Grade, Course_Credits) VALUES ('${newData.course_name}', ${newData.course_grade}, ${newData.course_credits})`;
  db.query(newQuery, (err, result) => {
    return next();
  });
};


module.exports = coursesController;