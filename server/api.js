

const express = require('express');
const router = express.Router();
const path = require('path');

const coursesController = require('./courseController.js');

router.get('/', 
  // coursesController.getCourses,
  (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../dist/index.html'));
});

router.get('/courses',
  coursesController.getCourses,
  (req, res) => res.status(200).json(res.locals.courses)
);

router.post('/addCourse',
  coursesController.addCourse,
  (req, res) => res.status(200).json({})
);


module.exports = router;