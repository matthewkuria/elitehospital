"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Our Doctor", href: "/our-doctor" },
    { name: "Appointment", href: "/appointment" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="navbar shadow-sm bg-[var(--color-background)] sticky top-0 z-50">
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content rounded-box z-50 mt-3 w-52 p-2 shadow bg-[var(--color-background)]"
          >
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    pathname === item.href
                      ? "text-[var(--color-primary)] font-semibold"
                      : "text-[var(--color-text-dark)]"
                  }
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo as Image */}
        <Link href="/">
          <Image
            src="/images/logo.png" // Put your logo in public/images/logo.png
            alt="Elite Complete Care LLC Logo"
            width={160}      // adjust width as needed
            height={50}      // adjust height as needed
            className="object-contain"
          />
        </Link>
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`px-3 py-2 rounded-md hover:bg-[var(--color-primary-hover)] hover:text-white transition ${
                  pathname === item.href
                    ? "bg-[var(--color-primary)] text-white font-semibold"
                    : "text-[var(--color-text-dark)]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
