import "./LeftSidebar.scss";
import SidebarGroup from "./SidebarGroup/SidebarGroup";

function LeftSidebar() {
  const menuData = [
    {
      title: "Documentación",
      defaultOpen: true,
      links: [
        { label: "Introducción", href: "/documentation", isActive: true },
        { label: "Primeros pasos", href: "/documentation/getting-started" },
        { label: "Configuración", href: "/documentation/setup" },
      ],
    },
    {
      title: "Proyecto",
      defaultOpen: false,
      links: [
        { label: "Arquitectura", href: "/architecture" },
        { label: "API", href: "/api" },
        { label: "Contribuir", href: "/contributing" },
      ],
    },
  ];

  return (
    <aside className="left-sidebar">
      <nav
        className="left-sidebar__navigation"
        aria-label="Navegación de documentación"
      >
        {menuData.map((group, index) => (
          <SidebarGroup
            key={index}
            title={group.title}
            links={group.links}
            defaultOpen={group.defaultOpen}
          />
        ))}
      </nav>
    </aside>
  );
}
export default LeftSidebar;