import PropTypes from 'prop-types';
import { Component } from 'react';
import { PLAYER_ICON, PLAYER } from '../Constants';

export class FieldLayout extends Component {
	render() {
		const { field, onCellClick } = this.props;

		return (
			<div className="mx-auto grid w-fit grid-cols-3 gap-2 rounded-2xl border-4 border-slate-400 bg-slate-200 p-3 shadow-md">
				{field.map((cell, index) => (
					<button
						key={index}
						type="button"
						onClick={() => onCellClick(index)}
						className="flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border-2 border-slate-500 bg-white text-4xl font-bold text-slate-800 shadow-sm transition hover:bg-slate-100 hover:shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-400"
					>
						{PLAYER_ICON[cell]}
					</button>
				))}
			</div>
		);
	}
}
FieldLayout.propTypes = {
	field: PropTypes.oneOf(Object.values(PLAYER)).isRequired,
	onCellClick: PropTypes.func.isRequired,
};
