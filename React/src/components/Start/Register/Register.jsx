import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import img from "../../../commons/img/girl.jpg";
export default function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [mailaddress, setMailaddress] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [generation, setGeneration] = useState('');
    const [region, setRegion] = useState('');
    // const [userData, setUserData] = useState();

    const toCheck = () => {
        const userData = {
            name, 
            mailaddress, 
            password, 
            gender, 
            generation, 
            region
        }
        navigate('/Check', {
            state: userData
        });
    }
    return (
        <div className='start-container register'>
            <section className='start-left'>
                <div className='start-header'>
                    <img src={img} alt="Cloth Up logo" />
                    <p>Let's get you set up!</p>
                </div>
            </section>
            <section className='start-right'>
                <form className='register-form'>
                    <label className='nes'>
                        お名前(アカウント名)
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <label className='nes'>
                        メールアドレス(ログインID)
                        <input type="email" value={mailaddress} onChange={(e) => setMailaddress(e.target.value)}/>
                    </label>
                    <label className='nes'>
                        パスワード
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                    <label>性別</label>
                    <div class="radio-group">
                        <label>
                            <input type="radio" name="option" value="男性" checked={gender === "男性"} onChange={(e) => setGender("男性")}/>
                            男性
                        </label>
                        <label>
                            <input type="radio" name="option" value="女性" checked={gender === "女性"} onChange={(e) => setGender("女性")}/>
                            女性
                        </label>
                        <label>
                            <input type="radio" name="option" value="その他" checked={gender === "その他"} onChange={(e) => setGender("その他")}/>
                            その他
                        </label>
                    </div>
                    <label className='select'>
                        年代<br />   
                        <select className='short-select' value={generation} onChange={(e) => setGeneration(e.target.value)}>
                            <option value="10代">10代</option>
                            <option value="20代">20代</option>
                            <option value="30代">30代</option>
                            <option value="40代">40代</option>
                            <option value="50代">50代</option>
                            <option value="60代">60代</option>
                            <option value="70代">70代</option>
                            <option value="80代">80代</option>
                            <option value="90代">90代</option>
                        </select>
                    </label>
                    <label>
                        地域<br />
                        <select className='short-select' value={region} onChange={(e) => setRegion(e.target.value)}>
                            <option value="札幌">札幌</option>
                            <option value="仙台">仙台</option>
                            <option value="東京">東京</option>
                            <option value="長野">長野</option>
                            <option value="名古屋">名古屋</option>
                            <option value="大阪">大阪</option>
                            <option value="広島">広島</option>
                            <option value="福岡">福岡</option>
                            <option value="沖縄">沖縄</option>
                        </select>
                    </label>
                    <button className='tocheck-button' onClick={toCheck}>確認場面へ</button>
                </form>
            </section>
        </div>
    )
}