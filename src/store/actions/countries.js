import Actions from "../constants";

export const fetchCountries = () => ({
  type: Actions.FETCH_COUNTRIES,
});

export const setCountries = (data) => ({
  type: Actions.SET_COUNTRIES,
  payload: data,
});

export const setCountryCode = (code) => ({
  type: Actions.SET_COUNTRY_CODE,
  countryCode: code.toLowerCase(),
});
