import React from 'react'
import "../App.css"
import { weekdays } from 'moment'

function WeatherInfo({weatherData}) {
  return (
    <div className='weather'>
                {weatherData.data.map((item, index) => {
                        return (
                            <div key={index} className='weatherDiv' style={{ float: 'left' }}>
                                <strong>{weekdays(new Date(item.datetime).getDay())}</strong>
                                <div>
                                    <img
                                        style={{
                                            width: 100,
                                            height: 100,
                                        }}
                                        src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
                                        alt="img"
                                        title={item.weather.description}
                                    />
                                </div>
                                <div>{`${Math.round(item.low_temp)}° - ${Math.round(item.high_temp)}°`}</div>
                            </div>
                        )
                    })}
            </div>
  )
}

export default WeatherInfo