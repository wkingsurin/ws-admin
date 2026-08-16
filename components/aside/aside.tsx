"use client";

import Link from "next/link";
import { ACCOUNT, DASHBOARD_NAVIGATION } from "./constants";
import { usePathname } from "next/navigation";

export default function Aside() {
  const path = usePathname();
  const page = path.slice(1);

  return (
    <aside className="group/aside absolute flex flex-col justify-between w-10  hover:w-45 h-[100dvh] bg-black/10 backdrop-blur-[12px] px-[5px] py-4 transiton duration-100 border-[0.5px] border-r-black/5">
      <nav className="flex flex-col gap-1 w-full">
        {DASHBOARD_NAVIGATION.map((link) => {
          const Icon = link.icon;
          const active = page === link.label.toLowerCase();

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`group/aside-nav flex items-center gap-2 w-[30px] px-[7px] group-hover/aside:w-full h-[30px] rounded-md hover:bg-black/50 transition duration-100 overflow-hidden ${active ? "bg-black hover:bg-black!" : "bg-white"}`}
            >
              <Icon
                className={`size-4 stroke-[1.5px] min-w-4 min-h-4 group-hover/aside-nav:stroke-white transition duration-100 ${active ? "stroke-white" : "stroke-black"}`}
              />
              <span
                className={`w-0 group-hover/aside:w-auto group-hover/aside-nav:text-white ${active ? "text-white" : "text-black"} transition duration-100`}
              >
                {link.label}
              </span>
            </Link>
          );
        })}
      </nav>
      <div className="flex flex-col gap-1 w-full">
        {ACCOUNT.map((link) => {
          const Icon = link.icon;
          const active = page === link.label.toLowerCase();

          const isLogout = link.label.toLowerCase().includes("log out");

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`group/aside-acc flex items-center gap-2 w-[30px] px-[7px] group-hover/aside:w-full h-[30px] rounded-md transition duration-100 overflow-hidden ${active ? "bg-black hover:bg-black!" : "bg-white"} ${isLogout ? "hover:bg-red-300" : "hover:bg-black/50"}`}
            >
              <Icon
                className={`size-4 stroke-[1.5px] min-w-4 min-h-4 transition duration-100 ${active ? "stroke-white" : "stroke-black"} ${isLogout ? "group-hover/aside-acc:stroke-red-600" : "group-hover/aside-acc:stroke-white"}`}
              />
              <span
                className={`w-0 group-hover/aside:w-auto ${active ? "text-white" : "text-black"} transition duration-100 ${isLogout ? "group-hover/aside-acc:text-red-600" : "group-hover/aside-acc:text-white"}`}
              >
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
