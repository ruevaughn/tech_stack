import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// Whatever key we specify is the key that will show up
// on the state object
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
