import Actions from "../constants";

export const fetchDepartments = () => ({
  type: Actions.FETCH_DEPARTMENTS,
});

export const setDepartments = (data) => ({
  type: Actions.SET_DEPARTMENTS,
  payload: data,
});

export const setDepartmentId = (id) => ({
  type: Actions.SET_DEPARTMENT_ID,
  departmentId: id,
});
