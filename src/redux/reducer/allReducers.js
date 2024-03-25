// import * as actionTypes from "../types/alltypes"; 


// const INTIAL_STATE = {
//     newsapiData: [],
//     isLoading: false,
// };

// const allReducers = (state = INTIAL_STATE, action) => {
//     const { payload } = action;
//     switch (action.type) {
//         case actionTypes.FETCH_NEWS_NEWSAPI_LOADING:
//             return {
//                 ...state,
//                 isLoading: true,
//             };

//         case actionTypes.FETCH_NEWS_NEWSAPI_SUCCESS:
//             return {
//                 ...state,
//                 newsapiData: payload,
//                 isLoading: false,
//             };
//         case actionTypes.FETCH_NEWS_NEWSAPI_FAILURE:
//             return {
//                 ...state,
//                 isLoading: false,
//             };

//         default:
//             return state;
//     }
// };

// export default allReducers;
// redux/reducers.js
import { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE } from '../actions/allActions';

const initialState = {
  loading: false,
  news: [],
  error: '',
};

const allReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_NEWS_SUCCESS:
      return {
        loading: false,
        news: action.payload,
        error: '',
      };
    case FETCH_NEWS_FAILURE:
      return {
        loading: false,
        news: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default allReducers;
