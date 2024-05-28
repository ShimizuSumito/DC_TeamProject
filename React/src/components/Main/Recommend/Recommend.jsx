import'./Recommend.css';
import {useNavigate } from 'react-router-dom';
export default function Recommend() {
    const navigate = useNavigate();
    const toHome = () => {
        navigate("/Main");
    }
    const toCreateTimeline = () => {
        navigate("/Main/CreateTimeline");
    }
    return (
        <div  className='recommend'>
            <h1>あなたへのおすすめ</h1>
            <div className="recommend-container">
                <div className="item">
                    <p className="itemName">上着</p>
                    <div className="item-list">
                        <div className="item-image"><img src="" alt="" /></div>
                        <div className="item-image"><img src="" alt="" /></div>
                        <div className="item-image"><img src="" alt="" /></div>
                    </div>
                </div>
                <div className="item">
                    <p className="itemName">上着</p>
                    <div className="item-list">
                        <div className="item-image"><img src="" alt="" /></div>
                        <div className="item-image"><img src="" alt="" /></div>
                        <div className="item-image"><img src="" alt="" /></div>
                    </div>
                </div>
                <div className="item">
                    <p className="itemName">上着</p>
                    <div className="item-list">
                        <div className="item-image"><img src="" alt="" /></div>
                        <div className="item-image"><img src="" alt="" /></div>
                        <div className="item-image"><img src="" alt="" /></div>
                    </div>
                </div>
                <div className="item">
                    <p className="itemName">上着</p>
                    <div className="item-list">
                        <div className="item-image"><img src="" alt="" /></div>
                        <div className="item-image"><img src="" alt="" /></div>
                        <div className="item-image"><img src="" alt="" /></div>
                    </div>
                </div>
                <div className="item">
                    <p className="itemName">上着</p>
                    <div className="item-list">
                        <div className="item-image"><img src="" alt="" /></div>
                        <div className="item-image"><img src="" alt="" /></div>
                        <div className="item-image"><img src="" alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="btn-container">
                <button onClick={toHome}>ホームへ戻る</button>
                <button onClick={toCreateTimeline}>写真を投稿する</button>
            </div>
        </div>
    )
}