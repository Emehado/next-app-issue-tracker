"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { href: "/issues", label: "Issues" },
  { href: "/pulls", label: "Pull Requests" },
];

const NavBar = () => {
  const curPath = usePathname();
  console.log("🚀 ~ file: NavBar.tsx:12 ~ NavBar ~ curPath:", curPath);

  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          daisyUI
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
