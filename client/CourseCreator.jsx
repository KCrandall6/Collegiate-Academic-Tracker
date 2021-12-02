// create new courses here



import React from "react";

const CourseCreator = ({
  newCourseName,
  updateCourse,
  addCourse,
  newCredits,
  newGPA,
}) => (
  <div>
    <form id="submit-form" onSubmit={addCourse}>
      <label>
        Course Name: 
        <input
          id="new-course"
          value={newCourseName}
          onChange={e => updateCourse(e.target.value)}/>
      </label>
      <label>
        Course Credits: 
        <input
          id="new-credits"
          value={newCredits}
          onChange={e => updateCourse(e.target.value)}/>
      </label>
      <label>
        GPA Earned: 
        <input
          id="new-GPA"
          value={newGPA}
          onChange={e => updateCourse(e.target.value)}/>
      </label>
      <button id="add-course" className="primary" type="submit">Add Course</button>
    </form>
  </div>
);

export default CourseCreator;