import { useNavigate } from "react-router-dom";
import { DoLogout } from "../../services/auth.service";
import { SidebarItem, type SidebarItemProps } from "./SidebarItem";

const itens: SidebarItemProps[] = [
  {
    name: "Orders",
    href: "/orders",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="icon icon-xs me-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
        />
      </svg>
    ),
  },
  {
    name: "Reports",
    href: "/reports",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="icon icon-xs me-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
        />
      </svg>
    ),
  },
  {
    name: "Altomations",
    href: "/altomations",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="icon icon-xs me-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
        />
      </svg>
    ),
  },
  {
    name: "Orders Templates",
    href: "/order-templates",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="icon icon-xs me-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
        />
      </svg>
    ),
  },
  {
    name: "Monitors",
    href: "/monitors",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="icon icon-xs me-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
        />
      </svg>
    ),
  },
];

export function Sidebar() {
  const navidate = useNavigate();
  async function handleLogout() {
    const token = localStorage.getItem("token");
    await DoLogout(token || "");
    navidate("/");
  }
  return (
    <nav
      id="sidebarMenu"
      className="sidebar d-lg-block bg-gray-800 text-white collapse"
      data-simplebar
    >
      <div className="sidebar-inner px-4 pt-3">
        <ul className="nav flex-column pt-3 pt-md-0">
          <li className="nav-item">
            <a href="/dashboard" className="nav-link d-flex align-items-center">
              <span className="sidebar-icon">
                <img
                  src="img/favicon/favicon-32x32.png"
                  height="32"
                  width="32"
                  alt="B3holder"
                />
              </span>
              <span className="mt-1 ms-1 sidebar-text">Dashboard</span>
            </a>
          </li>
          {itens.map((item, index) => (
            <SidebarItem
              href={item.href}
              name={item.name}
              key={index}
              icon={item.icon}
            />
          ))}
          <li
            role="separator"
            className="dropdown-divider mt-4 mb-3 border-gray-700"
          ></li>
          <SidebarItem
            href="#"
            name="Logout"
            icon={null}
            onClick={handleLogout}
          />
        </ul>
      </div>
    </nav>
  );
}
