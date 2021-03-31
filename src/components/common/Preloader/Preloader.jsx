import React from 'react';
import preloader from '../../../assets/images/loading.gif';
import style from './Preloader.module.css';


const Preloader = (props) => {
    return <img className={style.preloader} src={preloader} />
}

export default Preloader;