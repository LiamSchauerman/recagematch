export const createMatchup = () => {

  return (dispatch, getState) => {
    const state = getState();
    console.log(cage);
    // build matchup
    console.log('setting sides');
    let rand1 = 'tt0100935';
    let rand2 = 'tt0119094';
    const payload = {
      left: state.idMap[rand1],
      right: state.idMap[rand2]
    }
    return {
      type: 'CREATE_MATCHUP',
      payload
    };

  }
};

export const chooseWinner = (payload) => {
  return {
    type: 'CHOOSE_WINNER',
    payload
  };
};

export const skip = () => {
  return (dispatch, getState) => {
    dispatch(createMatchup());
  };
};