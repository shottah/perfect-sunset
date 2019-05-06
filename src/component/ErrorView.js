import React from 'react';

class ErrorView extends React.Component {
	render () {
		return (
			<p className="alert alert-danger">
				{this.props.message}
			</p>
		);
	}
}

export default ErrorView;