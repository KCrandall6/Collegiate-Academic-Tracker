// dispatch and getState here for the tasks

// axios is a promise based HTTP client for the browser and node.js
import axios from 'axios';
import * as tasks from './actionTypes';


// adding a course; event.preventDefault() is called on the event when submitting, or adding a course, to prevent the browser from reloading or refreshing. Declare a variable course to represent the newly entered course name, and if entered, dispatch to ADD_COURSE with a payload of the new course name.
export const addCourse = event => (dispatch, getState) => {
  event.preventDefault();
  const course = getState().courses.newCourseName;
  if (course) {
    dispatch({
      type: tasks.ADD_COURSE,
      payload: course,
    });
  }
};

export const syncCourses = () => (dispatch, getState) => {
  axios.put('../server/')
}

export const loadCourses = () => (dispatch) => {
  axios.get('./URL')
  .then(({ data }) => {
    dispatch({
      type: tasks.LOAD_COURSES,
      payload: data,
    });
  })
  .catch(console.error);
};