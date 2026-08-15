import { useState } from "react";
import "./LeftSidebar.scss";

function SidebarGroup({ title, links, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="left-sidebar__group">
      <button
        className="left-sidebar__toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h2 className="left-sidebar__title">{title}</h2>
        <span
          className={`left-sidebar__arrow ${
            isOpen ? "left-sidebar__arrow--open" : ""
          }`}
        >
          ⌄
        </span>
      </button>

      {isOpen && (
        <ul className="left-sidebar__list">
          {links.map((link, index) => (
            <li key={index} className="left-sidebar__item">
              <a
                href={link.href}
                className={`left-sidebar__link ${
                  link.isActive ? "left-sidebar__link--active" : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SidebarGroup;
