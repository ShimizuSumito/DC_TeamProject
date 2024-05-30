import React, { useContext, useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img from "../../../commons/img/notclothes.png";
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { motion } from "framer-motion";
import clear from '../../../commons/img/clear.png';
import cloud from '../../../commons/img/cloud.png';
import rainy from '../../../commons/img/rainy.png';
import axios from 'axios';
const API_KEY = 'da3338eba5bfe0177fb5cb76ddaa3717';
export default function Home() {
    const { userinfo } = useContext(UserContext);
    const toRomaji = (city) => {
        const cityMap = {
            '札幌': 'Sapporo',
            '仙台': 'Sendai',
            '東京': 'Tokyo',
            '長野': 'Nagano',
            '名古屋': 'Nagoya',
            '大阪': 'Osaka',
            '広島': 'Hiroshima',
            '福岡': 'Fukuoka',
            '沖縄': 'Okinawa',
        };
        return cityMap[city] || city;
    };
    const navigate = useNavigate();
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        const city = toRomaji(userinfo.region);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(res => res.json())
            .then(data => {
                console.log('Weather data:', data);
                setWeather(data);
            })
            .catch(err => {
                console.error(err);
                alert('天気情報の取得に失敗しました。');
            });
    }, [userinfo.region]);
    const toChoose = () => {
        navigate("/Main/Choose");
    }
    const toClothRegister = () => {
        navigate("/Main/ClothRegister");
    }
    const toMyPage = () => {
        navigate("/Main/Mypage");
    }
    const toMyCloth = () => {
        navigate("/Main/MyCloth");
    }
    const tocreateTimeline = () => {
        navigate("/Main/CreateTimeline");
    }
    const getWeatherBackground = (description) => {
        if (description.includes('clear')) {
            return clear;
        } else if (description.includes('cloud')) {
            return cloud;
        } else if (description.includes('rain')) {
            return rainy;
        } else {
            return null;
        }
    };
    const weatherBackground = weather?.weather?.[0]?.description ? getWeatherBackground(weather.weather[0].description) : null;
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        const fetchImageData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/Clothes/Get/${userinfo.mailaddress}`);
                console.log('Image data:', response.data);
                // `image_base`がBase64エンコードされた画像を含むと仮定
                const images = response.data
                    .filter(cloth => cloth.image_base !== null)
                    .sort((a, b) => b.id - a.id) // IDで降順にソートして最新の画像を取得
                    .slice(0, 10) // 最初の10枚の画像を取得
                    .map(cloth => cloth.image);
                setPhotos(images);
            } catch (error) {
                console.error('画像データの取得エラー:', error);
                setPhotos([]);
            }
        };
        fetchImageData();
    }, [userinfo.mailaddress]);
    console.log('Photos array:', photos);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
        >
            <div className="weather-info">
                {weather && weather.weather && weather.weather[0] && (
                    <div 
                        className="home-weather" 
                        style={{ backgroundImage: `url(${weatherBackground})` }}
                    >
                        <p>あなたの地域の天気</p>
                        <p>{userinfo.region}</p>
                        <p>{weather.weather[0].description}</p>
                        <p>気温: {weather.main.temp}°C</p>
                    </div>
                )}
            </div>
            <div className="toMyclothes">
                <Link to="/Main/MyCloth" style={{ fontSize: '20px', fontWeight: 'bolder', textDecoration: 'none', color: 'black' }}>MyClothを編集する</Link>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {photos.length > 0 ? (
                    photos.map((photo, index) => (
                        <SwiperSlide key={index}><img src={`data:image/jpeg;base64,${photo}`} alt="Cloth" /></SwiperSlide>
                    ))
                ) : (
                    <SwiperSlide><img src={img} alt="No clothes" /></SwiperSlide>
                )}
            </Swiper>
            <div className="home">
                <div className="home-container">
                    <button onClick={toChoose}>服を選ぶ</button>
                    <button onClick={toClothRegister}>服を登録する</button>
                    <button onClick={tocreateTimeline}>投稿する</button>
                </div>
            </div>
        </motion.div>
    );
}