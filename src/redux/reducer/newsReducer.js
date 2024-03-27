// newsReducer.js
import { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE, SET_SEARCH_KEYWORD, SET_FILTER_OPTIONS } from '../actions/allActions';
const initialNewsState = {
    loading: false,
    news: [],
    error: '',
};

const newsReducer = (state = initialNewsState, action) => {
    switch (action.type) {
        case FETCH_NEWS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                news: action.payload,
                error: '',
            };
        case FETCH_NEWS_FAILURE:
            return {
                ...state,
                loading: false,
                news: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default newsReducer;