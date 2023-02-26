import style from './Navbar.module.css'
import Groups from "./Groups/Groups";
import Feedback from "./Feedback/Feedback";
import Settings from "./Setting/Settings";
import Logo from './../../Assets/FakeShop.png'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {useState} from "react";
import DarkTheme from "./DarkTheme/DarkTheme";
import {useTranslation} from "react-i18next";
import useLocalstorage from "../../Hooks/use-localstorage";
import i18n from "../../i18n";
import Slider from "../Body/Slider";


const Navbar = (props) => {
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
                <div><h2>dfdf</h2></div>
                <div className={style.nav} onClick={() => setNav(false)}>
                    <ul className={
                        nav ? [style.menu, style.active].join(' ') : [style.menu]
                    }>
                        <li>
                            <Groups/>
                        </li>
                        <li>
                            <Feedback/>
                        </li>
                        <li>
                            <Settings/>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.langAndColor}>
                    <div className={style.language}>
                        <button className={`${style.neonBtn} ${style.neonBtnPurple}`}
                            onClick={handleLanguageChange}> {language === 'ua' ? t('Ukrainian') : t('English')}</button>
                        {/*<button className='reload' onClick={()=>window.location.reload()}>{t('refresh page')}</button>*/}
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