export default (state = {}, action) => {

    switch (action.type) {
      case 'FETCH_VOTERINFO':
        return action.payload;
      default:
        return state;
    }
  };