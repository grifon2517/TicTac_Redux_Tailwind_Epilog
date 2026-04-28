import { Component } from 'react';
import { Field, Info } from './components/main';
import PropTypes from 'prop-types';

export class AppLayout extends Component {
	render() {
		return (
			<div className="flex flex-col items-center w-80 my-12 mx-auto">
				<div className="mb-5 text-center text-3xl font-bold text-slate-800">
					<Info />
					<Field />
					<div className="mt-6 flex justify-center">
						<button
							className="cursor-pointer rounded-xl border-2 border-slate-700 bg-slate-800 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-slate-700 hover:shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-400"
							onClick={this.props.handleRestart}
						>
							Начать заново
						</button>
					</div>
				</div>
			</div>
		);
	}
}

AppLayout.propTypes = {
	handleRestart: PropTypes.func.isRequired,
};
