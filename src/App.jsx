import { Component } from 'react';
import PropTypes from 'prop-types';
import { AppLayout } from './appLayout';
import { RESTART_GAME } from './actions';
import { connect } from 'react-redux';

export class GameContainer extends Component { 
	render()  {
	

	// eslint-disable-next-line react/prop-types
	return <AppLayout handleRestart={this.props.handleRestart} />;
}
}

const mapDispatchToProps = (dispatch) => ({
	handleRestart: () => dispatch(RESTART_GAME)
})

export const App = connect(null, mapDispatchToProps)(GameContainer)

GameContainer.PropTypes = {
	handleRestart: PropTypes.func.isRequired
}