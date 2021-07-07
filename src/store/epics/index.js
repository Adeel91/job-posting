import { combineEpics } from "redux-observable";
import { fetchCountriesEpic } from "./countries";
import { fetchDepartmentsEpic } from "./departments";
import { fetchPostingsEpic, fetchPostingDetailsEpic } from "./postings";

export default combineEpics(
  fetchCountriesEpic,
  fetchDepartmentsEpic,
  fetchPostingsEpic,
  fetchPostingDetailsEpic
);
