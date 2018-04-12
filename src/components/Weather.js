import React from 'react';
import Form from './Form';

const API_KEY = "7ca0252aff5a6b4f4860a87670443633";

class Weather extends React.Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        error: undefined
    }

    // dla react < v16
    // constructor() {
    //     this.getWeather = this.getWeather.bind(this);
    // }


    // metoda dla wersji >16 reacta
    getWeather = async (e)=> {
        e.preventDefault();
        const city = e.target.city.value;
        const country = e.target.country.value;

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

        const data = await api_call.json();

        if(city && country) {
            this.setState(() =>{
                return {
                    temperature: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    error: ""
                }
            })
    
            console.log(data)
        } else {
            this.setState(() =>{
                return {
                    temperature: undefined,
                    city: undefined,
                    country: undefined,
                    error: 'Wprowadź jakieś dane'
                }
            })
        }
        
    }

    render() {
        return (
            <div>
                <p>pogoda</p>
                <Form getWeather={this.getWeather} />
                <p>{this.state.city}</p>
                <p>{this.state.country}</p>
                <p>{this.state.temperature}</p>
                <p>{this.state.error}</p>

            </div>
        )
    }
}

export default Weather;