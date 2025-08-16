export interface SidebarItemProps {
  name: string;
  href: string;
  icon: React.ReactNode;
  onClick?: () => void;
}
export function SidebarItem({ name, href, icon, onClick }: SidebarItemProps) {
  function getClassName(href: string) {
    return window.location.pathname === href ? "nav-link active" : "nav-link";
  }
  return (
    <li className={getClassName(href)}>
      <a href={href} className="nav-link" onClick={onClick}>
        <span className="sidebar-icon">{icon}</span>
        <span className="sidebar-text">{name}</span>
      </a>
    </li>
  );
}

