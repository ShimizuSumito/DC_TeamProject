import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { UserContext } from '../../../App';

const Nav = () => {
    const { userinfo, setUserinfo } = useContext(UserContext);
    const [nav, setNav] = useState(false);
    const [bg, setBg] = useState(false);
    
    const handleClick = (event) => {
        event.preventDefault();
        setNav(!nav);
        // setBg(!bg);
    };
    
    const resetuserinfo = () => {
        setUserinfo({
        name: '',
        nickname: '',
        mailaddress: '',
        password: '',
        gender: '',
        generation: '',
        region: ''
        });
    };
    
    return (
        <div className='nav'>
            <button className="hamburger" onClick={handleClick}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>
            <nav>    
                <ul>
                    <li>
                        <Link className='Home' to="/Main" style={{ textDecoration: 'none', color: 'white' }}>ホーム</Link>
                    </li>
                    <li>
                        <Link className='Timeline' to="/Main/timeline" style={{ textDecoration: 'none', color: 'white' }}>タイムライン</Link>
                    </li>
                    <li>
                        <Link className='Weather' to="/Main/Weather" style={{ textDecoration: 'none', color: 'white' }}>お天気</Link>
                    </li>
                </ul>
            </nav>
            {nav && (
                <div className='sidebar'>
                    <ul>
                        <li>
                            <Link to="/Main/Mypage" style={{ textDecoration: 'none', color: 'white' }}>アカウント情報</Link>
                        </li>
                        <li>
                            <Link to="/Main/timeline" style={{ textDecoration: 'none', color: 'white' }}>お問い合わせ</Link>
                        </li>
                        <li>
                            <Link onClick={resetuserinfo} to="/" style={{ textDecoration: 'none', color: 'white' }}>ログアウト</Link>
                        </li>
                    </ul>
                </div>
            )}
            {/* {bg && (
                <div className="bg"></div>
            )} */}
        </div>
    );
};

export default Nav;
