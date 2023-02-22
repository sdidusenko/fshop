import classes from "../Navbar.module.css";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Settings = (props) => {
    const {t} = useTranslation()
    return (
        <NavLink to='/settings'
                 className={navData => navData.isActive ? classes.active : classes.notActive}>{t('Settings')}</NavLink>
    )
}
export default Settings