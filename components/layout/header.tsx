"use client";

import Link from "next/link";
import { BiSolidChevronDown } from "react-icons/bi";
import { FiMenu, FiX } from "react-icons/fi";
import { appConfig } from "@/app/app-config";

type NavItem = {
  title: string;
  href: string;
  submenu?: NavItem[];
};

export default function Header() {
  const headerLogoHref = appConfig.logoUrl;

  const navItems: NavItem[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Our Services",
      href: "/our-services",
      submenu: [
        {
          title: "text",
          href: "#",
        },
        {
          title: "text",
          href: "#",
        },
        {
          title: "text",
          href: "#",
        },
      ],
    },
    {
      title: "Company",
      href: "/",
    },
  ];

  // on page resize, close mobile menu
  window.addEventListener("resize", () => {
      closeMobileMenu();
  });

  const openMobileMenu = () => {
    document.querySelector(".mainmenu")!.classList.toggle("active");
    document.querySelector(".header-backdrop-overlay")!.classList.add("active");
    document.querySelector(".close-menu")!.classList.add("active");
  };

  const closeMobileMenu = () => {
    document.querySelector(".mainmenu")!.classList.remove("active");
    document.querySelector(".header-backdrop-overlay")!.classList.remove("active");
    document.querySelector(".close-menu")!.classList.remove("active");
    document.querySelector(".submenu")!.classList.remove("active");
  };

  // toggle .active classname on element
  const toggleActive = (elementId: string) => {
    document.getElementById(elementId)!.classList.toggle("active");
  };

  const renderNavItems = (navItems: NavItem[]): any => {
    return (
        <ul className="mainmenu">
          {navItems.map((item, index) => {
            return (
              <li
                key={index}
                className={item.submenu ? "has-submenu" : undefined}
              >
                <Link onClick={closeMobileMenu} href={item.href}>
                  {item.title}
                </Link>
                {item.submenu && (
                  <span onClick={() => toggleActive(`${item.href}Submenu`)}>
                    <BiSolidChevronDown />
                  </span>
                )}

                {item.submenu && (
                  <ul className="submenu" id={`${item.href}Submenu`}>
                    {item.submenu.map((subItem, index) => {
                      return (
                        <li key={index}>
                          <Link
                            onClick={() => {
                              toggleActive(`${item.href}Submenu`);
                              closeMobileMenu();
                            }}
                            href={subItem.href}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
    );
  };

  return (
    <header className="header header-backdrop">

      <div onClick={() => closeMobileMenu()} className="header-backdrop-overlay"></div>

      <div className="header-wrapper" id="header-wrapper">
        <div className="header-left">
          <div className="logo-wrapper">
            <a href="/">
              <img
                src={headerLogoHref}
                alt="logo"
              />
            </a>
          </div>
        </div>
        <div className="header-right">
          <nav>
            {renderNavItems(navItems)}
          </nav>
          <div className="header-btn">
            <a className="btn-theme btn-theme-primary" href="/contact">
              Contact Us
            </a>
          </div>
          {/* Open button */}
          <div onClick={openMobileMenu} className="hamburger-menu">
            <FiMenu />
          </div>
          {/* Close button */}
          <div className="close-menu">
            <span onClick={closeMobileMenu}>
              <FiX />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
