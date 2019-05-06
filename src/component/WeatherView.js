import React from "react";

class WeatherView extends React.Component {
	render () {
		return (
		<div className="card card-inverse text-dark">
		  <ul className="list-group list-group-flush">
		    <li className="list-group-item bg-warning">Location: {this.props.locale}, {this.props.country}</li>
		    <li className="list-group-item bg-warning">Humidity: {this.props.humidity}</li>
		    <li className="list-group-item bg-warning">Wind Speed: {this.props.windSpeed}</li>
		  </ul>
		</div>
		);
	}
}

export default WeatherView;