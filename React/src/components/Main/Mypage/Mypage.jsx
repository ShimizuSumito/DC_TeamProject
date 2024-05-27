import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import './Mypage.css';

const Mypage = () => {
    return (
        <div>
            
            <Nav />
            <h2>MyCloth</h2>
            <div className="card-list">
                <div className="card">
                    <img src="path_to_image" alt="Image" />
                </div>
                <div className="card">
                    <img src="path_to_image" alt="Image" />
                </div>
                <div className="card">
                    <img src="path_to_image" alt="Image" />
                </div>
                <div className="card">
                    <img src="path_to_image" alt="Image" />
                </div>
                <div className="card">
                    <img src="path_to_image" alt="Image" />
                </div>
                <div className="card">
                    <img src="path_to_image" alt="Image" />
                </div>
                <div className="card">
                    <img src="path_to_image" alt="Image" />
                </div>
            </div>
            <button className="logout"><Link to="/Main" style={{ textDecoration: 'none',color:'white' }}>Home</Link></button>
        </div>
    );
}

export default Mypage;