import {useState} from "react";
import Title from './components/Title';
import Form from './components/Form';
import Results from "./components/Results";
import './App.css';

function App() {
    const [city, setCity] = useState<string>("");
    const getWeather = (e: any) => {
        e.preventDefault();
        fetch("http://api.weatherapi.com/v1/current.json?key=f7722ff8ed924c44903160153220805&q=London&aqi=no" )
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className="App">
            <Title />
            <Form setCity={setCity} getWeather={getWeather} />
            <Results />
        </div>
    );
}

export default App;
