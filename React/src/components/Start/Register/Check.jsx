import React, { useState } from "react";
import { Value } from "sass";
import img from "../../../commons/img/girl.jpg";
import { useNavigate, useLocation } from "react-router-dom";
export default function Check() {
    const navigate = useNavigate();
    const location = useLocation();
    const [errorMessage, setErrorMessage] = useState('');
    const [newStock, setNewStock] = useState();
    
    const userData = location.state;
    // const formdata = new FormData(userData);

    const handleSubmit = async(event) => {
        event.preventDefault();
        // const newStock = {
        //     user: formdata.get(`name`),
        //     mailaddress: formdata.get(`mailaddress`),
        //     gender: formdata.get(`gender`),
        //     password: formdata.get(`password`),
        //     generation:formdata.get(`generation`),
        //     password: formdata.get(`password`),
        //     region: formdata.get(`region`)
        // };
        const newStock = {
            user: userData.name,
            mailaddress: userData.mailaddress,
            gender: userData.gender,
            password: userData.password,
            generation: userData.generation,
            region: userData.region
        };
        toDatabase(newStock);
    };

    const toDatabase = async (newStock) => {
        try {
            const response = await fetch('http://localhost:8080/User/Add', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(newStock),
            });

            console.log(location.state);
            
            if (response.ok) {
                navigate('/RegisterSuccess');
            } else if (response.status === 409) {
                const errorMessage = await response.text();
                alert(errorMessage);
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message);
            }
        }catch (error) {
            console.error('NEtwork error:', error);
        }
    };

    const toReturn = () => {
        navigate('/Register');
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
                <form className='register-form' onSubmit={handleSubmit}>
                    <label className='nes'>
                        お名前(アカウント名)
                        <p className="check-text">{userData.name}</p>
                    </label>
                    <label className='nes'>
                        メールアドレス(ログインID)
                        <p className="check-text">{userData.mailaddress}</p>
                    </label>
                    <label className='nes'>
                        パスワード
                        <p className="check-text">{userData.password}</p>
                    </label>
                    <label>性別
                    <p className="check-text">{userData.gender}</p>
                    </label>
                    <label>
                        年代
                        <p className="check-text">{userData.generation}</p>
                    </label>
                    <label>
                        地域<br />
                        <p className="check-text">{userData.region}</p>
                    </label>
                    <div className="form-area">
                    <button className='tocheck-button return-button' onClick={toReturn}>戻る</button>
                    <button className='tocheck-button' onClick={toDatabase} type="submit">完了</button>
                    </div>
                </form>
            </section>
        </div>
    );   
}