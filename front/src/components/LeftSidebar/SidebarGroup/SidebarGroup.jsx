import { useState } from "react";

function SidebarGroup({ title, links, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="left-sidebar__group">
      <button
        type="button"
        className="left-sidebar__toggle"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
      >
        <span className="left-sidebar__title">
          {title}
        </span>

        <span
          className={`left-sidebar__arrow ${
            isOpen ? "left-sidebar__arrow--open" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        className={`left-sidebar__content ${
          isOpen ? "left-sidebar__content--open" : ""
        }`}
      >
        <ul className="left-sidebar__list">
          {links.map((link, index) => (
            <li
              key={index}
              className="left-sidebar__item"
            >
              <a
                href={link.href}
                className={`left-sidebar__link ${
                  link.isActive
                    ? "left-sidebar__link--active"
                    : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SidebarGroup;