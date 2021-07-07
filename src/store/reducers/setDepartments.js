import Actions from "../constants";

export default function (currentState, action) {
  if (action.type !== Actions.SET_DEPARTMENTS) {
    return currentState;
  }

  return action.payload;
}
