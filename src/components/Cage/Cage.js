import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Entry from '../../components/Entry/Entry';

import {chooseWinner, skip, createMatchup} from '../../redux/actions/cageActions';


const mapStateToProps = ({cage}) => {
  return {
    left: cage.left,
    right: cage.right,
    idMap: cage.idMap

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
    console.log(this.props);
    const { left, right, idMap } = this.props;

    return (
      <div>
        <Entry data={idMap[left]}/>
        <Entry data={idMap[right]}/>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cage);