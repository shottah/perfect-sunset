import React from "react";
import Title from "./component/Title";
import LocationForm from "./component/LocationForm";
import WeatherView from "./component/WeatherView";
import ErrorView from "./component/ErrorView";
import Clock from "./component/Clock";
import { wrapperFirebase } from './component/Firebase/context';
import * as secret from './secret';

const weather = {
	bad: require('./assets/media/sunset_bad.jpg'),
	okay: require('./assets/media/sunset_okay.jpg'),
	good: require('./assets/media/sunset_good.jpg'),
	great: require('./assets/media/sunset_great.jpg'),
	perfect: require('./assets/media/sunset_perfect.jpg')
}

class App extends React.Component {

	state = {
		dataView: undefined,
		sunsetView: undefined,
		sunsetTime: undefined,
		title: "Perfect Sunset",
		message: "This app allows you to check the weather conditions for the sunset today."
	}

    render() {
        return (
        	<div className="wrapper">
        		<div className="main">
	        		<div className="container bg-dark">
	        			<Clock/>
	        		</div>
        			<div className="container bg-primary text-white shadow"
        			style={this.state.sunsetView}>
        				<div className="row">
        					<div
        					className="col-6 title-container my-auto text-center">
        						<div className="mx-0">
        							<Title
        							title={this.state.sunsetTime}
        							/>
									<Title
					            	title={this.state.title}
					            	subtitle={this.state.message}/>
        						</div>
        					</div>
							<div className="col-6 py-2 form-container bg-light">
								<LocationForm
								getWeather={this.getWeather}
								/>
								{this.state.dataView}
							</div>
        				</div>
        			</div>
        		</div>
        	</div>
        );
    }

    parseData = (data) => {
    	var h = (data.main.humidity)/20
    	var w = Math.pow(((data.wind.speed)/0.837), 2/3)
    	var c = Math.abs((data.clouds.all-50)/10)
		var total = h + w + c

	    return [total, w];
   	}

	changeBackground = (data) => {

		var [result, wind] = this.parseData(data);

		this.setWeatherStates(result);

		return (result, wind)
    }

    setWeatherStates = (result) => {
    	var type = "", message = "";
			
		if (0 < result && result <= 3) {
			result = weather.perfect;
			type = "Perfect";
		}
		else if (3 < result && result <= 6) {
			result = weather.great;
			type = "Great";
		}
		else if (6 < result && result <= 9) {
			result = weather.good;
			type = "Good";
		}
		else if (9 < result && result <= 11) {
			result = weather.okay;
			type = "Okay";
		}
		else {
			result = weather.bad;
			type = "Bad";
		}

		this.setState({
			sunsetView: {
				backgroundImage:'url(' + result + ')',
				backgroundSize: 'cover'
			},
			title: type,
			message: message
		});
    }

    getWeather = async (evt) => {
    	evt.preventDefault();

    	const locale = evt.target.elements.locale.value;
    	const country = evt.target.elements.country.value;

		if (locale && country) {
			const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locale},${country}&appid=` + secret.API_KEY);
    		const data = await api_call.json();
			if (!data.message) {
				this.setState({
		    		dataView: <WeatherView
					locale= {data.name}
					country= {data.sys.country}
					windSpeed= {data.wind.speed}
					humidity= {data.main.humidity}
					/>
	    		});
				console.log(data)
	    		this.changeBackground(data);

	    		this.setState({
					sunsetTime: new Date(data.sys.sunset * 1000).toLocaleTimeString([], {hour12: true})
	    		})

			} else {
				this.setState({
					dataView: <ErrorView
					message={data.message}
					/>
				});
			}
		} else this.setState({
			dataView: undefined
		})


    }
};

export default wrapperFirebase(App);
