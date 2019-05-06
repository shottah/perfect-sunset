import React from "react";
import Title from "./component/Title";
import LocationForm from "./component/LocationForm";
import WeatherView from "./component/WeatherView";
import ErrorView from "./component/ErrorView";
import Clock from "./component/Clock";
import * as secret from './secret';

const weather = {
	bad: require('./assets/media/sunset_bad.jpg'),
	okay: require('./assets/media/sunset_bad.jpg'),
	good: undefined,
	great: undefined
}

class App extends React.Component {

	state = {
		dataView: undefined,
		sunsetView: undefined,
	}

    render() {
        return (
        	<div className="wrapper my-3">
        		<div className="main">
        			<div className="container bg-primary text-white shadow-lg app-95"
        			style={this.state.sunsetView}>
        				<div className="row">
        					<div 
        					className="col-7 title-container my-auto text-center">
        						<Clock/>
								<Title
								className="mx-auto"
				            	title="Perfect Sunset" 
				            	subtitle="This app lets you know - 
								based on geographic conditions, 
								whether there will be a great 
								sunset today."/>
        					</div>
							<div className="col-5 form-contrainer bg-light app-95">
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

    	console.log(data)
    	// 58 -> 2.9
    	var h = (data.main.humidity)/20
    	// 4.3905
    	var w = Math.pow(((data.wind.speed)/0.837), 2/3)
    	console.log(data.wind.speed + " " + w)
    	// 70 + 30 / 2 = 50
    	// (40 - 50)/10 = -1
    	var c = Math.abs((data.clouds.all-50)/10)

    	// total = 7.8 - 1 = 6.8
		var total = h + w + c
    	if (0 < total < 3) {
    		//
	    } else if (3 < total < 6) {
	    	console.log("")
	    } else if (6 < total < 10) {
	    	console.log("")
	    } else if (10 < total) {

	    }

	    console.log(total)
   		
   	}

	changeBackground = (data) => {

		var result = this.parseData(data)
		result = weather.bad
		this.setState({
			sunsetView: {
				backgroundImage:'url(' + result + ')',
				backgroundSize: 'cover'
			}
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
	    		this.changeBackground(data);
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

export default App;