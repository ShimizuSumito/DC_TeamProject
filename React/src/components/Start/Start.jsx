import React from 'react';
import './Start.css'

const Start = () => {
    return (
        <div className='Start'>
            <section className='Logo'>
                <h1>Cloth Up!</h1>
                <h3>Hello!</h3>
                    <h3>ログイン</h3>
                    <input type="text" id="LoginID"/>
                    <input type="text" id="Password"/>
            </section>
            <section className='Whats'>
                <h2>「Cloth Up!」ってなに？</h2>
            <section className='frame'>
                <h3>[できること]</h3>
                <p>
                ①自分の服を登録
                <br/>
                ②登録した服からランダムコーディネート
                <br />
                ③決定したファッションの投稿
                <br />
                ④みんなの今日の服装チェック
                </p>
                <h3>どういう人向け</h3>
                <p>毎日の服装に悩んでしまう方</p>
                </section>
            </section>   
        </div>
    )
}
export default Start;