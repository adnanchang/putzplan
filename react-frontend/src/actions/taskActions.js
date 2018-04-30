export const CREATE_TASK = "CREATE_TASK";
export const GET_TASKS = "GET_TASKS";
export const EDIT_TASK = "EDIT_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const DELETE_TASK = "DELETE_TASK";

export function createTask(formData) {
    return dispatch => {
        return fetch("/task/create", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(task => dispatch({
            type: CREATE_TASK,
            payload: task
        }));
    }
}

export function getTasks() {
    return dispatch => {
        return fetch("/task")
          .then(res => res.json())
          .then(tasks =>
            dispatch({
              type: GET_TASKS,
              payload: tasks
            })
          );
      };
}

export function editTask(task){
    return {
        type: EDIT_TASK,
        payload: task
    }
}

export function updateTask(formData) {
    return dispatch => {
        return fetch("/task/update/", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(task => dispatch({
            type: UPDATE_TASK,
            payload: task
        }));
    }
}

export function deleteTask(formData) {
    return dispatch => {
        return fetch("/task/delete/" + formData, {
            method: 'POST'
        })
        .then(res => res.ok)
        .then(task => dispatch({
            type: DELETE_TASK,
            payload: formData
        }));
    }
}