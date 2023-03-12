import logo from "./icons_assets/Logo.svg";
import Navbar from "./components/navbar";
function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <img className="logo_img" src={logo} height="100px" width="200px" />
      </div>
      <nav className="verticalNavigation">
        <h4>Doormat Navigation</h4>
        <Navbar />
      </nav>
      <address className="footerContact">
        <h4>Contact</h4>
        <a href="mailto:support@littlelemon.com">support@littlelemon.com</a>
        <br />
        <br />
        <strong>Visit us at </strong>
        <br />
        402 W 8th St Suite B, <br />
        Georgetown, TX 78626, <br />
        United States
      </address>

      <div className="socialMedia">
        <h4>Social Media Links</h4>
        <ul >
         <li><a href="">Facebook</a></li>
         <li><a href="">Instagram</a></li>
         <li><a href="">Twitter</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
