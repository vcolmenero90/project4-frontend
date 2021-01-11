import logo from './images/wishing_well.png'
import rwing from './images/right_wing.png'
import lwing from './images/left_wing.png'

function Header(props) {
    return (
        <div className="logorow">
          <div className="logo">
            <img src={lwing} alt="lwing"  />
          </div>
          <div className="logo">
            <img src={logo} alt="wishing_well_logo"  />
          </div>
          <div className="logo">
            <img src={rwing} alt="rwing" />
          </div>
        </div>
    );
}

export default Header;  
