import { of } from "rxjs";
import { switchMap, map, catchError, debounceTime } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import ActionConstants from "../constants";
import { setDepartments } from "../actions/departments";
import { errorMessage } from "../actions/error";
import {
  RECRUITERS_BASE_URL,
  RECRUITERS_BASE_URL_VERSION,
  RECRUITERS_COMPANIES,
} from "./constants";

export const fetchDepartmentsEpic = (action$) =>
  action$.pipe(
    ofType(ActionConstants.FETCH_DEPARTMENTS),
    debounceTime(500),
    switchMap(() =>
      ajax.getJSON(
        `${RECRUITERS_BASE_URL}${RECRUITERS_BASE_URL_VERSION}${RECRUITERS_COMPANIES}/departments`
      )
    ),
    map((response) => setDepartments(response)),
    catchError((error) => of(errorMessage(error.message)))
  );
