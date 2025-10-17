"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Menu.module.css";

export type navData = {
  id: number;
  title: string;
  href: string;
};

interface MenuProps {
  orientation: "horizontal" | "vertical";
  navData: navData[];
}

const Menu: React.FC<MenuProps> = ({ navData, orientation = "vertical" }) => {
  const pathname = usePathname();
  return (
    <nav
      className={`${styles.nav} ${
        orientation === "horizontal" ? styles.horizontal : styles.vertical
      }`}
    >
      <ul>
        {navData.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.id}>
              <Link
                href={item.href}
                className={isActive ? styles.activeLink : styles.disabledLink}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
