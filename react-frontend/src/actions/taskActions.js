export const CREATE_TASK = "CREATE_TASK";
export const GET_TASKS = "GET_TASKS";

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