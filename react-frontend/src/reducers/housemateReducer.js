import {
  GET_HOUSEMATES,
  CREATE_HOUSEMATE,
  EDIT_HOUSEMATE,
  UPDATE_HOUSEMATE,
  DELETE_HOUSEMATE
} from "../actions/housemateActions";

const initialState = () => ({
  housemates: [],
  housemateToEdit: {},
  editing: false
});

export default function housemateReducerState(
  state = initialState(),
  { type, payload }
) {
  switch (type) {
    case GET_HOUSEMATES: {
      return { ...state, housemates: payload };
    }
    case CREATE_HOUSEMATE: {
      console.log(payload);
      return {
        ...state,
        housemates: state.housemates.concat(payload)
      };
    }
    case EDIT_HOUSEMATE: {
      const housemate = state.housemates.find(
        housemate => housemate.id === payload
      );
      console.log(housemate);
      return {
        ...state,
        housemateToEdit: housemate,
        editing: true
      };
    }
    case UPDATE_HOUSEMATE: {
      var index = state.housemates.findIndex(function(item, i){
        return item.id === payload.id
      });
      if (index != -1) {
        state.housemates.splice(index, 1);
      }
      return {
        ...state,
        housemates: state.housemates.concat(payload),
        editing: false
      };
    }
    case DELETE_HOUSEMATE: {
      var index = state.housemates.findIndex(function(item, i){
        return item.id === payload
      });
      state.housemates.splice(index, 1);
      const newHousemates = state.housemates.slice();
      
      return {
        ...state,
        housemates: newHousemates
      }
    }
    default: {
      return { ...state };
    }
  }
}
