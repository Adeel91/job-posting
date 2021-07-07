import Actions from "../constants";

export default function (currentState, action) {
  if (
    action.type !== Actions.CLEAR_POSTING_DETAILS &&
    action.type !== Actions.SET_POSTING_DETAILS
  ) {
    return currentState;
  }

  return action.payload;
}
