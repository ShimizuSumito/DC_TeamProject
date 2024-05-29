import React, { useContext, useEffect, useState } from 'react';
import './Start.css';
import img from '../../commons/img/logo.png';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

const Start = () => {
    const [mailaddress, setMailaddress] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const { userinfo, setUserinfo } = useContext(UserContext);

    useEffect(() => {
    fetch('http://localhost:8080/User/Get')
    .then(res => res.json())
    .then(value => {
        setData(value);
        console.log(value);
        console.log(userinfo);
    })
    .catch(err => {
        console.error(err);
    });
    }, [setUserinfo]);

    const handleLogin = () => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].mailaddress === mailaddress && data[i].password === password) {
        navigate('/Main?name=' + data[i].name);
        setUserinfo(data[i]);
        console.log(userinfo);
        }
    }
    };

    const handleRegister = () => {
    navigate('/Register');
    };

    return (
    <div className='start-container'>
        <section className='start-left'>
        <div className='start-header'>
          <h1><span className='logospan'>C</span>loth <span className='logospan'>U</span>p!</h1>
          <img src={img} alt="Cloth Up logo" />
          <p>Hello!</p>
        </div>
        <section className='login-section'>
          <h2>ログイン</h2>
          <div className='login-form'>
            <form>
              <label>
                メールアドレス
                <input type="email" onChange={(e) => setMailaddress(e.target.value)} />
              </label>
              <label>
                パスワード
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
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
  );
};

export default Start;
