import React from 'react';
import './Choose.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Choose() {
  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    color: '',
    location: '',
    situation: '',
    temprature: '',
  });

  const [selectedButtons, setSelectedButtons] = useState({
    color: '',
    location: '',
    situation: '',
    temprature: '',
  });

  const handleButtonClick = (category, value) => {

    setSelectedButtons({ ...selectedButtons, [category]: value });
  };
  const toHome=()=>{
    Navigate("/Main");
  }
  const handleSubmit = async () => {
    console.log('form Data:', formData);
    Navigate("/Main/Recommend");
    const dataToSend = {
      ...formData,
      ...selectedButtons
    };

    try {
      const response = await fetch('YOUR_ENDPOINT_URL', { // エンドポイントのURLを指定してください
        method: 'POST', // メソッドをPOSTに設定
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <motion.div className="Choose"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6,delay: 0.5}}
    >
      <h2>服を選ぶ！</h2>
      <div className="container">
        <div className="section">
          <label>シチュエーション</label>
          <div>
            {['仕事', 'デート', 'お出かけ', '飲み会', '運動'].map((situation) => (
              <button
                className={selectedButtons.situation === situation ? 'ColorButton active' : 'ColorButton'}
                type="button"
                key={situation}
                onClick={() => {
                  handleButtonClick('situation', situation);
                  setFormData({ ...formData, situation });
                }}
              >
                {situation}
              </button>
            ))}
          </div>
        </div>
        <div className="section">
          <label>カラー</label>
          <div>
            {['Yellow', 'Pink', 'Blue', 'Red', 'Orange', 'Green', 'Purple', 'Brown', 'Gray', 'White', 'Black'].map((color) => (
              <button
                className={selectedButtons.color === color ? 'ColorButton active' : 'ColorButton'}
                type="button"
                key={color}
                style={{ color: 'white', backgroundColor: color, textShadow: '0 0 5px black', fontWeight: '200px', border: selectedButtons.color === color ? '2px solid black' : 'none' }}
                onClick={() => {
                  handleButtonClick('color', color);
                  setFormData({ ...formData, color });
                }}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
        <div className="section">
          <label>行先</label>
          <div>
            {['札幌', '仙台', '東京', '名古屋', '大阪', '広島', '福岡', '沖縄'].map((location) => (
              <button
                className={selectedButtons.location === location ? 'ColorButton active' : 'ColorButton'}
                type="button"
                key={location}
                onClick={() => {
                  handleButtonClick('location', location);
                  setFormData({ ...formData, location });
                }}
              >
                {location}
              </button>
            ))}
          </div>
        </div>
        <div className="section">
          <label>気温</label>
          <div>
            {['0～10℃', '11～20℃', '21～30℃'].map((temprature) => (
              <button
                className={selectedButtons.temprature === temprature ? 'ColorButton active' : 'ColorButton'}
                type="button"
                key={temprature}
                onClick={() => {
                  handleButtonClick('temprature', temprature);
                  setFormData({ ...formData, temprature });
                }}
              >
                {temprature}
              </button>
            ))}
          </div>
        </div>
        <h3>この情報で検索します</h3>
        <div className='ChooseSubmit'>
          <button onClick={() => {
            setFormData({
            color: '',
            location: '',
            situation: '',
            temprature: ''
            });
            toHome()
           }}
           >戻る</button>
          <button onClick={handleSubmit} className='OrangeButton'>検索する</button>
        </div>
      </div>
    </motion.div>
  );
}
