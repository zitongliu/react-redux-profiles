export default function({ dispatch }) {
  return next => action => {
    // if there is not a payload or the payload does not have a .then property. Just send it forward to next middleware
    // this means the action is not an async action
    if (!action.payload || !action.payload.then) {
      // next sends the action to the next middleware or reducer (if no other middleware)
      return next(action)
    }

    // Make sure the action's promise resolves
    action.payload
      .then(function(response) {
        // take whatever the action contains and extend over it payload of response
        // create a new action with the old type, but replace the promise with the response data
        const newAction = { ...action, payload: response };

        // take the new action and send it to the very top again and run this action through everything again
        dispatch(newAction);
      });
  };
}
