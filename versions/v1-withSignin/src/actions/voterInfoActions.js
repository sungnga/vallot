export function fetchVoterInformation(address) {
  return dispatch => {
    dispatch({ type: 'LOADING_VOTER_INFORMATION', address });
    return fetch(`http://vote2018.herokuapp.com/search/${address}`)
      .then(response => response.json())
      .then(function(data) {
        if (data) {
          dispatch({ type: 'FETCH_VOTER_INFORMATION', data });
        }
      });
  };
}
