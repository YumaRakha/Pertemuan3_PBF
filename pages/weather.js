import { useState, useEffect } from "react";

const Weather = () => {
    const [weather, setWeather] = useState(null);
    
    useEffect(() => {
        const fetchWeather = async () => {
                const response = await fetch('/api/weather');
                const data = await response.json();
                setWeather(data);;
        };

        fetchWeather();
    }, []);

    return (
        <div>
            <h1>Cuaca di {weather?.city}</h1>
            <p>Suhu: {weather?.temperature}°C</p>
            <p>Kondisi: {weather?.description}</p>
        </div>
    );
};

export default Weather;
