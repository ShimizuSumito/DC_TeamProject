import {Link} from 'react-router-dom';
import './Mypage.css';
export default function Mypage(){
    return(
        <div className='Mypage'>
            <h2>MyPage</h2>
            <p>Userさん</p>
            <div className="user-profile">
                <table>
                    <tr className='row'>
                        <td className='label'>お名前</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr className='row'>
                        <td className='label'>お名前</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr className='row'>
                        <td className='label'>お名前</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr className='row'>
                        <td className='label'>お名前</td>
                        <td><input type="text" /></td>
                    </tr>
                </table>
            </div>
            <button className="logout"><Link to="/Main" style={{ textDecoration: 'none',color:'white' }}>Home</Link></button>
        </div>
    );
}