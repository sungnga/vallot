const voterInfoReducer = (
  state = {
    loading: false,
    address: '',
    voterResult: []
  },
  action
) => {
  switch (action.type) {
    case 'LOADING_VOTERINFO':
      return { ...state, address: action.address, loading: true };

    case 'FETCH_VOTERINFO':
      return { ...state, loading: false, voterResult: action.payload };

    default:
      return state;
  }
};

export default voterInfoReducer;

// export default (state = {}, action) => {

//     switch (action.type) {
//       case 'FETCH_VOTERINFO':
//         return action.payload;
//       default:
//         return state;
//     }
//   };
