import { combineReducers } from 'redux';
import newsReducer from './reducer/newsReducer';
import filterReducer from './reducer/filterReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  filter: filterReducer,
});

export default rootReducer;