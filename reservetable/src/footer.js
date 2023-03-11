import logo from "./icons_assets/Logo.svg"
import Navbar
 from "./components/navbar";
function Footer()
{
    return(
        <div className="footer">
        <span className = "logo">
           <img className = "logo" src={logo}/>
        </span>
        <nav className="verticalNavigation">
            <h4>Doormat Navigation</h4>
            <Navbar/>
        </nav>
        </div>
    )
}

export default Footer;