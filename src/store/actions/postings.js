import Actions from "../constants";

export const fetchPostings = () => ({
  type: Actions.FETCH_POSTINGS,
});

export const setPostings = (data) => ({
  type: Actions.SET_POSTINGS,
  payload: data,
});

export const clearPostings = () => ({
  type: Actions.CLEAR_POSTINGS,
  payload: [],
});

export const setPostingId = (id) => ({
  type: Actions.SET_POSTING_ID,
  postingId: id,
});

export const fetchPostingDetails = () => ({
  type: Actions.FETCH_POSTING_DETAILS,
});

export const clearPostingDetails = () => ({
  type: Actions.CLEAR_POSTING_DETAILS,
  payload: [],
});

export const setPostingDetails = (data) => ({
  type: Actions.SET_POSTING_DETAILS,
  payload: data,
});
