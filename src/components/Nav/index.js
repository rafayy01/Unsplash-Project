import {React} from "react";
import { useContext } from "react";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import { Navigation, CameraImage, HeartImage } from "./Nav.styles";
import { logo, heartIcon } from "../../utils/resources/index";
import { ThemeContext } from "../Context/Contextstyles";
import ReactSwitch from "react-switch";
const Nav = () => {
  const {theme,ToggleTheme} = useContext(ThemeContext);
  return (
    <Navigation>
      <Link to="/">
        <CameraImage>
          <img alt="camera-img" className="camera-image" src={logo} />
        </CameraImage>
      </Link>
      <SearchBar />

      <Link to="/favorites">
        <HeartImage>
          <img alt="camera-img" className="camera-image" src={heartIcon} />
        </HeartImage>
      </Link>
      <p>Saved</p>
      <div className="switch">
        <label>{theme === "light"? "Dark Mode" : "Light Mode" }</label>
        <ReactSwitch onChange={ToggleTheme} checked={theme === "dark"} onColor="#A020F0" />
      </div>
    </Navigation>
  );
};

export default Nav;
