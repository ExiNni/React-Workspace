import React, { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Weather() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(false);

    const API_KEY = '4edac2eabf494946a189e86050976521';

    // 검색할 버튼 함수 생성
    const searchWeather = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://api.weatherbit.io/v2.0/current?city=${query}&key=${API_KEY}`);
            setWeather(response.data.data[0]);
        } catch (error) {
            console.error('에러 발생: ', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4">날씨</h1>
            <div className="mb-3">
                <input className="form-control" type="text"
                    placeholder="도시 입력"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} />
                <button className="btn btn-warning mt-2" onClick={searchWeather}>날씨 검색하기</button>
            </div>
            {loading && <p>검색중..</p>}
            {weather.city_name && (
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">{weather.city_name}</h2>
                        <p>온도: {weather.temp}</p>
                        <p>습도: {weather.rh}%</p>
                        <p>날씨: {weather.weather.description}</p>
                        <p>날씨: {weather.weather.icon && (
                            <img className="mb-3 img-fluid rounded mx-auto d-block" src={`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`} alt="weather Icon" />
                        )}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Weather;
