import React, { useState, useEffect } from 'react';
import './Weather.css';

const API_KEY = 'da3338eba5bfe0177fb5cb76ddaa3717';
const NUM_DAYS = 5;
const CITIES = [
    { en: 'Sapporo', jp: '札幌' },
    { en: 'Sendai', jp: '仙台' },
    { en: 'Tokyo', jp: '東京' },
    { en: 'Nagano', jp: '長野' },
    { en: 'Nagoya', jp: '名古屋' },
    { en: 'Osaka', jp: '大阪' },
    { en: 'Hiroshima', jp: '広島' },
    { en: 'Fukuoka', jp: '福岡' },
    { en: 'Okinawa', jp: '沖縄' }
];

const Weather = () => {
    const [weatherData, setWeatherData] = useState({});
    const [refreshing, setRefreshing] = useState(false);
    // 森嵜が追加
    const [background, setBackgrounds] = useState('');

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const weatherPromises = CITIES.map(city => 
                    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city.en}&appid=${API_KEY}&units=metric`)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('天気データが利用できません');
                            }
                            return response.json();
                        })
                );

                const weatherResults = await Promise.all(weatherPromises);
                const weatherData = {};
                weatherResults.forEach((data, index) => {
                    weatherData[CITIES[index].en] = data;
                });
                setWeatherData(weatherData);
                setRefreshing(false);
            } catch (error) {
                console.error('天気データの取得中にエラーが発生しました:', error);
                setRefreshing(false);
            }
        };
        fetchWeatherData();
    }, [refreshing]);

    // 森嵜が追加
    useEffect(() => {
        if (weatherData) {
            const newBackgrounds = {};
            CITIES.forEach(city => {
                if (weatherData[city.en]) {
                    const weather = weatherData[city.en].list[0].weather[0].main;
                    let newBackground = '';
    
                    switch (weather) {
                        case 'Clear':
                            newBackground = 'clear.png';
                            break;
                        case 'Clouds':
                            newBackground = 'cloudy.jpg';
                            break;
                        case 'Rain':
                            newBackground = 'rainy.png';
                            break;
                        default:
                            newBackground = 'default.jpg';
                    }
    
                    newBackgrounds[city.en] = newBackground;
                }
            });
            setBackgrounds(newBackgrounds);
        }
    }, [weatherData]);
// ここまで    




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

    return (
        <div className="weather-page" style={{ backgroundImage: `url(${background})` }}>
             {/* 森嵜が追加style={{ backgroundImage: `url(${background})` }} */}
            <div className="weather_container">
                <button className="weather-button" onClick={() => setRefreshing(true)}>更新</button>
                {CITIES.map(city => (
                    <section key={city.en} className="weather-section active">
                        <p className="top-text">{city.jp}のお天気</p>
                        <div className="weather_content">
                            {weatherData[city.en] && (
                                <>
                                    <p>現在のお天気</p>
                                    <p>{weatherData[city.en].list[0].weather[0].description}</p>
                                    <img src={`http://openweathermap.org/img/wn/${weatherData[city.en].list[0].weather[0].icon}.png`} alt="weather icon" />
                                    <p>{city.jp}: {weatherData[city.en].list[0].main.temp}°</p>
                                    <date>{new Date().toLocaleDateString()}</date>
                                    <div className="weather_week">
                                        {getUniqueForecastData(weatherData[city.en]).slice(0, NUM_DAYS).map((forecast, index) => (
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
                ))}
            </div>
        </div>
    );
};

export default Weather;
