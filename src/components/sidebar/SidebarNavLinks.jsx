import { NavLink } from "react-router-dom";

const primaryLinks = [{ text: "Home", path: "/" }];

const demoLinks = [
  { text: "Carousel Demo", path: "/carousel" },
  { text: "Footer Demo", path: "/footer" },
  { text: "Palette 1 - Academic", path: "/palette1" },
  { text: "Palette 2 - Modern", path: "/palette2" },
  { text: "Palette 3 - Creative", path: "/palette3" },
];

function NavItem({ text, path }) {
  return (
    <li className="sidebar-nav-link">
      <NavLink
        to={path}
        className={({ isActive }) =>
          `sidebar-nav-anchor${isActive ? " active" : ""}`
        }
        end={path === "/"}
      >
        {text}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right-square"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
          />
        </svg>
      </NavLink>
    </li>
  );
}

function SidebarNavLinks() {
  return (
    <div className="sidebar-nav-groups">
      <ul className="sidebar-nav-ul">
        {primaryLinks.map((link) => (
          <NavItem key={link.path} text={link.text} path={link.path} />
        ))}
      </ul>

      <div className="sidebar-nav-group">
        <h3 className="sidebar-nav-group-title">Demos</h3>
        <ul className="sidebar-nav-ul">
          {demoLinks.map((link) => (
            <NavItem key={link.path} text={link.text} path={link.path} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SidebarNavLinks;
