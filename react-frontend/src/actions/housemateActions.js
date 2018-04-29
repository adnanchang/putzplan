export const GET_HOUSEMATES = "GET_HOUSEMATES";
export const CREATE_HOUSEMATE = "CREATE_HOUSEMATE";
export const EDIT_HOUSEMATE = "EDIT_HOUSEMATE";
export const UPDATE_HOUSEMATE = "UPDATE_HOUSEMATE";
export const DELETE_HOUSEMATE = "DELETE_HOUSEMATE";

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

export function editHousemate(id) {
    return {
        type: EDIT_HOUSEMATE,
        payload: id
    }
}

export function updateHousemate(formData) {
    console.log(formData);
    return dispatch => {
        return fetch("/housemate/update", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(housemate => dispatch({
            type: UPDATE_HOUSEMATE,
            payload: housemate
        }));
    }
}

export function deleteHousemate(formData) {
    console.log(formData);
    return dispatch => {
        return fetch("/housemate/delete/" + formData, {
            method: 'POST'
        })
        .then(res => res.ok)
        .then(housemate => dispatch({
            type: DELETE_HOUSEMATE,
            payload: formData
        }));
    }
}