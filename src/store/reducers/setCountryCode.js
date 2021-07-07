import Actions from "../constants";

export default function (currentState, action) {
  if (action.type !== Actions.SET_COUNTRY_CODE) {
    return currentState;
  }

  return action.countryCode;
}
