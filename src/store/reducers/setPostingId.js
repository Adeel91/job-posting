import Actions from "../constants";

export default function (currentState, action) {
  if (action.type !== Actions.SET_POSTING_ID) {
    return currentState;
  }

  return action.postingId;
}
