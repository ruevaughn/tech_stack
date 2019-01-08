// Action Creator is a JS function
// Actions tell reducers to update in a very specific way
export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};