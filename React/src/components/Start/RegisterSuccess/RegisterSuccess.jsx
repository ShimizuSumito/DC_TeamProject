import './RegisterSuccess.css';
import { useNavigate } from "react-router-dom";


export default function RegisterSuccess() {
        const navigate = useNavigate();
        const toDatabase = () => {
            navigate('/Home');
        }
    return(
        <div className='RegisterSuccess'>
            <h2>Name + さん</h2>
            <h1>Cloth Up!へようこそ！！</h1>
            <p>その日の気分や場面、お出かけ先の天気など様々な条件に合った<br />コーディネートを見つけよう！</p>
            <button className="">さっそく使ってみる！</button>
        </div>
    )
}