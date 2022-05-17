import {useState} from "react";
import Title from './components/Title';
import Form from './components/Form';
import Results from "./components/Results";
import './App.css';

type ResultsStateType = {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
}

function App() {
    const [city, setCity] = useState<string>("");
    const [results, setResults] = useState<ResultsStateType>({
        country: "",
        cityName: "",
        temperature: "",
        conditionText: "",
        icon: ""
    });
    const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch(`https://api.weatherapi.com/v1/current.json?key=f7722ff8ed924c44903160153220805&q=${city}&aqi=no`)
            .then(res => res.json())
            .then(data => {
                setResults({
                    country: data.location.country,
                    cityName: data.location.name,
                    temperature: data.current.temp_c,
                    conditionText: data.current.condition.text,
                    icon: data.current.condition.icon
                })
                setCity("");
            })
            .catch(err => alert("エラーが発生しました。ページをリロードしてください。"))
    }
    return (
        <div className="App">
            <Title/>
            <Form setCity={setCity} getWeather={getWeather} city={city}/>
            <Results results={results}/>
        </div>
    );
}

export default App;
