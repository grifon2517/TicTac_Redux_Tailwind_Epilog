import { Component } from 'react';
import PropTypes from 'prop-types';

export class InfoLayout extends Component {
	render() {
		const { information } = this.props;

		return (
			<div className="mb-6 flex justify-center">
				<div className="inline-flex min-w-[220px] items-center justify-center rounded-xl border-2 border-slate-300 bg-slate-100 px-5 py-3 text-lg font-semibold text-slate-800 shadow-sm">
					{information}
				</div>
			</div>
		);
	}
}

InfoLayout.propTypes = {
	information: PropTypes.string,
};
