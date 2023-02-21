import classes from "../Navbar.module.css";
import {NavLink} from "react-router-dom";

const Settings=(props)=>{
    return(
        <NavLink to='/settings'
                    className={navData => navData.isActive ? classes.active : classes.notActive}>Settings</NavLink>
    )
}
export default Settings