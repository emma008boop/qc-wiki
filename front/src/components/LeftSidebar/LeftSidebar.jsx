import "./LeftSidebar.scss";
import SidebarGroup from "./SidebarGroup/SidebarGroup";

function LeftSidebar() {
  const menuData = [
    {
      title: "Rater QC",
      defaultOpen: false,
      links: [
        {
          label: "Documentación",
          href: "/documentation",
          isActive: true,
        },
        {
          label: "Cómo usarlo",
          href: "/documentation/getting-started",
        },
        {
          label: "Descargar",
          href: "/documentation/download",
        },
      ],
    },
    {
      title: "Trinity",
      defaultOpen: false,
      links: [
        {
          label: "Arquitectura",
          href: "/general-trinity",
        },
        {
          label: "API",
          href: "/api",
        },
        {
          label: "Contribuir",
          href: "/contributing",
        },
      ],
    },
  ];

  return (
    <aside className="left-sidebar">
      <nav
        className="left-sidebar__navigation"
        aria-label="Navegación de documentación"
      >
        {menuData.map((group) => (
          <SidebarGroup
            key={group.title}
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