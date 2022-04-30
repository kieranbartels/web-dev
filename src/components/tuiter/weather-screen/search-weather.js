import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";

const SearchWeather = () => {
    const api = {
        key: "6dc3d3d65cc104af8ed46b35695c993b",
        base: "https://api.openweathermap.org/geo/1.0/"
    }

    const [weather, setWeather] = useState([])
    let params = useParams()
    const titleRef = useRef()
    const navigate = useNavigate()
    const location = useLocation()

    const searchWeatherByCity = async () => {
        const title = titleRef.current.value;
        const response = await axios.get(`${api.base}direct?q=${title}&limit=5&units=metric&APPID=${api.key}`)

        setWeather(response.data)
        navigate(`/tuiter/search/${titleRef.current.value}`)
    }
    useEffect(() => {
        if(params.searchString != null) {
            titleRef.current.value = params.searchString
            searchWeatherByCity()
        }
    }, [])
    return (
        <div>
            <h1>Search Weather</h1>

            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        onClick={searchWeatherByCity}
                        className="btn btn-primary float-end">
                        Search
                    </button>
                    <input ref={titleRef}
                           className="form-control w-75"/>
                </li>
                {weather &&
                    weather.map(w =>
                        <li className="list-group-item">
                            <Link to={`/tuiter/search/details/${w.name}/${w.state}`}>
                                {w.name}, {w.state}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default SearchWeather;