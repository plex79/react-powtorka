import React from 'react';

class Form extends React.Component {

    state = {
        city: '',
        country: '',
        buttonDisabled: true
    }

    sprawdzCity = (e)=> {
        const city = e.target.value;
        this.setState(() => {
            return (
                {
                    city: city
                }
            )
        });
    }

    sprawdzCountry = (e)=> {
        const country = e.target.value;
        this.setState(() => {
            return (
                {
                    country: country
                }
            )
        });
    }



    render() {
        return (
            
            <form onSubmit={this.props.getWeather}>

                <select name="city" id="">
                    <option value="Gdansk">Gdansk</option>
                    <option value="Czersk">Czersk</option>
                    <option value="Wroclaw">Wroclaw</option>
                </select>
                <select name="country" id="">
                    <option value="pl">pl</option>
                </select>

                <button>Pobierz pogodę</button>
            </form>
            
        );
    }


    // render() {
    //     const { city, country } = this.state;
    //     const isEnabled = city.length > 0 && country.length > 0;
    //     return (
            
    //         <form onSubmit={this.props.getWeather}>
    //             <input type="text" name="city" placeholder="city" value={this.state.city} onChange={this.sprawdzCity} />
    //             <input type="text" name="country" placeholder="country" value={this.state.country} onChange={this.sprawdzCountry} />
    //             <button disabled={!isEnabled}>Pobierz pogodę</button>
    //         </form>
            
    //     );
    // }

}



// const Form = (props) => {
//     return (
            
//             <form onSubmit={props.getWeather}>
//                 <input type="text" name="city" placeholder="city" />
//                 <input type="text" name="country" placeholder="country" />
//                 <button>Pobierz pogodę</button>
//             </form>
            
//         );
// }

export default Form;
