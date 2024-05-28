import React from "react";
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import img from "../../../commons/img/notclothes.png";
import {Link} from 'react-router-dom';

export default function Main() {
    const navigate = useNavigate();
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


    return (
        <div>

            <div className="toMyclothes">
                        <Link to="/Main/MyCloth" style={{fontSize:'20px',fontWeight:'bolder' ,textDecoration: 'none',color:'black' }}>MyClothes</Link>
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
        </div>
    )
}
