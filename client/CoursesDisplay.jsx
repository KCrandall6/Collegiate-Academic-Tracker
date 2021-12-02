// model for diplaying all of the courses

import React from "react";
import Course from "./Course.jsx";


const courseGenerator = (course, idx, props) => (
  <Course
  {...course}
  key={idx}
  index={idx}
  />
);

const CoursesDisplay = props => (
  <div className="displayBox">
    <h4>Courses</h4>
    <div className="allCourses">
      {props.courseList.map((course, idx) => courseGenerator(course, idx, props))}
    </div>
  </div>
);

export default CoursesDisplay;