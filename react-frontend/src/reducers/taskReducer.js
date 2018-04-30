import { CREATE_TASK, GET_TASKS, EDIT_TASK, UPDATE_TASK, DELETE_TASK } from "../actions/taskActions";

const initialState = () => ({
  tasks: [],
  taskToEdit: {},
  editing: false
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
    case EDIT_TASK: {
      const task = state.tasks.find(
        task => task.id === payload
      );
      return {
        ...state,
        taskToEdit: task,
        editing: true
      }
    }
    case UPDATE_TASK: {
      var index = state.tasks.findIndex(function(item, i){
        return item.id === payload.id
      });
      if (index != -1) {
        state.tasks.splice(index, 1);
      }
      return {
        ...state,
        tasks: state.tasks.concat(payload),
        editing: false
      }
    }
    case DELETE_TASK: {
      var index = state.tasks.findIndex(function(item, i){
        return item.id === payload
      });
      state.tasks.splice(index, 1);
      const newTasks = state.tasks.slice();
      
      return {
        ...state,
        tasks: newTasks
      }
    }
    default: {
      return { ...state };
    }
  }
}
