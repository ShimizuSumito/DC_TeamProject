import { useState } from "react";
import { Link ,} from "react-router-dom";
import './MyCloth.css';
import { motion } from "framer-motion";
import img from "../../../commons/img/notclothes.png";
const MyCloth = () => {

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

  const handleSubmit = async () => {
    console.log('form Data:', formData); // フォームデータをコンソールに出力

    const dataToSend = new FormData(); // FormDataオブジェクトを作成
    dataToSend.append('color', selectedButtons.color); // 選択されたカラーを追加
    dataToSend.append('location', selectedButtons.location); // 選択された行先を追加
    dataToSend.append('situation', selectedButtons.situation); // 選択されたシチュエーションを追加
    dataToSend.append('temprature', selectedButtons.temprature); // 選択された気温を追加

    if (photo) { // 写真が選択されている場合
      dataToSend.append('photo', photo); // 写真を追加
    }

    for (let [key, value] of dataToSend.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const response = await fetch('https://example.com/api/cloth-register', { // Fetch APIを使用してデータを送信
        method: 'POST', // HTTPメソッドをPOSTに設定
        body: dataToSend, // 送信するデータ
      });

      if (!response.ok) { // レスポンスが正常でない場合
        throw new Error('Network response was not ok'); // エラーを投げる
      }

      const result = await response.json(); // レスポンスをJSONとして解析
      console.log('Success:', result); // 成功メッセージをコンソールに出力
    } catch (error) {
      console.error('Error:', error); // エラーメッセージをコンソールに出力
    }
  };

    const [cards, setCards] = useState([
        {img},
        {img},
        {img},
        {img},
        {img},
        {img},

    ]);
    
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (image) => {
        setSelectedCard(image);
    };

    const handleCloseModal = () => {
        setSelectedCard(null);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
        >
            <h2>MyCloth</h2>
            <div className="card-list">
                {cards.map((image, index) => (
                    <div className="card" key={index} onClick={() => handleCardClick(image)}>
                        <img src={img} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </div>
            {selectedCard && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <div className="modal-flex">
                        <img src={img} alt="Selected" />
                        <div className="update-info">   
                            <form action="">
                                <label for="color">Color</label>
                                <select name="color" id="">
                                    <option value="yellow">Yellow</option>
                                    <option value="pink">Pink</option>
                                    <option value="blue">Blue</option>
                                    <option value="red">Red</option>
                                    <option value="orange">Orange</option>
                                    <option value="green">Green</option>
                                    <option value="purple">Purple</option>
                                    <option value="brown">Brown</option>
                                    <option value="gray">Gray</option>
                                    <option value="white">White</option>
                                    <option value="black">Black</option>
                                </select>
                                <label for="location">location</label>
                                <select name="location" id="">
                                    <option value="仕事">仕事</option>
                                    <option value="デート">デート</option>
                                    <option value="お出かけ">お出かけ</option>
                                    <option value="飲み会">飲み会</option>
                                    <option value="運動">運動</option>
                                </select>
                                <label for="temprature">Temprature</label>
                                <select name="temprature" id="">
                                    <option value="0～10℃">0～10℃</option>
                                    <option value="11～20℃">11～20℃</option>
                                    <option value="21～30℃">21～30℃</option>
                                    <option value="cold">Cold</option>
                                </select>
                                <button className="update-btn" onClick={handleSubmit}>Update</button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            )}
            <button className="logout">
                <Link to="/Main" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
            </button>
        </motion.div>
    );
}

export default MyCloth;
