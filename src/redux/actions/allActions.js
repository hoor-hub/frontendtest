// import * as actionTypes from "../types/alltypes"; 
// import { Get } from "../../helper/apiCalls"; 
// import { BASE_URL } from "../../helper/baseUrl";

// export const fetchNews = () => {
//   return (dispatch) => {
//     dispatch({ type: actionTypes.FETCH_NEWS_NEWSAPI_LOADING });
//     Get("", BASE_URL) // Pass an empty string as the endpoint and BASE_URL as the token
//       .then(function (response) {
//         if (response) {
//           dispatch({
//             type: actionTypes.FETCH_NEWS_NEWSAPI_SUCCESS,
//             payload: response,
//           });
//         } else {
//           dispatch({ type: actionTypes.FETCH_NEWS_NEWSAPI_FAILURE });
//         }
//       })
//       .catch(function (error) {
//         dispatch({
//           type: actionTypes.FETCH_NEWS_NEWSAPI_FAILURE,
//           payload: error.message,
//         });
//       });
//   };
// };
// redux/actions.js
import axios from 'axios';

export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

export const fetchNewsRequest = () => ({
  type: FETCH_NEWS_REQUEST,
});

export const fetchNewsSuccess = news => ({
  type: FETCH_NEWS_SUCCESS,
  payload: news,
});

export const fetchNewsFailure = error => ({
  type: FETCH_NEWS_FAILURE,
  payload: error,
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
