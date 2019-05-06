import React from 'react';

class Clock extends React.Component {

	state = {
		time: new Date().toLocaleTimeString()
	}

	render () {
		return (
			<div className="container">
				<h1>
					{this.state.time}
				</h1>
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
			time: new Date().toLocaleTimeString()
		})
	}
}

export default Clock;