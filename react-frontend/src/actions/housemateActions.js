export const GET_HOUSEMATES = "GET_HOUSEMATES";
export const CREATE_HOUSEMATE = "CREATE_HOUSEMATE";

export function getHousemates() {
  return dispatch => {
    return fetch("/housemate")
      .then(res => res.json())
      .then(housemates =>
        dispatch({
          type: GET_HOUSEMATES,
          payload: housemates
        })
      );
  };
}

export function createHousemate(formData) {
    return dispatch => {
        return fetch("/housemate/create", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(housemates => dispatch({
            type: CREATE_HOUSEMATE,
            payload: housemates
        }));
    }
}