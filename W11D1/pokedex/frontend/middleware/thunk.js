/*
It should check the typeof incoming actions and either 

  return action(dispatch) if they are functions, or 

  next(action) if they are not. 
   
Reference yesterdays solutions if you need more guidance.


*/

const thunk = ({dispatch, getState}) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  } 
  return next(action); // pass it along
}

export default thunk;

// Wrong. there's a signature pattern, and use ES6 for flattening/binding context more easily
// const thunk = (dispatch) => {
//   return (action) => {
//     if (action.type === 'function') {

//     } else {

//     }
//   }
// };
