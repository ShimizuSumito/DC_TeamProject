import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import '../../Start/Register/Register.css';
import './Mypage.css';
import { UserContext } from '../../../App';
import { motion } from 'framer-motion';

export default function Mypage() {
    const { userinfo, setUserinfo } = useContext(UserContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        nickname: '',
        mailaddress: userinfo.mailaddress,
        password: '',
        gender: userinfo.gender,
        generation: '',
        region: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const toDatabase = async (event) => {
        event.preventDefault();
        const newStock = { ...formData };

        try {
            console.log(JSON.stringify(newStock));
            const response = await fetch('http://localhost:8080/User/Update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newStock),
            });

            if (response.ok) {
                setUserinfo(newStock);
                navigate('/Main');
            } else {
                console.error('サーバーエラー:', response.statusText);
            }
        } catch (error) {
            console.error('ネットワークエラー:', error);
        }
    };

    return (
        <motion.div className='start-container register mypage'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6,delay: 0.5}}
        >
            <section className='start-right'>
                <form className='register-form' onSubmit={toDatabase}>
                    <label className='nes'>
                        お名前(アカウント名)
                        <input type="text" name="name" value={formData.name} placeholder={userinfo.name} onChange={handleChange} />
                    </label>
                    <label className='nes'>
                        ニックネーム
                        <input type="text" name="nickname" value={formData.nickname} placeholder={userinfo.nickname} onChange={handleChange} />
                    </label>
                    <label className='nes'>
                        パスワード
                        <input type="password" name="password" value={formData.password} placeholder={userinfo.password} onChange={handleChange} />
                    </label>
                    <label className='age'>
                        年代<br />
                        <select className='short-select' name="generation" value={formData.generation} onChange={handleChange}>
                            <option value={userinfo.generation}>{userinfo.generation}</option>
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
                        <select className='short-select' name="region" value={formData.region} onChange={handleChange}>
                            <option value={userinfo.region}>{userinfo.region}</option>
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
                    <button className='tocheck-button' type='submit'>確認場面へ</button>
                </form>
            </section>
        </motion.div>
    );
}
