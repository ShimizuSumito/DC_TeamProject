import './RegisterSuccess.css';
import { useNavigate } from "react-router-dom";
import bg from "../../../commons/img/WelcomePage2.png";

export default function RegisterSuccess() {
        const navigate = useNavigate();
        const toDatabase = () => {
            navigate('/Home');
        }
    return(
        <div className='RegisterSuccess'>
            <h2>Name + さん</h2>
            <h1><span class="first-half">Cloth Up!</span>へようこそ！！</h1>
            {/* <img src={bg} id="backGcround" width="1920" height="1080" alt="back ground" /> */}
            
            <p>その日の気分や場面、お出かけ先の天気など様々な条件に合った<br />コーディネートを見つけよう！</p>
            <button className="homebutton">さっそく使ってみる！</button>
        </div>
    )
}