import classes from "../Navbar.module.css";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Slider from "../../Body/Slider";


const Groups = (props) => {
    const {t} = useTranslation()
    return (
        <div>
            <NavLink to='/groups'
                     className={navData => navData.isActive ? classes.active : classes.notActive}>{t('Groups')}

            </NavLink>

        </div>
    )
}
export default Groups