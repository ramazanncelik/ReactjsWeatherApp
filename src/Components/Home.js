import { useState } from 'react'
import { useWeather } from '../Context/WeatherContext'
import toast, { Toaster } from 'react-hot-toast';
import '../App.css'
import WeatherInfo from './WeatherInfo'
import { useLoading, BallTriangle } from '@agney/react-loading';

function Home() {

    const { location, setLocation, weatherData } = useWeather();
    const [locationName, setLocationName] = useState(location)

    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <BallTriangle width="50" />,
    });

    function getWeather(e) {
        if (e.key === "Enter") {
            if (locationName === "") {
                setLocationName("İstanbul")
                setLocation(locationName)
                toast.error('Lütfen Konumu boş bırakmayınız...', {
                    duration: 2000,
                    position:"top-left"
                });
            } else {
                setLocation(locationName)
                toast.success('Konum başarıyla değiştirildi.', {
                    duration: 2000,
                    position:"top-left"
                });
            }
        }
    }

    return (
        <div className='App'>

            <div>
                <label style={{marginRight:5}}>Enter our location:</label>
                <input
                    value={locationName}
                    onKeyDown={e => {getWeather(e)}}
                    onChange={(e) => setLocationName(e.target.value)}
                    placeholder='What is your location?' />
            </div>

            {weatherData.data &&
                <WeatherInfo weatherData={weatherData} /> ||
                <section style={{ marginTop: '15%' }} {...containerProps}>
                    {indicatorEl} {/* renders only while loading */}
                </section>}
            <Toaster />
        </div>
    )
}



export default Home
