import axios from 'axios';
export const GET_BREEDS = "GET_BREEDS";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";

export function getBreeds() {
    return async function (dispatch) {
        return await axios.get('http://localhost:3002/dogs')
                .then(response => {
                    dispatch({
                        type: GET_BREEDS,
                        payload: response.data
                    })
                })
    }
}

export function getTemperaments() {
    return async function (dispatch) {
        return await axios.get('http://localhost:3002/temperaments')
               .then(response => {
                   dispatch({
                       type: GET_TEMPERAMENTS,
                       payload: response.data
                   })
               })
    }
}

