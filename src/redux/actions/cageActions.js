export const createMatchup = () => {

  return (dispatch, getState) => {
    const state = getState();
    console.log(cage);
    // build matchup
    console.log('setting sides');
    const list = Object.keys(state.idMap);
    let rand1 = list[Math.floor(Math.random()*list.length)] || 'tt0100935';
    let rand2 = 'tt0119094';
    const payload = {
      left: state.idMap[rand1],
      right: state.idMap[rand2]
    };
    return {
      type: 'CREATE_MATCHUP',
      payload
    };

  }
};

export const chooseWinner = (matchupResult) => {
  return {
    type: 'CHOOSE_WINNER',
    matchupResult
  };
};

export const skip = () => {
  return (dispatch, getState) => {
    dispatch(createMatchup());
  };
};