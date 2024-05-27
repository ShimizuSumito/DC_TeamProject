import React from 'react';
import './Choose.css';
import { useState } from 'react';
export default function Choose() {


const [formData, setFormData] = useState({
    color: '',
    category: '',
    location: '',
    situation: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Selected Data:', formData);
    // Here you can handle the form data as needed, e.g., send it to a server or update the UI
  };

    
return (
    <div className="Choose">
      <h2>服を選ぶ！</h2>
      <div className="container">
        <div className="section">
          <label>シチュエーション</label>
          <div>
            {['仕事', 'デート', 'お出かけ', '飲み会', '運動'].map((location) => (
              <button
                className='ColorButton'
                type="button"
                key={location}
                onClick={() => setFormData({ ...formData, location })}
              >
                {location}
              </button>
            ))}
          </div>
        </div>
        <div className="section">
          <label>カラー</label>
          <div>
            {['Yellow', 'Pink', 'Blue', 'Red','Orange','Green','Purple','Brown','Gray','White','Black'].map((color) => (
              <button
                type="button"
                key={color}
                onClick={() => setFormData({ ...formData, color })}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
        <div className="section">
          <label>場所</label>
          <div>
            {['札幌', '仙台', '東京', '名古屋', '大阪', '広島', '福岡', '沖縄'].map((location) => (
              <button
                type="button"
                key={location}
                onClick={() => setFormData({ ...formData, location })}
              >
                {location}
              </button>
            ))}
          </div>
        </div>
        <h3>この情報で検索します</h3>
        <div className='ChooseSubmit'>
          <button onClick={() => setFormData({
            color: '',
            size: '',
            category: '',
            location: '',
            situation: ''
          })}>戻る</button>
          <button onClick={handleSubmit} className='OrangeButton'>検索する</button>
        </div>
      </div>
    </div>
  );
}