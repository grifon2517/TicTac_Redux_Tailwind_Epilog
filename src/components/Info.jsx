import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { PLAYER_ACTION } from '../Constants/player-action';
import { PLAYER_NAME } from '../Constants/player-name';
import { STATUS } from '../Constants/status';
import { PLAYER } from '../Constants/player';

import { selectStatus, selectCurrentPlayer } from '../selectors';
import { InfoLayout } from './infoLayout';

export class InfoContainer extends Component {
	render() {
		const { status, currentPlayer } = this.props;

		const playerAction = PLAYER_ACTION[status];
		const playerName = PLAYER_NAME[currentPlayer];

		const information =
			status === STATUS.DRAW ? 'Ничья' : `${playerAction}: ${playerName}`;

		return <InfoLayout information={information} />;
	}
}

const mapStateToProps = (state) => ({
	status: selectStatus(state),
	currentPlayer: selectCurrentPlayer(state),
});

export const Info = connect(mapStateToProps)(InfoContainer);

InfoContainer.propTypes = {
	status: PropTypes.oneOf(Object.values(STATUS)).isRequired,
	currentPlayer: PropTypes.oneOf(Object.values(PLAYER)).isRequired,
};
