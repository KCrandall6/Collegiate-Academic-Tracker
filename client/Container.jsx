import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions.js';
import CourseCreator from './CourseCreator.jsx';
import CoursesDisplay from "./CoursesDisplay.jsx";



const mapStateToProps = ({ 
  courses: { totalCourses, totalCredits, overallGPA, newCourseName, courseList, synced }
}) => ({
  totalCourses,
  totalCredits,
  overallGPA,
  newCourseName,
  courseList,
  synced,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators(actions, dispatch)
);



const ClassInfo = props => (
  <div className="container">
    <div className="outerbox">
      <h1 id="header">- Collegiate Academic Tracker -</h1>
      <hr/>
      <div id="stats-box">
      <h3 id="insideHeader">Academic Career Stats</h3>
        <p>Total Classes Taken: {`${props.totalCourses}`}</p>
        <p>Total Credits: {`${props.totalCredits}`}</p>
        <p>Overall GPA: {`${props.overallGPA}`}</p>
      </div>
      <div>
        <CourseCreator
        newCourseName={props.newCourseName}
        addCourse={props.addCourse}
        newCredits={props.newCredits}
        newGPA={props.newGPA}
        />
      </div>
      <hr/>
    </div>
    <div>
      <CoursesDisplay 
      courseList={props.courseList}
      />
    </div>
  </div>
);


export default connect(mapStateToProps, mapDispatchToProps)(ClassInfo);
// export default ClassInfo;