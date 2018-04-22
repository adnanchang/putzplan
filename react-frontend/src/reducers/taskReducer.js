import { CREATE_TASK, GET_TASKS } from "../actions/taskActions";

const initialState = () => ({
  tasks: []
});

export default function taskReducerState(
  state = initialState(),
  { type, payload }
) {
  switch (type) {
    case CREATE_TASK: {
      console.log(payload);
      return {
        ...state,
        tasks: state.tasks.concat(payload)
      };
    }
    case GET_TASKS: {
      return {
        ...state,
        tasks: payload
      };
    }
    default: {
      return { ...state };
    }
  }
}
