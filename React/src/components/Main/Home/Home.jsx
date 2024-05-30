import React, { useContext, useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiperのスタイルをインポート
import 'swiper/css';
import 'swiper/css/pagination';
// 必要なモジュールをインポート
import { Pagination } from 'swiper/modules';
import img from "../../../commons/img/notclothes.png";
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { motion } from "framer-motion";
import clear from '../../../commons/img/clear.png';
import cloud from '../../../commons/img/cloud.png';
import rainy from '../../../commons/img/rainy.png';

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
    const [weather, setWeather] = useState(null); // 天気データ用の状態変数

    useEffect(() => {
        const city = toRomaji(userinfo.region);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(res => res.json())
            .then(data => {
                setWeather(data);
            })
            .catch(err => {
                console.error(err);
                alert('天気情報の取得に失敗しました。');
            });
    }, []);

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
            return clear; // クリア天気の背景画像パスをここに設定
        } else if (description.includes('cloud')) {
            return cloud; // 曇り天気の背景画像パスをここに設定
        } else if (description.includes('rain')) {
            return rainy; // 雨天気の背景画像パスをここに設定
        } else {
            return null;
        }
    };

    const weatherBackground = weather ? getWeatherBackground(weather.weather[0].description) : null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
        >
            <div className="weather-info">
                {weather && (
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
                <SwiperSlide><img src={img} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img} alt="" /></SwiperSlide>
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
