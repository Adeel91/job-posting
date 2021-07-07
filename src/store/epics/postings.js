import { of } from "rxjs";
import {
  switchMap,
  mergeMap,
  map,
  catchError,
  debounceTime,
} from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import ActionConstants from "../constants";
import { setPostings, setPostingDetails } from "../actions/postings";
import { errorMessage } from "../actions/error";
import {
  RECRUITERS_BASE_URL,
  RECRUITERS_BASE_URL_VERSION,
  RECRUITERS_COMPANIES,
} from "./constants";

export const fetchPostingsEpic = (action$, state$) =>
  action$.pipe(
    ofType(ActionConstants.FETCH_POSTINGS),
    debounceTime(500),
    switchMap(() => {
      return ajax.getJSON(
        `${RECRUITERS_BASE_URL}${RECRUITERS_BASE_URL_VERSION}${RECRUITERS_COMPANIES}/postings?department=${state$.value.departmentId}&country=${state$.value.countryCode}`
      );
    }),
    map((response) => setPostings(response)),
    catchError((error) => of(errorMessage(error.message)))
  );

export const fetchPostingDetailsEpic = (action$, state$) => {
  return action$.pipe(
    ofType(ActionConstants.FETCH_POSTING_DETAILS),
    mergeMap(() =>
      ajax.getJSON(
        `${RECRUITERS_BASE_URL}${RECRUITERS_BASE_URL_VERSION}${RECRUITERS_COMPANIES}/postings/${state$.value.postingId}`
      )
    ),
    map((response) => setPostingDetails(response)),
    catchError((error) => of(errorMessage(error.message)))
  );
};
