export default function voterInfoReducer(
  state = {
    loading: false,
    address: '',
    voterInformation: []
  },
  action
) {
  switch (action.type) {
    case 'LOADING_VOTER_INFORMATION':
      return { ...state, address: action.address, loading: true };

    case 'FETCH_VOTER_INFORMATION':
      return { ...state, loading: false, voterInformation: action.data };

    default:
      return state;
  }
}
