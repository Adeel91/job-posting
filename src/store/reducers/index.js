import setDepartments from "./setDepartments";
import setDepartmentId from "./setDepartmentId";
import setPostings from "./setPostings";
import setPostingId from "./setPostingId";
import setPostingDetails from "./setPostingDetails";
import setCountries from "./setCountries";
import setCountryCode from "./setCountryCode";

export default function (currentState, action) {
  return {
    countries: setCountries(currentState ? currentState.countries : [], action),
    countryCode: setCountryCode(
      currentState ? currentState.countryCode : "",
      action
    ),
    departments: setDepartments(
      currentState ? currentState.departments : [],
      action
    ),
    departmentId: setDepartmentId(
      currentState ? currentState.departmentId : "",
      action
    ),
    postings: setPostings(currentState ? currentState.postings : [], action),
    postingId: setPostingId(
      currentState ? currentState.postingId : null,
      action
    ),
    postingDetails: setPostingDetails(
      currentState ? currentState.postingDetails : [],
      action
    ),
  };
}
