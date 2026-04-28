import { FieldLayout } from './FieldLayout';
import { connect } from 'react-redux';
import { STATUS, PLAYER } from '../Constants';
import { checkEmptyCell, checkWin } from '../utils';
import { setCurrentPlayer, setField, setStatus } from '../actions';
import { selectField, selectStatus, selectCurrentPlayer } from '../selectors';

import PropTypes from 'prop-types';
import { Component } from 'react';

export class FieldContainer extends Component {
	constructor(props) {
		super(props);

		this.onCellClick = this.onCellClick.bind(this);
	}

	onCellClick(index) {
		const { status, currentPlayer, field, dispatch } = this.props;
		if (
			status === STATUS.WIN ||
			status === STATUS.DRAW ||
			field[index] !== PLAYER.NOBODY
		) {
			return;
		}

		const newField = [...field];

		newField[index] = currentPlayer;

		dispatch(setField(newField));

		if (checkWin(newField, currentPlayer)) {
			dispatch(setStatus(STATUS.WIN));
		} else if (checkEmptyCell(newField)) {
			const newCurrentPlayer =
				currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS;
			dispatch(setCurrentPlayer(newCurrentPlayer));
		} else {
			dispatch(setStatus(STATUS.DRAW));
		}
	}
	render() {
		return <FieldLayout field={this.props.field} onCellClick={this.onCellClick} />;
	}
}

const mapStateToProps = (state) => ({
	status: selectStatus(state),
	currentPlayer: selectCurrentPlayer(state),
	field: selectField(state),
});

export const Field = connect(mapStateToProps)(FieldContainer);

FieldContainer.propTypes = {
	field: PropTypes.oneOf(Object.values(PLAYER)).isRequired,
	onCellClick: PropTypes.func.isRequired,
	status: PropTypes.oneOf(Object.values(STATUS)).isRequired,
	currentPlayer: PropTypes.oneOf(Object.values(PLAYER)).isRequired,
	dispatch: PropTypes.func.isRequired,
};
