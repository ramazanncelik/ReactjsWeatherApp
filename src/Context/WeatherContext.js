import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const WeatherContext = createContext();

export function WeatherProvider({ children }) {

    const [location, setLocation] = useState(localStorage.getItem('location') ? localStorage.getItem('location') : "İstanbul");
    const [weatherData, setWeatherData] = useState({});

    const values = {
        location, setLocation, weatherData
    }

    async function getWeather() {

        const response = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&key=f472e6f5ca2d4f6fbcb56e8c38f34fb7`)
        setWeatherData(response.data);
        console.log(response.data.data)

    }

    useEffect(() => {

        localStorage.setItem('location', location);
        getWeather();

    }, [location])

    return <WeatherContext.Provider value={values}>
        {children}
    </WeatherContext.Provider>;
}

export const useWeather = () => useContext(WeatherContext);

export default WeatherProvider;