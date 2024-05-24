import React from 'react';
import './Register.css';
export default function Register() {
    return (
       <div className="container">
         <section className='left'>
            <img src="" alt=""/>
            <p>Let's get you set up!</p>
            <p>❶Create your account</p>
         </section>
         <section className='right'>
            <form >
                <div className='row'>
                <label htmlFor="name" className='nes'>お名前(アカウント名)</label>
                <input type="text" id="name" name="name" placeholder='ふわっち' className='block' required/>
                </div>
                <div className='row'> 
                <label htmlFor="nickname" className='nes'>ニックネーム</label>
                <input type="text" id="nickname" name="nickname" className='block' required/>
                </div>
                <div className='row'> 
                <label htmlFor="mailaddress" className='nes'>メールアドレス(ログインID)</label>
                <input type="mail" id="mailaddress" name="mailaddress" className='block' required/>
                </div>
                <div className='row'>
                <label htmlFor="password" className='nes'>パスワード</label>
                <input type="password" id="password" name="password" className='block' required/>
                </div>
                <div className='row'>
                <label htmlFor="gender">性別</label>
                <div>
                    <input className='gender' type="radio" value="男性"/>男性
                    <input className='gender' type="radio" value="女性"/>女性
                    <input className='gender' type="radio" value="無回答"/>無回答
                    </div>
                </div>
                <div className='row'>
                    <label htmlFor="generation">年齢</label>
                    <select className='list'>
                        <option value="10代">10代</option>
                        <option value="20代">20代</option>
                        <option value="30代">30代</option>
                        <option value="40代">40代</option>
                        <option value="50代">50代</option>
                        <option value="60代">60代</option>
                        <option value="70代">70代</option>
                        <option value="80代">80代</option>
                        <option value="90代">90代</option>
                        <option value="100代">100代</option>
                    </select>
                </div>
                <div className='row region'>
                    <label htmlFor="region">地域</label>
                    <select className='list'>
                        <option value="北海道">北海道</option>
                        <option value="仙台">仙台</option>
                        <option value="東京">東京</option>
                        <option value="長野">長野</option>
                        <option value="名古屋">名古屋</option>
                        <option value="大阪">大阪</option>
                        <option value="広島">広島</option>
                        <option value="福岡">福岡</option>
                        <option value="沖縄">沖縄</option>
                    </select>
                </div>
                <button>確認場面へ</button>
            </form>
         </section>

       </div>
    )
}