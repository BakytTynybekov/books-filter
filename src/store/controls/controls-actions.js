export const SET_SEARCH = "@@controls/SET_SEARCH";
export const SET_TYPE = "@@controls/SET_TYPE";
export const SET_SORT = "@@controls/SET_SORT";

export const setSearch = (search) => ({
  type: SET_SEARCH,
  payload: search,
});
export const setType = (type) => ({
  type: SET_TYPE,
  payload: type,
});

export const setSort = (type) => ({
  type: SET_SORT,
  payload: type,
});
