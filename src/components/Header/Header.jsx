import { NavLink } from "react-router-dom"

function Header(){
    return(
        <div>
           <NavLink to='/'>Home </NavLink>
           <NavLink to='/users'>Users </NavLink>
        </div>
    )
}

export default Header