import './CreateTimeline.css';
import { useNavigate } from 'react-router-dom';
export default function CreateTimeline() {
    const navigate = useNavigate();
    const toHome = () => {
        navigate("/Main");
    }
    const toTimeline = () => {
        navigate("/Main/Timeline");
    }
    return (
        <div className="create-timeline">
        <h1>タイムライン作成画面</h1>
        <div className="create-timeline-container">
            <form action="">
                <label>写真</label>
                <input type="file"  className='border-none'/>
                <label> 場所</label>
                <select name="location" id="location">
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
                <select name="situation" id="situatione">
                    <option value="仕事"> 仕事</option>
                    <option value="デート">デート</option>
                    <option value="お出かけ">お出かけ</option>
                    <option value="飲み会">飲み会</option>
                    <option value="運動">運動</option>
                </select>
                <label>コメント</label>
                <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
            </form>

        </div>   
            <div className="btn-container">
                <button onClick={toHome}>ホームに戻る</button>
                <button onClick={toTimeline}>投稿する</button>
            </div>
    </div>
    )
}