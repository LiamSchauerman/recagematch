import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import {chooseWinner, skip, createMatchup} from '../../redux/actions/cageActions';
//import {EPG, LiveDetails, VideoPlayer} from '../../components';


const mapStateToProps = ({cage}) => {
  return {
    left: cage.left,
    right: cage.right,

  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    chooseWinner,
    skip,
    createMatchup
  }, dispatch);
};


class Cage extends Component {
  static propTypes = {
    left: PropTypes.string,
    right: PropTypes.string,
  };

  render() {
    const { left, right } = this.props;

    return (
      <div>
        Left: {left} Right: {right}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cage);