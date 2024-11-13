import React from "react";
import "./visualization.css";
import bike from "@/public/big_bike.webp";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import google from "@/public/google.webp";
import Footer from "@/components/Footer/Footer";
import settings from "@/public/big_settings.webp";
import website from "@/public/Organize And Showcase 1.webp";
import chain from "@/public/Break free 1.webp";
import glb from "@/public/GLB 1.webp";
import architect from "@/public/CMS 1.webp";
import laptop from "@/public/Flawless Browser 1.webp";
import hotspot from "@/public/Hotspot 2.webp";

const Visualization = () => {
  const marqueeItem = [
    {
      id: 1,
      title: "google",
      logo: google,
    },
  ];
  const boostUl = [
    {
      id: 1,
      title: "Engage Across Multiple Platforms",
    },
    {
      id: 2,
      title: "Visual Interaction And Real-Time Customization",
    },
    {
      id: 3,
      title: "Configure And Price The Product With The User",
    },
    {
      id: 4,
      title: "Share Product Information To The Required Channels",
    },
    {
      id: 5,
      title: "Rapid Prototyping",
    },
  ];
  const gridItem = [
    {
      id: 1,
      logo: website,
      desc: "Flawless Browser Compatibility With Enriching Experience Across All Platforms",
    },
    {
      id: 2,
      logo: chain,
      desc: "Break Free From The Platform's Dependency And Embrace Platform Independence",
    },
    {
      id: 3,
      logo: glb,
      desc: "Seamlessly Support And Showcase GLB Files.",
    },
    {
      id: 4,
      logo: architect,
      desc: "Comprehensive Content Management System (CMS)With The Platform Offers Powerful Analytics,3D Model Preview, And Easy Editing Capabilities All In One Place.",
    },
    {
      id: 5,
      logo: laptop,
      desc: "Organize And Showcase Your Products With Ease Using The Sophisticated Catalog Platform.",
    },
    {
      id: 6,
      logo: hotspot,
      desc: "Analysing Views And Hotspot Clicks For Actionable Analytics.",
    },
  ];

  return (
    <>
      <section id="threed_visualization">
        <div className="threed_visualization_text_container">
          <h2>
            <span id="heading_span">3D Visualization </span>For Enhanced
            Understanding And Engagement And Infinite Product
            <br /> Customization Possibilities In Real-Time
          </h2>
        </div>
        <div className="threed_visualization_image_container">
          <Image src={bike} alt="bike" />
        </div>
      </section>
      <section id="connect_with_everything">
        <div className="connect_heading_container">
          <h2>
            <span id="heading_span">Connects</span> With Everything, Works With
            Anything
          </h2>
          <h3>
            Integrate Our Product With Any Software In Minutes For A Seamless
            Workflow
          </h3>
        </div>
        <div className="connect_marquee_container">
          <Marquee
            autoFill
            pauseOnHover
            speed={"50"}
            gradient
            gradientColor="rgba(0,0,0,0.7)"
          >
            {/*  TODO: the next step i..e it has to open marquee model in a  new page */}
            {marqueeItem.map((item) => (
              <div className="connect_marquee_item" key={item.id}>
                <Image src={item.logo} alt={item.title} title={item.title} />
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      <section id="boost">
        <div className="boost_father_container">
          <div className="boost_one_box">
            <div className="boost_one_bottom_box"></div>
            <div className="boost_one_top_box"></div>
            <div className="boost_left_box"></div>
            <div className="boost_right_box"></div>
            <div className="arrow_box">
              <div className="left_arrow"></div>
              <div className="right_arrow"></div>
            </div>
            <div className="boost_one_box_content">
              <h2>
                Boost Your Sales With
                <span id="heading_span"> 3D Configurable</span> Solutions
              </h2>
              <p>
                Sales Methods Evolve—What Worked Last Year Might Not Be As
                Effective Today. With Zdviewer, You Ensure Your Team Remains At
                The Forefront Of Digital Sales, Always Adapting And Advancing
                With The Changing Market. Whether You're Giving An Overview Of
                Your Product Selection Or Highlighting Individual Products Or
                Features, You Can Incorporate 360-Degree Product Views And 3D
                Images To Effectively Showcase Your Products.
              </p>
            </div>
          </div>
          <div className="boost_two_box">
            <div className="boost_two_bottom_box"></div>
            <div className="boost_two_top_box"></div>
            <div className="boost_two_right_box"></div>
            <div className="boost_two_content">
              <h2>
                Why <span id="heading_span">ZD Viewer</span> product
                Configuration?
              </h2>
              <div className="ul_container">
                {boostUl.map((item) => (
                  <div className="ul_item" key={item.id}>
                    <div className="ul_triangle"></div>
                    <p>{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="technological">
        <div className="technological_text_container">
          <h2>
            <span id="heading_span">Power</span> Packed Features
          </h2>
          <div className="prowess_container">
            <Image src={settings} alt="settings" />
            <h3>Technological Prowess</h3>
          </div>
        </div>
        <div className="technological_grid_container">
          {gridItem.map((item) => (
            <div className="technological_grid_item" key={item.id}>
              <div className="technological_grid_item_image">
                <Image src={item.logo} alt={item.desc} />
              </div>
              <div className="technological_grid_item_text">
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Visualization;
