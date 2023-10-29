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

  return (
    <nav className="navbar bg-base-100 border-b border-b-zinc-600">
      <div className="container">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            KIRA
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
      </div>
    </nav>
  );
};

export default NavBar;
