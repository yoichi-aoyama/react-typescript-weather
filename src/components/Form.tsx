import { useState } from 'react';

const Form = () => {
    const [city, setCity] = useState<string>("");
    const getWeather = (e: any) => {
        e.preventDefault();
        fetch("http://api.weatherapi.com/v1/current.json?key=f7722ff8ed924c44903160153220805&q=London&aqi=no" )
//            .then(res => console.log(res))
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <form>
            <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)} />
            <button type={"submit"} onClick={getWeather} >天気取得</button>
        </form>
    );
};

export default Form;
