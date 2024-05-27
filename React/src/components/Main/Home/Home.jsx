import "./Home.css";
import { useNavigate } from "react-router-dom";
export default function Home() {
    const navigate = useNavigate();
    const toChoose = () => {
        navigate("/Main/Choose");
    }
    const toClothRegister = () => {
        navigate("/Main/ClothRegister");
    }

    return(
        <div className="home">
            <div className="home-container">
                <button onClick={toChoose}>服を選ぶ</button>
                <button>My Cloth！</button>
                <button onClick={toClothRegister}>服を登録する</button>
                <button>マイページ</button>
            </div>
        </div>
    )
}