"use client";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "./constants/index";
import Button from "./Button";
import Menu from "./Menu";
import React from "react";

const Navbar = () => {
  const [hamburg, sethamburg] = React.useState(false);
  const toggle = () => {
    sethamburg((prev) => !prev);
    console.log(hamburg);
  };

  return (
    <>
      <nav className=" flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
          <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-500 cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>

        <button onClick={toggle} className=" inline-block cursor-pointer lg:hidden">
          <Image
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
          />
        </button>
      </nav>
      {hamburg && <Menu />}
    </>
  );
};

export default Navbar;
