"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);

  function closeNavigationMenu() {
    setIsNavigationMenuOpen(false);
  }

  function toggleNavigationMenu() {
    setIsNavigationMenuOpen((isOpen) => !isOpen);
  }

  return (
    <header
      className={styles.header}
      data-navigation-menu-open={isNavigationMenuOpen}
    >
      <div className={styles.navigationMenuPanel}>
        <nav
          id="mobile-navigation-panel"
          className={styles.mainNavigation}
          aria-label="Основна навігація"
        >
          <Link
            href="#services"
            className={styles.mainNavigationLink}
            onClick={closeNavigationMenu}
          >
            Послуги
          </Link>

          <Link
            href="#cases"
            className={styles.mainNavigationLink}
            onClick={closeNavigationMenu}
          >
            Кейси
          </Link>

          <Link
            href="#process"
            className={styles.mainNavigationLink}
            onClick={closeNavigationMenu}
          >
            Як працюю
          </Link>

          <Link
            href="#contacts"
            className={styles.mainNavigationLink}
            onClick={closeNavigationMenu}
          >
            Контакти
          </Link>
        </nav>
      </div>

      <button
        type="button"
        className={styles.navigationMenuButton}
        aria-label={isNavigationMenuOpen ? "Закрити меню" : "Відкрити меню"}
        aria-expanded={isNavigationMenuOpen}
        aria-controls="mobile-navigation-panel"
        onClick={toggleNavigationMenu}
      >
        <span className={styles.navigationMenuIcon}>
          <span className={styles.navigationMenuBar} />
          <span className={styles.navigationMenuBar} />
          <span className={styles.navigationMenuBar} />
        </span>
      </button>
    </header>
  );
}
