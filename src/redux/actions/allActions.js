import axios from 'axios';


export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';
export const SET_SEARCH_KEYWORD = 'SET_SEARCH_KEYWORD';
export const SET_FILTER_OPTIONS = 'SET_FILTER_OPTIONS';

export const fetchNewsRequest = () => ({
  type: FETCH_NEWS_REQUEST,
});

export const fetchNewsSuccess = (data) => ({
  type: FETCH_NEWS_SUCCESS,
  payload: data,
});

export const fetchNewsFailure = (error) => ({
  type: FETCH_NEWS_FAILURE,
  payload: error,
});

export const setSearchKeyword = (keyword) => ({
  type: SET_SEARCH_KEYWORD,
  keyword,
});

export const setFilterOptions = (options) => ({
  type: SET_FILTER_OPTIONS,
  payload: options,
});

export const fetchNews = () => {
  return dispatch => {
    dispatch(fetchNewsRequest());
    axios
      .get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'us',
          apiKey: 'ea38bd0efb1a4cd9a988b4797df58835',
        },
      })
      .then(response => {
        const news = response.data.articles.map(article => ({
          id: article.id,
          title: article.title,
          description: article.description,
          image: article.urlToImage,
        }));
        dispatch(fetchNewsSuccess(news));
      })
      .catch(error => {
        dispatch(fetchNewsFailure(error.message));
      });
  };
};