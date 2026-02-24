import { useState } from "react";
import SidebarNavLinks from "./SidebarNavLinks";

function Sidebar({ className = "sidebar", enableTabletCollapse = false }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`${className}${isCollapsed ? " is-collapsed" : ""}`}
      data-collapsible={enableTabletCollapse ? "true" : "false"}
    >
      <div className="sidebar-container">
        {enableTabletCollapse && (
          <button
            type="button"
            className="sidebar-collapse-toggle"
            onClick={() => setIsCollapsed((current) => !current)}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-expanded={!isCollapsed}
          >
            {isCollapsed ? "→" : "←"}
          </button>
        )}
        <div className="logo-container">
          <h2>Srednja strukovna škola Antuna Horvata</h2>
        </div>
        <SidebarNavLinks isCollapsed={isCollapsed} />
      </div>
    </aside>
  );
}

export default Sidebar;
