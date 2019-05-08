import React from 'react';

class Clock extends React.Component {

	state = {
		time: new Date().toLocaleTimeString([], {hour12: true})
	}

	render () {
		return (
			<div className="container text-light">
				<p className="my-0">
					{this.state.time}
				</p>
			</div>
		);
	}

	componentDidMount = () => {
		this.intervalID = setInterval(
			() => this.tick(), 1000);
	}

	componentWillUnmount = () => {
		clearInterval(this.intervalID);
	}

	tick = () => {
		this.setState({
			time: new Date().toLocaleTimeString([], {hour12: true})
		})
	}
}

export default Clock;