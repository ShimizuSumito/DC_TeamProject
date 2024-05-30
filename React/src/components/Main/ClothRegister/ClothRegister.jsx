import React, { useState , useEffect, useRef} from 'react'; // ReactとuseStateフックをインポート
import { useNavigate } from 'react-router-dom'; // useNavigateフックをインポートしてページ遷移を管理
import './ClothRegister.css'; // CSSファイルをインポート
import axios from 'axios';

export default function ClothRegister() {
  const navigate = useNavigate(); // navigate関数を取得してページ遷移を管理

  const [imageData, setImageData] = useState(null);
  const imageDataRef = useRef(null);
  const [formData, setFormData] = useState({ // フォームデータの状態を管理
    color: '',
    location: '',
    situation: '',
    temprature: '',
    category: ''
  });

  const [selectedButtons, setSelectedButtons] = useState({ // ボタンの選択状態を管理
    color: '',
    location: '',
    situation: '',
    temprature: '',
    category:''
  });

  const [photo, setPhoto] = useState(null); // 写真ファイルの状態を管理
  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/Clothes/Find/13');
        setPhoto(response.data.image);
      } catch (error) {
        console.error('Error fetching image data:', error);
      }
    };
  
    fetchImageData(); // 関数を即時で呼び出す
  }, [imageData]);
  
  useEffect(() => {
    // imageDataが更新されたときに実行される処理
    console.log('ImageData updated:', imageData);
    
  }, [imageData]); // imageDataが変更されたときにのみ実行

  const handleButtonClick = (category, value) => { // ボタンクリック時の処理
    setSelectedButtons({ ...selectedButtons, [category]: value }); // 選択されたボタンの状態を更新
  };

  const handlePhotoChange = (event) =>{
    const file = event.target.files[0];
    setImageData(file);
    console.log(imageData);
  };
  
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('location', selectedButtons.location);
    formData.append('temperatureRange', selectedButtons.temprature);
    formData.append('situation', selectedButtons.situation);
    formData.append('color', selectedButtons.color);
    formData.append('category', selectedButtons.category);
    formData.append('image', imageData); // ファイルを追加
    formData.append('mailaddress', 'email@gmail.com');

    console.log('Sending form data:', formData);
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });

    try {
        const response = await axios.post('http://localhost:8080/Clothes/Add', formData, {
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
        <div className="section">
          <label>衣服の種類</label>
          <div>
            {['上着', 'パンツ'].map((category) => ( // 気温のボタンを生成
              <button
                className={selectedButtons.category === category ? 'ColorButton active' : 'ColorButton'} // 選択状態に応じてクラスを設定
                type="button"
                key={category}
                onClick={() => {
                  handleButtonClick('category', category); // ボタンクリック時の処理を設定
                  setFormData({ ...formData, category }); // フォームデータを更新
                }}
              >
                {category} {/* ボタンのラベル */}
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
        <div>
          <h1>Image Display</h1>
          {imageData && <img src={`data:;base64,${photo}`} alt="Image" />} {/* 画像データを表示 */}
        </div>
      </div>
    </div>
  );
}
