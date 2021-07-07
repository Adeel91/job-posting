import { of } from "rxjs";
import { switchMap, map, catchError, debounceTime } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import ActionConstants from "../constants";
import { setCountries } from "../actions/countries";
import { errorMessage } from "../actions/error";
import { REST_COUNTRIES_HOST } from "./constants";

export const fetchCountriesEpic = (action$) =>
  action$.pipe(
    ofType(ActionConstants.FETCH_COUNTRIES),
    debounceTime(500),
    switchMap(() => ajax.getJSON(REST_COUNTRIES_HOST)),
    map((response) => {
      let countries = [];
      response.filter((item) => {
        countries.push({
          name: item.name,
          code: item.alpha2Code,
        });
      });

      return setCountries(countries);
    }),
    catchError((error) => of(errorMessage(error.message)))
  );
