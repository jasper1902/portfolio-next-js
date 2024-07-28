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
import { SafeUser } from "@/type/user";
import { signOut } from "next-auth/react";

type Props = {
  currentUser: SafeUser | null;
};

const NavbarClient = ({ currentUser }: Props) => {
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
          <NavbarBrand className="font-bold text-inherit cursor-pointer">
            <NextLink href="/">
              Home
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
          {currentUser && (
            <NavbarItem className="cursor-pointer text-slate-200 hover:text-slate-500">
              <NextLink href="/form" color="foreground">Add Project</NextLink>
            </NavbarItem>
          )}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden sm:flex">
            <NextLink
              color="foreground"
              href="https://github.com/jasper1902/portfolio-next-js"
            >
              <FaGithubSquare size={30} />
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            <Button color="primary" variant="flat">
              <NextLink href={`/ThanabodeeCV.pdf`}>
                <FaCloudDownloadAlt className="mr-2" />
                Download CV
              </NextLink>
            </Button>
          </NavbarItem>
          {currentUser && (
            <NavbarItem>
              <Button color="danger" variant="flat" onClick={() => signOut()}>
                Sign out
              </Button>
            </NavbarItem>
          )}
          {/* <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem> */}
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
          {currentUser && (
            <NavbarMenuItem className="cursor-pointer text-slate-200 hover:text-slate-500">
              <NextLink href="/form" color="foreground">Add Project</NextLink>
            </NavbarMenuItem>
          )}
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

export default NavbarClient;
