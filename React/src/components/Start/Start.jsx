import React from 'react';
import './Start.css'
import img from "../../commons/img/girl.jpg";
import { BrowserRouter as Router, Routes, Route,Link,Navigate, useNavigate } from 'react-router-dom';

const Start = () => {
    const navigate = useNavigate();
    const tologin = () => {
        navigate('/Main');
    }
    const toRegister = () => {
        navigate('/Register');
    }
    return (
        <div className='Start'>
            <section className='left'>
                <div className='top'>
                    <h1>Cloth Up!</h1>
                    <img src={img} alt="" />
                    <p>Hello!</p>
                </div>
                <section className='Login'>
                    <h2>ログイン</h2>
                    <div className='login-content'>
                        <form action="">
                                <label>
                                    メールアドレス
                                    <input type="email" />
                                </label>
                                <label>
                                    パスワード
                                    <input type="password" />
                                </label>
                        </form>
                        <div className='button'>
                            <button className='login-button' onClick={tologin}>ログイン</button>
                            <button className='register' onClick={toRegister}>新規登録</button>
                        </div>
                    </div>
                </section>
            </section>
            <section className='right'>
                <p>ClothUpってなに？</p>
                <section className='right-content'>
                    <h3>できること</h3>
                    <p>①</p>
                    <p>②</p>
                    <p>③</p>
                    <p>④</p>
                    <h3>どういう人向け？</h3>
                    <p>①</p>
                    <p>②</p>
                    <p>③</p>
                    <p>④</p>
                </section>
            </section>
        </div>
    )
}
export default Start;