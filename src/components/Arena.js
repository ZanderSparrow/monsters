import React from 'react';
import { connect } from 'react-redux';

import { selectMonster } from '../actions';
import Monster from './Monster';
import Player from './Player';

class Arena extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { monsters } = this.props; 
    
    this.props.selectMonster(monsters[Math.floor(Math.random()*monsters.length)]);

    }
    

  render() {
    return (
      <div>
        <h2>Arena</h2>
        <Monster monster={this.props.currentMonster} />
        <Player player={this.props.player} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    monsters: state.monsters,
    currentMonster: state.currentMonster,
    player: state.player
  };
}

export default connect(mapStateToProps, {selectMonster})(Arena);