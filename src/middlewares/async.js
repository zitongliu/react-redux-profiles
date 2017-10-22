export default function({ dispatch }) {
  return next => action => {
    console.log(action);

    // next sends the action to the next middleware or reducer (if no other middleware)
    next(action);
  };
}
