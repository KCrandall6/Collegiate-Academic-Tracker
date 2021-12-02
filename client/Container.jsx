import React from "react";
import { connect } from 'react-redux';
import * as actions from './actions';
import CourseCreator from './CourseCreator.jsx';
import CoursesDisplay from "./CoursesDisplay.jsx";



const mapStateToProps = ({ 
  courses: { newCourseName, courseList, synced }
}) => ({
  newCourseName,
  courseList,
  synced,
});

const mapDispatchToProps = dispatch => ({
  syncCourses: () => dispatch(actions.syncCourses()),
});



const ClassInfo = props => (
  <div className="container">
    <div className="outerbox">
      <h1 id="header">- Collegiate Academic Tracker -</h1>
      <hr/>
      <div id="stats-box">
      <h3 id="insideHeader">Academic Career Stats</h3>
        {/* <p>Total Classes Taken: {`${totalCourses}`}</p> */}
        <p> Total Classes Taken: 5</p>
        {/* <p>Total Credits: {`${totalCredits}`}</p> */}
        <p>Total Credits: 4</p>
        {/* <p>Overall GPA: {`${overallGPA}`}</p> */}
        <p>Overall GPA: 4</p>
      </div>
      <div>
        <CourseCreator
        newCourseName={props.newCourseName}
        updateCourse={props.updateCourse}
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