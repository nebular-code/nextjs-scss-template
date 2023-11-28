"use client";

import Image from "next/image";
import Link from "next/link";
import { BiSolidChevronDown } from "react-icons/bi";
import { FiMenu, FiX } from "react-icons/fi";

type NavItem = {
  title: string;
  href: string;
  submenu?: NavItem[];
};

export default function Header() {
  const headerLogoHref = "/assets/images/logo-placeholder-image.png";

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

  const openMobileMenu = () => {
    document.querySelector(".header-wrapper")!.classList.toggle("menu-open");
    document.querySelector(".header-backdrop-overlay")!.classList.add("active");
  };

  const closeMobileMenu = () => {
    document.querySelector(".header-wrapper")!.classList.remove("menu-open");
    document
      .querySelector(".header-backdrop-overlay")!
      .classList.remove("active");

    document.querySelector(".submenu")!.classList.remove("active");
  };

  // toggle .active classname on element
  const toggleActive = (elementId: string) => {
    document.getElementById(elementId)!.classList.toggle("active");
  };

  const renderNavItems = (navItems: NavItem[]) => {
    return (
      <ul className="mainmenu">
        {navItems.map((item, index) => {
          return (
            <li
              key={index}
              className={item.submenu ? "has-dropdown" : undefined}
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
    <header className="header header-backdrop formobile-menu">
      <div
        onClick={() => closeMobileMenu()}
        className="header-backdrop-overlay"
      ></div>
      <div className="header-wrapper" id="header-wrapper">
        <div className="header-left">
          <div className="logo">
            <a href="/">
              <Image
                width={50}
                height={50}
                className="header-logo"
                src={headerLogoHref}
                alt="logo"
              />
            </a>
          </div>
        </div>
        <div className="header-right">
          <nav className="mainmenunav d-lg-block">
            {renderNavItems(navItems)}
          </nav>
          <div className="header-btn">
            <a className="rn-btn" href="/contact">
              <span>CONTACT US</span>
            </a>
          </div>
          {/* Open button */}
          <div className="hamburger-menu d-block d-lg-none pl--20">
            <span onClick={openMobileMenu} className="menutrigger text-white">
              <FiMenu />
            </span>
          </div>
          {/* Close button */}
          <div className="close-menu d-block d-lg-none">
            <span onClick={closeMobileMenu} className="closeTrigger">
              <FiX />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
