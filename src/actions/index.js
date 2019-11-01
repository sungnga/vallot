import googleCivic from '../apis/googleCivic';

export const fetchVoterInfo = address => async dispatch => {
  const response = await googleCivic.get('/voterinfo', {
    params: {
      address: address,
      key: 'AIzaSyBXGif7H_Pk277CIEFQBDRPnvwTPQbw-tk'
    }
  });
  // console.log(response.data)
  dispatch({ type: 'FETCH_VOTERINFO', payload: response.data });
};

export const selectVideo = item => {
  return {
    type: 'VIDEO_SELECTED',
    payload: item
  };
};
