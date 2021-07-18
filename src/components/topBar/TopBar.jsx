import "./topBar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function TopBar({ openMenu, setOpenMenu }) {
  return (
    <div className={`topBar ${openMenu && "active"}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            sensor.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>(+84)363629810</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>toannh8.ptit@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setOpenMenu(!openMenu)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
