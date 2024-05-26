import React from 'react';
import './Start.css';
import img from "../../commons/img/girl.jpg";
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';

const Start = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/Main');
    }
    const handleRegister = () => {
        navigate('/Register');
    }
    return (
        <div className='start-container'>
            <section className='start-left'>
                <div className='start-header'>
                    <h1>Cloth Up!</h1>
                    <img src={img} alt="Cloth Up logo" />
                    <p>Hello!</p>
                </div>
                <section className='login-section'>
                    <h2>ログイン</h2>
                    <div className='login-form'>
                        <form>
                            <label>
                                メールアドレス
                                <input type="email" />
                            </label>
                            <label>
                                パスワード
                                <input type="password" />
                            </label>
                        </form>
                        <div className='login-buttons'>
                            <button className='register-btn' onClick={handleRegister}>新規登録</button>
                            <button className='login-btn' onClick={handleLogin}>ログイン</button>
                        </div>
                    </div>
                </section>
            </section>
            <section className='start-right'>
                <p>ClothUpってなに？</p>
                <section className='info-section'>
                    <p>①自分の服を登録</p>
                    <p>②登録した服からランダムコーディネート</p>
                    <p>③決定したファッションの投稿</p>
                    <p>④みんなの今日の服装チェック</p>
                </section>
            </section>
        </div>
    )
}

export default Start;
