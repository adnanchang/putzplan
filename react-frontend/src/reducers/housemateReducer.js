import { GET_HOUSEMATES, CREATE_HOUSEMATE } from "../actions/housemateActions";

const initialState = () => ({
  housemates: []
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
    default: {
      return { ...state };
    }
  }
}
