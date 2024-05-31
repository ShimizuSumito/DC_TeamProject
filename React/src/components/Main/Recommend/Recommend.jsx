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

    const [topsImages, setTopsImages] = useState([]);
    const [bottomsImages, setBottomsImages] = useState([]);

    useEffect(() => {
        const fetchImageData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/Clothes/Get/${userinfo.mailaddress}`);
                console.log('画像データ:', response.data);

                // chooseDataの内容を確認する
                console.log('chooseData:', chooseData);

                // 渡された要素を含んでいる画像をフィルタリング
                const filteredTopsImages = [];
                const filteredBottomsImages = [];

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
                    if (chooseData.temprature && (!cloth.temperatureRange || !cloth.temperatureRange.includes(chooseData.temprature))) {
                        matches = false;
                    }

                    if (matches) {
                        const imageObject = {
                            src: `data:image/jpeg;base64,${cloth.image}`,
                            alt: cloth.description
                        };

                        if (cloth.category === '上着') {
                            filteredTopsImages.push(imageObject);
                        } else if (cloth.category === 'パンツ') {
                            filteredBottomsImages.push(imageObject);
                        }
                    }
                }

                setTopsImages(filteredTopsImages);
                setBottomsImages(filteredBottomsImages);

                console.log('Filtered tops images:', filteredTopsImages); // フィルタリングされた上着画像を確認
                console.log('Filtered bottoms images:', filteredBottomsImages); // フィルタリングされたパンツ画像を確認
            } catch (error) {
                console.error('画像データの取得エラー:', error);
                setTopsImages([]);
                setBottomsImages([]);
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
            <div className='recommend-content'>
                <h1>あなたへのおすすめ</h1>
                <div id='tops' className="recommend-container">
                    {/* フィルタリングされた上着画像を表示 */}
                    <p>トップス</p>
                    <div className="item">
                        {topsImages.map((image, index) => (
                            <div key={index} className="item-image" style={{ backgroundImage: `url(${image.src})`, backgroundSize: "contain" }} title={image.alt}>
                                {/* 画像の説明がある場合はツールチップで表示 */}
                            </div>
                        ))}
                    </div>
                </div>
                <div id="bottoms" className="recommend-container">
                    {/* フィルタリングされたパンツ画像を表示 */}
                    <p>ボトムス</p>
                    <div className="item">
                        {bottomsImages.map((image, index) => (
                            <div key={index} className="item-image" style={{ backgroundImage: `url(${image.src})`, backgroundSize: "contain" }} title={image.alt}>
                                {/* 画像の説明がある場合はツールチップで表示 */}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="btn-container">
                    <button onClick={toHome}>ホームへ戻る</button>
                    <button onClick={toCreateTimeline}>写真を投稿する</button>
                </div>
            </div>
        </motion.div>
    )
}
