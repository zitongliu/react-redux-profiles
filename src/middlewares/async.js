export default function({ dispatch }) {
  return next => action => {
    // if there is not a payload or the payload does not have a .then property. Just send it forward to next middleware
    // this means the action is not an async action
    if (!action.payload || !action.payload.then) {
      // next sends the action to the next middleware or reducer (if no other middleware)
      return next(action)
    }

    console.log('we dont have a promise', action);
  };
}
