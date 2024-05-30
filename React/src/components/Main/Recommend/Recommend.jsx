import React, { useState, useContext, useEffect } from 'react';
import './Recommend.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { UserContext } from '../../../App';

export default function Recommend() {
    const { userinfo } = useContext(UserContext);
    const location = useLocation();
    const chooseData = location.state;
    const navigate = useNavigate();

    const toHome = () => {
        navigate("/Main");
    }

    const toCreateTimeline = () => {
        navigate("/Main/CreateTimeline");
    }

    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImageData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/Clothes/Get/${userinfo.mailaddress}`);
                console.log('画像データ:', response.data);

                // chooseDataの内容を確認する
                console.log('chooseData:', chooseData);

                // 渡された要素を含んでいる画像をフィルタリング
                const filteredImages = [];
                for (const cloth of response.data) {
                    let matches = true;
                    
                    if (chooseData.color && (!cloth.color || !cloth.color.includes(chooseData.color))) {
                        matches = false;
                    }
                    if (chooseData.location && (!cloth.location || !cloth.location.includes(chooseData.location))) {
                        matches = false;
                    }
                    if (chooseData.situation && (!cloth.situation || !cloth.situation.includes(chooseData.situation))) {
                        matches = false;
                    }
                    if (chooseData.temprature && (!cloth.temprature || !cloth.temprature.includes(chooseData.temprature))) {
                        matches = false;
                    }

                    if (matches) {
                        filteredImages.push({
                            src: `data:image/jpeg;base64,${cloth.image}`,
                            alt: cloth.description
                        });
                    }
                }

                setImages(filteredImages);
                console.log('Filtered images:', filteredImages); // フィルタリングされた画像を確認
            } catch (error) {
                console.error('画像データの取得エラー:', error);
                setImages([]);
            }
        };
        fetchImageData();
    }, [chooseData, userinfo.mailaddress]);

    return (
        <motion.div className='recommend'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
        >
            <h1>あなたへのおすすめ</h1>
            <div className="recommend-container">
                {/* フィルタリングされた画像を表示 */}
                <div className="item">
                    {images.map((image, index) => (
                        <div key={index} className="item-image">
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="btn-container">
                <button onClick={toHome}>ホームへ戻る</button>
                <button onClick={toCreateTimeline}>写真を投稿する</button>
            </div>
        </motion.div>
    )
}
