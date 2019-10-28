import googleCivic from '../apis/googleCivic';

export const fetchVoterInfo = (formValues) => async dispatch => {
  const response = await googleCivic.get('/voterinfo', {
    params: {
      address: formValues,
      key: 'AIzaSyBXGif7H_Pk277CIEFQBDRPnvwTPQbw-tk'
    }
  });

  dispatch({ type: 'FETCH_VOTERINFO', payload: response.data });
};

