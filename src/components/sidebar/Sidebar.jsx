import SidebarNavLinks from "./SidebarNavLinks";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <div className="logo-container">
          <h2>Srednja strukovna škola Antuna Horvata</h2>
        </div>
        <SidebarNavLinks />
      </div>
    </aside>
  );
}

export default Sidebar;
