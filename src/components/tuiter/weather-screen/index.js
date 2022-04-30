import React, {useEffect, useState} from 'react';
import "./index.css"
import {useParams} from "react-router-dom";

const WeatherScreen = () => {
    const api = {
        key: "6dc3d3d65cc104af8ed46b35695c993b",
        base: "https://api.openweathermap.org/data/2.5/"
    }

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    let params = useParams()

    const search = () => {
            fetch(`${api.base}weather?q=${params.city},${params.state}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                });
    }
    useEffect(() => {
        search()
    }, [])

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }
    return(
        <main>
            {(typeof weather.main != "undefined") ? (
                <div>
                    <div className="location-box">
                        <div className="location">{weather.name}, {params.state}, {weather.sys.country}</div>
                        <div className="location">{dateBuilder(new Date())}</div>
                    </div>
                    <div className="weather-box">
                        <div className="temp">
                            {Math.round(weather.main.temp)}°c
                        </div>
                        <div className="weather">{weather.weather[0].main}</div>
                    </div>
                </div>
            ) : ('')}
        </main>
    );
}

export default WeatherScreen;




