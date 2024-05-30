// components/Loading/Loading.js
import React from 'react';
import './Loading.css';
import img from './commons/img/logo.png';

const Loading = () => {
  return (
    <div className="loading-container">
                <div className='start-header logo-main'>
                    <img src={img} alt="Cloth Up logo" />
                    <h1><span className='logospan'>C</span>loth <span className='logospan'>U</span>p!</h1>
                </div>
    </div>
  );
};

export default Loading;
