import "./menu.scss";

export default function Menu({ openMenu, setOpenMenu }) {
  return (
    <div className={`menu ${openMenu && "active"}`}>
      <ul>
        <li>
          <a href="#intro" onClick={() => setOpenMenu(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => setOpenMenu(false)}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#works" onClick={() => setOpenMenu(false)}>
            Works
          </a>
        </li>
        <li>
          <a href="#testimonials" onClick={() => setOpenMenu(false)}>
            Testimonials
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setOpenMenu(false)}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
