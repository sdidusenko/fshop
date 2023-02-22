import classes from "../Navbar.module.css";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Groups = (props) => {
    const {t} = useTranslation()
    return (
        <NavLink to='/groups'
                 className={navData => navData.isActive ? classes.active : classes.notActive}>{t('Groups')}</NavLink>
    )
}
export default Groups