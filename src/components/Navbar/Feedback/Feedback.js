import classes from "../Navbar.module.css";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Feedback =(props)=>{
    const {t}=useTranslation()
    return(
        <NavLink to='/feedback' className={navData => navData.isActive ? classes.active : classes.notActive}>{t('Feedback')}</NavLink>
    )
}
export default Feedback