import React from "react";
import Image from "next/image";
import Logo from "../../public/zdlogo_purple.webp";
import "./footer.css";
import Link from "next/link";
import RadialBackground from "../RadialBackground/RadialBackground";
import phone from "@/public/phone.webp";
import mail from "@/public/mail.webp";
import location from "@/public/location.webp";

const customerServiceLinks = [
  {
    id: 1,
    name: "Help Center",
    href: "/help-center",
  },
  {
    id: 2,
    name: "Contact Us",
    href: "/contactus",
  },
  {
    id: 3,
    name: "FAQS",
    href: "/faqs",
  },
];

const contactus = [
  {
    id: 1,
    name: "Ziniosedge Software Technologies Pvt Ltd.",
    logo: "",
  },
  {
    id: 2,
    name: "4th Floor, Gopalakrishna Complex, 45/3 Residency Road, Bangalore. INDIA",
    logo: location,
  },
  {
    id: 3,
    name: "+91 9591810823",
    logo: phone,
  },
  {
    id: 4,
    name: "Info@Zdviewer.com",
    logo: mail,
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="footer_top_line"></div>
      <div className="footer_container">
        <div className="footer_logo_container">
          {/* <RadialBackground
            style={{
              width: "60rem",
              height: "20rem",
              bottom: "-100%",
              left: "50%",
            }}
          /> */}
          <Link href="/">
            <Image src={Logo} alt="logo" priority title="ZD viewer logo" />
          </Link>
        </div>
        <div className="footer_links_container">
          <div className="footer_item_container">
            <h3>Customer Service</h3>
            <div className="footer_item">
              {customerServiceLinks.map((link) => (
                <Link key={link.id} href={link.href}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="footer_item_container">
            <h3>Quick Links</h3>
            <div className="footer_item">
              {customerServiceLinks.map((link) => (
                <Link key={link.id} href={link.href}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="footer_item_container">
            <h3>Contact Us</h3>
            <div className="footer_item">
              {contactus.map((contact) => {
                return (
                  <div
                    className="lolll"
                    key={contact.id}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "0.5rem",
                    }}
                  >
                    <Image src={contact.logo} />
                    <p className="lolll">{contact.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom_line"></div>
    </footer>
  );
};

export default Footer;
