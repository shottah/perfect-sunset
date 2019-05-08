import React from "react";

class Title extends React.Component {
	render () {
		return (
			<div className="text-shadow">
				<h1>{this.props.title}</h1>
				<p>{this.props.subtitle}</p>
			</div>
		)
	}
}

export default Title;