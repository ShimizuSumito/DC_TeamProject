import React, { useState } from 'react'; // ReactとuseStateフックをインポート
import { useNavigate } from 'react-router-dom'; // useNavigateフックをインポートしてページ遷移を管理
import './ClothRegister.css'; // CSSファイルをインポート

export default function ClothRegister() {
  const navigate = useNavigate(); // navigate関数を取得してページ遷移を管理

  const [formData, setFormData] = useState({ // フォームデータの状態を管理
    color: '',
    location: '',
    situation: '',
    temprature: '',
  });

  const [selectedButtons, setSelectedButtons] = useState({ // ボタンの選択状態を管理
    color: '',
    location: '',
    situation: '',
    temprature: '',
  });

  const [photo, setPhoto] = useState(null); // 写真ファイルの状態を管理

  const handleButtonClick = (category, value) => { // ボタンクリック時の処理
    setSelectedButtons({ ...selectedButtons, [category]: value }); // 選択されたボタンの状態を更新
  };

  const handlePhotoChange = (event) => { // 写真が選択されたときの処理
    setPhoto(event.target.files[0]); // 選択されたファイルをphoto状態に設定
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async () => {
    navigate("/Main");  // フォーム送信時の処理
    console.log('form Data:', formData); // フォームデータをコンソールに出力

    let photoBase64 = null;
    if (photo) {
      photoBase64 = await convertToBase64(photo);
    }

    const dataToSend = {
      color: selectedButtons.color,
      location: selectedButtons.location,
      situation: selectedButtons.situation,
      temprature: selectedButtons.temprature,
      photo: photoBase64,
    };

    console.log('Data to send:', dataToSend);

    try {
      const response = await fetch('https://example.com/api/cloth-register', { // Fetch APIを使用してデータを送信
        method: 'POST', // HTTPメソッドをPOSTに設定
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend), // 送信するデータ
      });

      if (!response.ok) { // レスポンスが正常でない場合
        throw new Error('Network response was not ok'); // エラーを投げる
      }

      const result = await response.json(); // レスポンスをJSONとして解析
      console.log('Success:', result); // 成功メッセージをコンソールに出力
      navigate("/Main"); // "/Main"ページに遷移
    } catch (error) {
      console.error('Error:', error); // エラーメッセージをコンソールに出力
    }
  };

  return ( // コンポーネントのJSXを返す
    <div className="ClothRegister">
      <h2>服を登録する</h2>
      <div className="container">
        <div className="section">
          <label>写真</label>
          <input type="file" className='border-none' onChange={handlePhotoChange} /> {/* 写真の入力フィールド */}
          <label>シチュエーション</label>
          <div>
            {['仕事', 'デート', 'お出かけ', '飲み会', '運動'].map((situation) => ( // シチュエーションのボタンを生成
              <button
                className={selectedButtons.situation === situation ? 'ColorButton active' : 'ColorButton'} // 選択状態に応じてクラスを設定
                type="button"
                key={situation}
                onClick={() => {
                  handleButtonClick('situation', situation); // ボタンクリック時の処理を設定
                  setFormData({ ...formData, situation }); // フォームデータを更新
                }}
              >
                {situation} {/* ボタンのラベル */}
              </button>
            ))}
          </div>
        </div>
        <div className="section">
          <label>カラー</label>
          <div>
            {['Yellow', 'Pink', 'Blue', 'Red', 'Orange', 'Green', 'Purple', 'Brown', 'Gray', 'White', 'Black'].map((color) => ( // カラーのボタンを生成
              <button
                className={selectedButtons.color === color ? 'ColorButton active' : 'ColorButton'} // 選択状態に応じてクラスを設定
                type="button"
                key={color}
                style={{ color: 'white', backgroundColor: color, textShadow: '0 0 5px black', fontWeight: '200px', border: selectedButtons.color === color ? '2px solid black' : 'none' }} // スタイルを設定
                onClick={() => {
                  handleButtonClick('color', color); // ボタンクリック時の処理を設定
                  setFormData({ ...formData, color }); // フォームデータを更新
                }}
              >
                {color} {/* ボタンのラベル */}
              </button>
            ))}
          </div>
        </div>
        <div className="section">
          <label>行先</label>
          <div>
            {['札幌', '仙台', '東京', '名古屋', '大阪', '広島', '福岡', '沖縄'].map((location) => ( // 行先のボタンを生成
              <button
                className={selectedButtons.location === location ? 'ColorButton active' : 'ColorButton'} // 選択状態に応じてクラスを設定
                type="button"
                key={location}
                onClick={() => {
                  handleButtonClick('location', location); // ボタンクリック時の処理を設定
                  setFormData({ ...formData, location }); // フォームデータを更新
                }}
              >
                {location} {/* ボタンのラベル */}
              </button>
            ))}
          </div>
        </div>
        <div className="section">
          <label>気温</label>
          <div>
            {['0～10℃', '11～20℃', '21～30℃'].map((temprature) => ( // 気温のボタンを生成
              <button
                className={selectedButtons.temprature === temprature ? 'ColorButton active' : 'ColorButton'} // 選択状態に応じてクラスを設定
                type="button"
                key={temprature}
                onClick={() => {
                  handleButtonClick('temprature', temprature); // ボタンクリック時の処理を設定
                  setFormData({ ...formData, temprature }); // フォームデータを更新
                }}
              >
                {temprature} {/* ボタンのラベル */}
              </button>
            ))}
          </div>
        </div>
        <h3>この情報で登録します</h3>
        <div className='ChooseSubmit'>
          <button onClick={() => setFormData({ // 戻るボタンの処理
            color: '',
            location: '',
            situation: '',
            temprature: ''
          }
          )}>戻る</button>
          <button onClick={handleSubmit} className='OrangeButton'>登録する</button> {/* 登録ボタンの処理 */}
        </div>
      </div>
    </div>
  );
}
