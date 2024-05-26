
import img from "../../../commons/img/girl.jpg";
import { useNavigate } from "react-router-dom";
export default function Check() {
    const navigate = useNavigate();
    const toDatabase = () => {
        alert("登録が完了しました！");
        navigate('/Main');
    }
    const toReturn = () => {
        navigate('/Register');
    }
    return (
        <div className='start-container register'>
            <section className='start-left'>
                <div className='start-header'>
                    <img src={img} alt="Cloth Up logo" />
                    <p>Let's get you set up!</p>
                </div>
            </section>
            <section className='start-right'>
                <form className='register-form'>
                    <label className='nes'>
                        お名前(アカウント名)
                        <p className="check-text">○○○</p>
                    </label>
                    <label className='nes'>
                        メールアドレス(ログインID)
                        <p className="check-text">○○○</p>
                    </label>
                    <label className='nes'>
                        パスワード
                        <p className="check-text">○○○</p>
                    </label>
                    <label>性別
                    <p className="check-text">○○○</p>
                    </label>
                    <label>
                        年代
                        <p className="check-text">○○○</p>
                    </label>
                    <label>
                        地域<br />
                        <p className="check-text">○○○</p>
                    </label>
                    <div className="form-area">
                    <button className='tocheck-button return-button' onClick={toReturn}>戻る</button>
                    <button className='tocheck-button' onClick={toDatabase}>完了</button>
                    </div>
                </form>
            </section>
        </div>
    )
    
}