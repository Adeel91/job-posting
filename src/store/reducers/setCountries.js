import Actions from "../constants";

export default function (currentState, action) {
  if (action.type !== Actions.SET_COUNTRIES) {
    return currentState;
  }

  return action.payload;
}
