
import React, { useState, useEffect } from 'react';
import './Weather.css';
const API_KEY = 'da3338eba5bfe0177fb5cb76ddaa3717';
const NUM_DAYS = 5;
const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [selectedCity, setSelectedCity] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                let apiUrl = '';
                if (selectedCity) {
                    apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=${API_KEY}&units=metric`;
                } else {
                    apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Tokyo&appid=${API_KEY}&units=metric`;
                }
                
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('天気データが利用できません');
                }
                const data = await response.json();
                setWeatherData(data);
                setRefreshing(false);
            } catch (error) {
                console.error('天気データの取得中にエラーが発生しました:', error);
                setRefreshing(false);
            }
        };
        fetchWeatherData();
    }, [selectedCity, refreshing]);
    const getUniqueForecastData = (data) => {
        if (!data) return [];
        const uniqueForecastData = [];
        const uniqueDates = new Set();
        data.list.forEach(forecast => {
            const date = new Date(forecast.dt * 1000).toLocaleDateString();
            if (!uniqueDates.has(date)) {
                uniqueDates.add(date);
                uniqueForecastData.push(forecast);
            }
        });
        return uniqueForecastData;
    };
    const handleSelectCity = (city) => {
        setSelectedCity(city);
        setRefreshing(true);
    };
    return (
        <div className="weather-page">
            <div className="weather_container">
                <button className="weather-button" onClick={() => setRefreshing(true)}>更新</button>
                <section className={`weather-section ${selectedCity !== '' ? 'active' : ''}`}>
                    <p className="top-text">お出かけ先のお天気</p>
                    <div className="weather_content">
                        {weatherData && selectedCity && (
                            <>
                                <p>{selectedCity}: {weatherData.list[0].main.temp}°</p>
                                <date>{new Date().toLocaleDateString()}</date>
                                <div className="weather_week">
                                    {getUniqueForecastData(weatherData).slice(0, NUM_DAYS).map((forecast, index) => (
                                        <div className="day" key={index}>
                                            <p>{new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</p>
                                            <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="weather icon" />
                                            <p>{forecast.main.temp}°</p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </section>
                <section className={`weather-section ${weatherData && selectedCity === '' ? 'active' : ''}`}>
                    <p className="top-text">あなたの地域のお天気</p>
                    <div className="weather_content">
                        {weatherData && selectedCity === '' && (
                            <>
                                <p>Tokyo: {weatherData.list[0].main.temp}°</p>
                                <date>{new Date().toLocaleDateString()}</date>
                                <div className="weather_week">
                                    {getUniqueForecastData(weatherData).slice(0, NUM_DAYS).map((forecast, index) => (
                                        <div className="day" key={index}>
                                            <p>{new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</p>
                                            <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="weather icon" />
                                            <p>{forecast.main.temp}°</p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </section>
            </div>
            <div className="city-buttons">
                <button onClick={() => handleSelectCity('Sapporo')}>札幌</button>
                <button onClick={() => handleSelectCity('Sendai')}>仙台</button>
                <button onClick={() => handleSelectCity('Tokyo')}>東京</button>
                <button onClick={() => handleSelectCity('Nagano')}>長野</button>
                <button onClick={() => handleSelectCity('Nagoya')}>名古屋</button>
                <button onClick={() => handleSelectCity('Osaka')}>大阪</button>
                <button onClick={() => handleSelectCity('Hiroshima')}>広島</button>
                <button onClick={() => handleSelectCity('Fukuoka')}>福岡</button>
                <button onClick={() => handleSelectCity('Okinawa')}>沖縄</button>
            </div>
        </div>
    );
};
export default Weather;