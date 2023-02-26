import style from './Navbar.module.css'
import Logo from './../../Assets/FakeShop.png'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {useState} from "react";
import DarkTheme from "./DarkTheme/DarkTheme";
import {useTranslation} from "react-i18next";
import useLocalstorage from "../../Hooks/use-localstorage";
import i18n from "../../i18n";
import {NavLink} from "react-router-dom";
import classes from "./Navbar.module.css";


const Navbar = () => {
    const {t} = useTranslation()
    const [language, setLanguage] = useLocalstorage('language', 'ua')

    const handleLanguageChange = () => {
        if (language === 'en') {
            i18n.changeLanguage('ua')
            setLanguage('ua')
        } else if (language === 'ua') {
            i18n.changeLanguage('en')
            setLanguage('en')

        }
    }
    const [nav, setNav] = useState(false);
    return (
        <div className={style.wrapper}>
            <div className={style.logo}>
                <img className={style.img} src={Logo} alt="logo"/>
            </div>
            <div className={style.titleAndMenu}>
                <div className={style.titleText}>{t('FAKER SHOP')}</div>
                <div className={style.nav} onClick={() => setNav(false)}>
                    <ul className={
                        nav ? [style.menu, style.active].join(' ') : [style.menu]
                    }>
                        <li className={style.nB}>
                            <button className={`${style.neonBtn} ${style.nB} ${style.active} ${style.neonBtnPurple}`}
                                    onClick={handleLanguageChange}> {language === 'ua' ? t('Ukrainian') : t('English')}</button>
                        </li>
                        <li>
                            <NavLink to='/groups'
                                     className={navData => navData.isActive ? classes.active : classes.notActive}>{t('Groups')}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/feedback'
                                     className={navData => navData.isActive ? classes.active : classes.notActive}>{t('Feedback')}</NavLink>
                        </li>
                        <li>
                            <NavLink to='/settings'
                                     className={navData => navData.isActive ? classes.active : classes.notActive}>{t('Settings')}</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.langAndColor}>
                <div>
                    <button className={`${style.neonBtn} ${style.neonBtnPurple}`}
                            onClick={handleLanguageChange}> {language === 'ua' ? t('Ukrainian') : t('English')}</button>
                </div>
                <div className={style.themeMode}>
                    <DarkTheme/>
                </div>
            </div>
            <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
                {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
            </div>
        </div>
    )
}
export default Navbar