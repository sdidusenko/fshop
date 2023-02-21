import classes from "../Navbar.module.css";
import {NavLink} from "react-router-dom";

const Groups=(props)=>{
    return(
        <NavLink to='/groups' className={navData => navData.isActive ? classes.active : classes.notActive}>Groups</NavLink>
    )
}
export default Groups