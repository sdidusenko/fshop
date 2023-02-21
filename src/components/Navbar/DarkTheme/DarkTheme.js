import React from 'react';
import {Theme} from "dark-mode-react";
import DarkImage from './../../../Assets/Sun1.svg'
import LightImage from './../../../Assets/Moon2.svg'
import style from './DarkTheme.module.css'
const DarkTheme = () => {
    return (
        <div className={style.styleIconTheme}>
            <Theme
                darkIcon={DarkImage}
                lightIcon={LightImage}
                altDark='dark icon'
                altLight="light icon"
                imgWidth='33'
                imgHeight='33'
                myClass="style-icon-theme"
            />
        </div>
    )
};
export default DarkTheme