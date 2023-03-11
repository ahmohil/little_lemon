import Icon from "./logo";
import Navbar from "./components/navbar";
import logo from "./icons_assets/Logo.svg"
function Header(){
    return(
        <div className="header">
        <span className = "logo">
           <img className = "logo" src={logo}/>
        </span>
        <nav className="horizontalNavigation">
            <Navbar/>
        </nav>
        </div>
    )
}

export default Header;