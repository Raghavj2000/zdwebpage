"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./newNavbar.css";
import Logo from "../../public/zdlogo_purple.webp";
import Link from "next/link";
import upArrow from "../../public/uparrow.webp";
import visualization from "@/public/visualization.webp";
import configurator from "@/public/configurator.webp";
import walkthrough from "@/public/walkthrough_logo.webp";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import hamburger from "../../public/hamburger.webp";
import close from "../../public/close.webp";

const NewNavbar = () => {
  const pathname = usePathname();
  const navLinks = [
    {
      title: "Platform",
      href: "/",
    },
    {
      title: "Product Showcase",
      href: "",
      subLinks: [
        {
          id: 1,
          title: "3D Product Visualisation",
          desc: "Bring your Vision to life, visualize the Possibilities",
          logo: visualization,
          href: "/visualization",
        },
        {
          id: 2,
          title: "3D LMS",
          desc: "Customize in real-time, Personalization perfected",
          logo: configurator,
          href: "/lms",
        },
        {
          id: 3,
          title: "3D Walkthrough",
          desc: "Immersive Spaces at your Fingertips",
          logo: walkthrough,
          href: "/walkthrough",
        },
      ],
    },
    {
      title: "Resources",
      href: "",
    },
    {
      title: "AI Beta",
      href: "",
    },
  ];
  const mobNavLinks = [
    {
      title: "Platform",
      href: "/",
    },
    {
      title: "Product Showcase",
      href: "",
      subLinks: [
        {
          id: 1,
          title: "3D Product Visualisation",
          desc: "Bring your Vision to life, visualize the Possibilities",
          logo: visualization,
          href: "/visualization",
        },
        {
          id: 2,
          title: "3D LMS",
          desc: "Customize in real-time, Personalization perfected",
          logo: configurator,
          href: "/lms",
        },
        {
          id: 3,
          title: "3D Walkthrough",
          desc: "Immersive Spaces at your Fingertips",
          logo: walkthrough,
          href: "/walkthrough",
        },
      ],
    },
    {
      title: "Resources",
      href: "",
    },
    {
      title: "AI Beta",
      href: "",
    },
    {
      title: "Contact Us",
      href: "/contactus",
    },
  ];

  const [showMenu, setShowMenu] = useState(false);
  const [activeSubLinks, setActiveSubLinks] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [expandedLink, setExpandedLink] = useState(null);

  const handleMouseEnter = (subLinks) => {
    setActiveSubLinks(subLinks);
    console.log(activeSubLinks);
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
    setActiveSubLinks(null);
  };

  const toggleExpandLink = (index) => {
    setExpandedLink(expandedLink === index ? null : index);
  };
  return (
    <div className="navbar_container">
      <div className="logo_container">
        <Link href="/">
          <Image src={Logo} alt="logo" priority title="ZD viewer logo" />
        </Link>
      </div>
      <nav className="nav_container">
        {navLinks.map((link) => (
          <Link key={link.id} href={link.href}>
            <div
              className="nav_item"
              onClick={() =>
                link.href === "" && !link.subLinks && toast.info("Coming Soon!")
              }
              style={{
                background:
                  pathname === link.href
                    ? "linear-gradient(#8676e9, #433b75)"
                    : "",
              }}
              onMouseEnter={() =>
                link.subLinks && handleMouseEnter(link.subLinks)
              }
              onMouseLeave={() => setShowMenu(false)}
            >
              <p>{link.title}</p>
              {link.subLinks && (
                <Image
                  src={upArrow}
                  alt="up arrow"
                  title="up arrow"
                  style={{
                    transform: showMenu ? "rotate(0deg)" : "rotate(180deg)",
                  }}
                />
              )}
            </div>
          </Link>
        ))}
        {showMenu && activeSubLinks && (
          <div
            className="subNav_bar"
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="subnav_container">
              {activeSubLinks.map((subLink) => (
                <Link key={subLink.id} href={subLink.href}>
                  <div
                    className="subnav_item"
                    onClick={() => {
                      setShowMenu(false);
                      setActiveSubLinks(null);
                    }}
                    key={subLink.id}
                    style={{
                      backgroundColor:
                        pathname === subLink.href ? "#2e2e3a" : "",
                    }}
                  >
                    <Image src={subLink.logo} />
                    <div className="subnav_text_container">
                      <h3>{subLink.title}</h3>
                      <p>{subLink.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      <Link href="/contactus">
        <div
          className="contact_us"
          style={{ display: pathname === "/contactus" ? "none" : "" }}
        >
          Contact Us
        </div>
      </Link>
      <div className="mobile_nav_container">
        <div
          className="mobile_navbar"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <Image src={showMobileMenu ? close : hamburger} alt="menu" />
        </div>
      </div>
      {showMobileMenu && (
        <div className="mobile_subMenu">
          {mobNavLinks.map((link, index) => (
            <div key={index}>
              <Link
                href={link.href}
                className="mobile_nav_item"
                onClick={() => {
                  if (link.href === "" && !link.subLinks) {
                    toast.info("Coming soon");
                  }
                  if (link.subLinks) {
                    toggleExpandLink(index);
                  } else {
                    setShowMobileMenu(false);
                  }
                }}
              >
                <p>{link.title}</p>
                {link.subLinks && (
                  <Image
                    src={upArrow}
                    alt="up arrow"
                    title="up arrow"
                    style={{
                      transform:
                        expandedLink === index
                          ? "rotate(0deg)"
                          : "rotate(180deg)",
                    }}
                  />
                )}
              </Link>
              {expandedLink === index && link.subLinks && (
                <div className="mobile_subnav_container">
                  {link.subLinks.map((subLink) => (
                    <Link key={subLink.id} href={subLink.href}>
                      <div
                        className="mobile_subnav_item"
                        onClick={() => {
                          setShowMobileMenu(false);
                          setExpandedLink(null); // Close the sublink menu after selecting a sublink
                        }}
                      >
                        <div className="mobile_subnav_text">
                          <p>{subLink.title}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewNavbar;
