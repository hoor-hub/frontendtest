// reducers/filterReducer.js

import { SET_SEARCH_KEYWORD, SET_FILTER_OPTIONS } from '../actions/allActions';

const initialState = {
    searchKeyword: '',
    filterOptions: {
        date: '',
        category: '',
        source: '',
    },
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_KEYWORD:
            return {
                ...state,
                searchKeyword: action.keyword,
            };
        case SET_FILTER_OPTIONS:
            return {
                ...state,
                filterOptions: {
                    ...state.filterOptions,
                    ...action.payload,
                },
            };
        default:
            return state;
    }
};

export default filterReducer;
