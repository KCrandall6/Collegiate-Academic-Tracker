// create new courses here



import React from "react";
import { connect } from "react-redux";
import { addCourse } from "./actions";

const mapDispatchToProps = dispatch => ({
  createCourse: () => dispatch(addCourse()),
});


const CourseCreator = ({
  // newCourseName,
  // addCourse,
  // newCredits,
  // newGPA,
  props
}) => (
  <div>
    <form id="submit-form" onSubmit={addCourse}>
      <label>
        Course Name: 
        <input
          id="new-course"
          value={props.newCourseName}
          // onChange={e => addCourse(e.target.value)}
          />
      </label>
      <label>
        Course Credits: 
        <input
          id="new-credits"
          value={props.newCredits}
          // onChange={e => addCourse(e.target.value)}
          />
      </label>
      <label>
        GPA Earned: 
        <input
          id="new-grade"
          value={props.newGPA}
          // onChange={e => addCourse(e.target.value)}
          />
      </label>
      <button id="add-course" 
      className="primary" 
      type="submit"
      onClick={props.createCourse}
      >Add Course</button>
    </form>
  </div>
);

export default connect(null, mapDispatchToProps)(CourseCreator);