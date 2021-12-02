// model for additional courses


import React from "react";


const Course = ({
  courseName,
  courseGrade,
  courseCredits,
}) => (
  <div id='course-entry-box' className='courseEntry'>
    <p label="Course Name" tex={courseName}></p>
    <p label="Course Grade" tex={courseGrade}></p>
    <p label="Course Credits" tex={courseCredits}></p>
  </div>
);


export default Course;