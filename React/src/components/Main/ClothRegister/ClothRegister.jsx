import React, { useState } from 'react';
import './ClothRegister.css';   
export default function ClothRegister() {
const [formData, setFormData] = useState({
    color: '',
    category: '',
    location: '',
    situation: '',
  });


return (
    <div className="ClothRegister">
      <h2>服を登録する</h2>
      <div className="container">
        <div className="section">
            <label>画像</label>
            <input type="file" name="image" className='border-none'/>
        </div>
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
          <label>カテゴリ</label>
          <div>
            {['アウター', 'トップス', 'パンツ', 'シューズ', 'アクセサリー'].map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setFormData({ ...formData, category })}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
            <label>気温</label>
            <select name="temperature">
            </select>
        </div>

        <h3>この情報で登録します</h3>
        <div className='ChooseSubmit'>
          <button onClick={() => setFormData({
            color: '',
            size: '',
            category: '',
            location: '',
            situation: ''
          })}>戻る</button>
          <button className='OrangeButton'>登録する</button>
        </div>
      </div>
    </div>
  );
}