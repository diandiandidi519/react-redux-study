const initialState = {
  value: 1
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add': {
      return {
        ...state,
        value: state.value + 1
      };
    }
    case 'minus': {
      return {
        ...state,
        value: state.value - 1
      };
    }
    default: {
      return state;
    }
  }
}

export const increment = () => {
  return {
    type: 'add'
  }
}
export const decrement = () => {
  return {
    type: 'minus'
  }
}
export const incrementByAmount = (value) => {
  return {
    type: 'minus',
    payload: value
  }
}

export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export const selectCount = (state) => state.counter.value;

// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export default reducer;