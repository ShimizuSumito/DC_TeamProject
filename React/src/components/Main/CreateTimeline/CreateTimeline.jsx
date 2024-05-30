import './CreateTimeline.css';
import {useNavigate } from 'react-router-dom';
import React,{useState, version} from 'react';
import axios from 'axios';
export default function CreateTimeline() {
    const navigate = useNavigate();
    const [imageData, setImageData] = useState(null);
    const [location, setLocation] = useState(null);
    const [situation, setSituation] = useState(null);
    const [comment, setComment] = useState(null);
    const toHome = () => {
        navigate("/Main");
    }
    const handlePhotoChange = (event) =>{
        const file = event.target.files[0];
        setImageData(file);
        console.log(imageData);
    };
    const toTimeline = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const sendData = new FormData();
        sendData.append('mailaddress', "email@gmail.com");
        sendData.append('text', formData.get('comment'));
        sendData.append('image', imageData);
        sendData.append('location', formData.get('location'));
        sendData.append('situation', formData.get('situation'));
        sendData.append('nickname', "name");
        
        formData.forEach((value, key) => {
            console.log(`${key}: ${value} form`);
        });

        sendData.forEach((value, key) => {
            console.log(`${key}: ${value} send`);
        });

        try {
            const response = await axios.post('http://localhost:8080/Timeline/Add', sendData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 200) {
                navigate("/Main");
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }

        navigate("/Main/Timeline");
    }
    return (
        <form onSubmit={toTimeline}>
        <div className="create-timeline">
        <h1>タイムライン作成画面</h1>
        <div className="create-timeline-container">
                <label>写真</label>
                <input type="file"  className='border-none' onChange={handlePhotoChange}/>
                <label> 場所</label>
                <select name="location" id="location" onChange={(event) => setLocation(event.target.result)}>
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
                <label>シチュエーション</label>
                <select name="situation" id="situatione" onChange={(event) => setSituation(event.target.result)}>
                    <option value="仕事"> 仕事</option>
                    <option value="デート">デート</option>
                    <option value="お出かけ">お出かけ</option>
                    <option value="飲み会">飲み会</option>
                    <option value="運動">運動</option>
                </select>
                <label>コメント</label>
                <textarea name="comment" id="comment" cols="30" rows="10" onChange={(event) => setComment(event.target.result)}></textarea>

        </div>   
            <div className="btn-container">
                <button onClick={toHome}>ホームに戻る</button>
                <button type='submit'>投稿する</button>
            </div>
    </div>
    </form>
    )
}