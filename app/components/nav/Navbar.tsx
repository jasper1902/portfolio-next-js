"use client";
import { FaGithubSquare, FaCloudDownloadAlt } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuItem,
  NavbarMenu,
  NavbarMenuToggle,
  Link as NextLink,
} from "@nextui-org/react";
import { useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: "Projects", to: "home" },
    { title: "About Me", to: "about" },
    { title: "Contact", to: "contact" },
  ];

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <NextLink href="/">
              <p className="font-bold text-inherit">Logo</p>
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((item) => (
            <NavbarItem
              className="cursor-pointer text-slate-200 hover:text-slate-500"
              key={item.title}
            >
              <ScrollLink smooth={true} duration={500} to={item.to}>
                {item.title}
              </ScrollLink>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden sm:flex">
            <NextLink
              color="foreground"
              href="https://github.com/jasper1902/Projects_portfolio"
            >
              <FaGithubSquare size={30} />
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            <Button color="primary" variant="flat">
              <NextLink href={`./ThanabodeeCV.pdf`}>
                <FaCloudDownloadAlt className="mr-2" />
                Download CV
              </NextLink>
            </Button>
          </NavbarItem>
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item.title}-${index}`}
              className="cursor-pointer text-slate-200 hover:text-slate-500"
            >
              <ScrollLink smooth={true} duration={500} to={item.to}>
                {item.title}
              </ScrollLink>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <NextLink
              color="foreground"
              href="https://github.com/jasper1902/Projects_portfolio"
            >
              <FaGithubSquare size={30} />
            </NextLink>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Nav;
