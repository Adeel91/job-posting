import Actions from "../constants";

export default function (currentState, action) {
  if (action.type !== Actions.SET_DEPARTMENT_ID) {
    return currentState;
  }

  return action.departmentId;
}
