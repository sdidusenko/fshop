import classes from "../Navbar.module.css";
import {NavLink} from "react-router-dom";

const Feedback =(props)=>{
    return(
        <NavLink to='/feedback' className={navData => navData.isActive ? classes.active : classes.notActive}>Feedback</NavLink>
    )
}
export default Feedback