// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

import axios from 'axios';

export const FETCH_STARWARSCHARS_START = 'FETCH_STARWARSCHARS_START';
export const FETCH_STARWARSCHARS_SUCCESS = 'FETCH_STARWARSCHARS_SUCCESS';
export const FETCH_STARWARSCHARS_FAIL = 'FETCH_STARWARSCHARS_FAIL';

export const getStarwarsChar = char => dispatch => {
    dispatch({ type: FETCH_STARWARSCHARS_START });
    axios
        .get('https://swapi.co/api/people')
        .then(res =>
            dispatch({ type: FETCH_STARWARSCHARS_SUCCESS, payload: res.data.results })    
        )
        .catch(err => dispatch({ type: FETCH_STARWARSCHARS_FAIL, payload: err }));
};