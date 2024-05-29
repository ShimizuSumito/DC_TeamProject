import './RegisterSuccess.css';
import { useNavigate,useLocation } from "react-router-dom";


export default function RegisterSuccess() {
    const location = useLocation();
    const userData = location.state;
        const navigate = useNavigate();
        const toDatabase = () => {
            navigate('/');
        }
        return(
            <div className='RegisterSuccess'>
                <h2>{userData}さん</h2>
                <h1><span class="first-half">Cloth Up!</span> へようこそ！！</h1>
                {/* <img src={bg} id="backGcround" width="1920" height="1080" alt="back ground" /> */}
                
                <p>その日の気分や場面、お出かけ先の天気など様々な条件に合った<br />コーディネートを見つけよう！</p>
                <button onClick={toDatabase} className="homebutton">さっそく使ってみる！</button>
            </div>
        )
    }