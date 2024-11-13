"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLinks = ({ links }) => {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  // Use effect to close the menu when navigating to a new page
  useEffect(() => {
    if (pathname !== "/product-showcase") {
      setShowMenu(false); // Automatically close the menu if not on the Product Showcase page
    }
  }, [pathname]);

  const handleLinkClick = (title) => {
    if (title === "Product Showcase") {
      setShowMenu((prevState) => !prevState);
    } else {
      setShowMenu(false); // Close the menu when clicking any other link
    }
  };

  return (
    <>
      {showMenu && (
        <div className="sub_nav_bar">
          <div className="sub_nav_container">
            {/* Your content for the menu */}
            <div className="first_nav">
              <div className="first_nav_item">
                <div className="first_nav_item_top">
                  <h4>ZD VIEWER</h4>
                  <p>
                    Visualise, Personalise And Interact With Any Digital Twin Of
                    The Product Unbounded And Drive Engagement And Satisfaction
                  </p>
                </div>
                <div className="first_nav_item_top">
                  <h4>CAPABILITIES</h4>
                  <p style={{ lineHeight: "1.2rem" }}>
                    Omni-Channel Adoption
                    <br />
                    Easy Integration
                    <br />
                    Personalization
                  </p>
                </div>
              </div>
            </div>
            <div className="second_nav">
              <Link href="/visualization" className="second_nav_item">
                <h4>3D PRODUCT VISUALIZATION</h4>
                <p>
                  Visualize Your Product Before You Buy. Try Out Different
                  Options In Our 3D Configurator
                </p>
              </Link>
              <Link href="/lms" className="second_nav_item">
                <h4>3D TRAINING</h4>
                <p>
                  Visualize, Personalize, And Interact With Any Digital Twin Of
                  The Product Unbounded
                </p>
              </Link>
            </div>
            <div className="second_nav">
              <div className="second_nav_item">
                <h4>3D CONFIGURATION</h4>
                <p>
                  Visualize, Personalize, And Interact With Any Digital Twin Of
                  The Product Unbounded
                </p>
              </div>
              <Link href={"/walkthrough"} className="second_nav_item">
                <h4>3D WALKTHROUGH</h4>
                <p>
                  Visualize, Personalize, And Interact With Any Digital Twin Of
                  The Product Unbounded
                </p>
              </Link>
            </div>
          </div>
        </div>
      )}

      <Link
        className="nav_item"
        href={links.href}
        title={links.title}
        style={{
          backgroundImage:
            pathname === links.href ? "linear-gradient(#8676E9, #433B75)" : "",
        }}
        onClick={() => handleLinkClick(links.title)}
      >
        {links.title}
      </Link>
    </>
  );
};

export default NavLinks;
