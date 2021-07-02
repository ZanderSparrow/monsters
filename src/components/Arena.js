import React from 'react';
import { connect } from 'react-redux';

import { selectRandomMonster } from '../actions';
import Monster from './Monster';

class Arena extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.selectRandomMonster(this.props.monsters);
  }

  render() {
    return (
      <div>
        <h2>Arena</h2>
        <Monster monster={this.props.currentMonster} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    monsters: state.monsters,
    currentMonster: state.currentMonster
  };
}

export default connect(mapStateToProps, {selectRandomMonster})(Arena);