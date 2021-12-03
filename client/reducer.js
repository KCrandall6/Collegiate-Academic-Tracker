// Initial state and the actions you can take are outlined here

import { combineReducers } from 'redux';
import * as tasks from './actionTypes';

const initialState = {
  totalCourses: 0,
  totalCredits: 0,
  totalGPA: 0,
  overallGPA: 0,
  courseList: [],
  newCourseName: '',
  synced: true,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case tasks.ADD_COURSE:
      return {
        ...state,
        courseList: state.courseList.concat({
          course: action.payload[0],
          credits: action.payload[1],
          grade: action.payload[2],
        }),
        totalCourses: state.totalCourses + 1,
        // need to figure out how to change the two below
        totalCredits: state.totalCredits + action.payload[1],
        totalGPA: state.totalGPA + action.payload[2],
        overallGPA: state.totalGPA / state.totalCourses,

        newCourseName: '',
        synced: false,
      }

    case tasks.SYNC_COURSES:
      return {
        ...state,
        synced: true,
      };

    case tasks.LOAD_COURSES:
      return {
        ...state,
        totalCourses: action.payload.length,
        // not sure if the three below will work
        totalCredits: action.payload.reduce((res, c) => res + c.courses, 0),
        overallGPA: action.payload.reduce((res, gpa) => res + gpa.GPA, 0),
        courseList: action.payload,
      };
    default: return state;
  }
};

export default combineReducers({
  courses: courseReducer
});