import Actions from "../constants";

export default function (currentState, action) {
  if (
    action.type !== Actions.CLEAR_POSTINGS &&
    action.type !== Actions.SET_POSTINGS
  ) {
    return currentState;
  }

  return action.payload;
}
