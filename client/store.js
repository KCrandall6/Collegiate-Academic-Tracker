// create redux store. Store holds the whole state tree of the application. Only way to change is to dispatch an action on it.


import { createStore, applyMiddleware } from 'redux';
// an extension that allows redux 
import { composeWithDevTools } from 'redux-devtools-extension';
// redux thunk is middleware for Redux. It allows writing functions with logic inside that can interact with a Redux store's dispatch and getState.
import thunk from 'redux-thunk';
// reducers referring to reducer function in reducer.js
import reducers from './reducer.js';
// import the loadCourses from actions.js
import { loadCourses } from './actions.js';


// thunk in this case is the middleware
const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk),
));

store.dispatch(loadCourses());

export default store;