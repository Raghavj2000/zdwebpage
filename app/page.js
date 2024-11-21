// import { useState, useEffect } from "react";

import fingers from "@/public/fingers.webp";
import aim from "@/public/aim.webp";
import tv from "@/public/tv.webp";
import Marquee from "react-fast-marquee";
import headphone from "@/public/sofa_so_good.webp";
import dress from "@/public/beautiful_dress.webp";
import laptopSettings from "@/public/lined_box.webp";
import upArrow from "@/public/thin_upload.webp";
import thrredDBox from "@/public/cover_box.webp";
import car from "@/public/car.webp";
import Image from "next/image";
import "@/public/home.css";
import RadialBackground from "@/components/RadialBackground/RadialBackground";
import Footer from "@/components/Footer/Footer";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";
import Link from "next/link";
import big_car from "@/public/big_car.webp";
import big_elephant from "@/public/big_elephant.webp";
import cylinder_engine from "@/public/cylinder_engine.webp";
import earphones from "@/public/earphones.webp";
import fan from "@/public/fan.webp";
import Infusor_Pump from "@/public/Infusor Pump.webp";
import mobile from "@/public/mobile.webp";
import mri from "@/public/mri.webp";
import new_dress from "@/public/new-dress.webp";
import omron from "@/public/omron.webp";
import pram from "@/public/pram.webp";
import silver_jewelery from "@/public/silver_jewelery.webp";
import sofa from "@/public/sofa.webp";
import table from "@/public/table.webp";

export default function Home() {
  const marquee1 = [
    {
      id: 1,
      title: "big_car",
      logo: big_car,
    },
    {
      id: 2,
      title: "big_elephant",
      logo: big_elephant,
    },
    {
      id: 3,
      title: "cylinder_engine",
      logo: cylinder_engine,
    },
    {
      id: 4,
      title: "earphones",
      logo: earphones,
    },
    {
      id: 5,
      title: "fan",
      logo: fan,
    },
    {
      id: 6,
      title: "Infusor_Pump",
      logo: Infusor_Pump,
    },
    {
      id: 7,
      title: "mobile",
      logo: mobile,
    },
  ];
  const marquee2 = [
    {
      id: 1,
      title: "mri",
      logo: mri,
    },
    {
      id: 2,
      title: "new_dress",
      logo: new_dress,
    },
    {
      id: 3,
      title: "omron",
      logo: omron,
    },
    {
      id: 4,
      title: "sofa",
      logo: sofa,
    },
    {
      id: 5,
      title: "pram",
      logo: pram,
    },
    {
      id: 6,
      title: "silver_jewelery",
      logo: silver_jewelery,
    },
    {
      id: 7,
      title: "table",
      logo: table,
    },
  ];

  const withoutZdViewer = [
    {
      id: 1,
      descprition:
        "Customers Are Less Captivated Without Interactive 3D Experiences",
    },
    {
      id: 2,
      descprition: "Difficulty In Visualizing Complex Product Or Environments",
    },
    {
      id: 3,
      descprition:
        "Competitors With 3D Viewers Offer A More Appealing Experience",
    },
    {
      id: 4,
      descprition:
        "Lower Satisfaction And Increased Bounce Back Due To Unclear Expectations",
    },
  ];

  const withZdViewer = [
    {
      id: 1,
      descprition: "Boosts Engagement",
    },
    {
      id: 2,
      descprition: "Reduces Return Rates In E- Commerce",
    },
    {
      id: 3,
      descprition: "Facilitates Business Aglilty",
    },
    {
      id: 4,
      descprition: "Enhances Creativity And Innovation",
    },
    {
      id: 5,
      descprition: "Conversion Lift",
    },
  ];

  const userCenteredDesign = [
    {
      id: 1,
      desc: "User-Friendly Design With Effortless Interaction.",
    },
    {
      id: 2,
      desc: "Minimized Training Time With Elevated Overall User Satisfaction.",
    },
    {
      id: 3,
      desc: "Tailored To Suit Your Unique Requirements And Preferences.",
    },
    {
      id: 4,
      desc: " Unparalleled Level Of 3D Realism",
    },
  ];
  const productDifferentiator = [
    {
      id: 1,
      desc: "Capability To Render Complex Models.",
    },
    {
      id: 2,
      desc: "Capability To Render Complex Models. Viewer Ensures The Utmost Protection For Your Valuable 3D Models.",
    },
    {
      id: 3,
      desc: "Seamless Sharing Of 3D Models, Fostering Collaboration And Enhancing Communication Among Users",
    },
  ];

  const customerSatisfaction = [
    {
      id: 1,
      desc: "We Offer 24/7 Support By Phone And Email.",
    },
    {
      id: 2,
      desc: "We Have A Team Of Customer Service Representatives Who Can Help You To Resolve The Issues.",
    },
  ];

  const journeyArr = [
    {
      id: 1,
      title: "Generate 3D Model",
      step: "STEP-1",
      logo: laptopSettings,
      description:
        "Bring your 3D models to life with our dynamic visualization feature, complete with stunning animations and the ability to swap colors in real-time.",
    },
    {
      id: 2,
      title: "Upload 3D Model",
      step: "STEP-2",
      logo: upArrow,
      description:
        "Seamlessly upload your 3D models into our system with our platform’s easy upload, preview, and editing capabilities for hassle-free management and deployment.",
    },
    {
      id: 3,
      title: "Share 3D Model",
      step: "STEP-3",
      logo: thrredDBox,
      description:
        "If you do not have 3D models, let our skilled ZE team create your 3D model in .GLB format, based on your CAD file or high-resolution images with a tech pack. If you already have 3D models, you can skip this step entirely.",
    },
  ];

  return (
    <main>
      <section id="home">
        <video
          width={240}
          playsInline
          autoPlay
          loop
          muted
          style={{
            zIndex: "-1",
          }}
        >
          <source src="/fashion.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 className="home_header">
          Bring Your Product To <span id="heading_span">Life With 3D.</span>
        </h1>
        <Link href="/contactus">
          <PrimaryButton
            label={"Get Started"}
            color={"white"}
            backgroundColor={"#191a1d"}
            borderColor={"#8676e9"}
          />
        </Link>
      </section>
      <section id="visualizer">
        {/* <RadialBackground
          style={{
            width: "55rem",
            height: "20rem",
            top: "-3rem",
            zIndex: "0",
          }}
        /> */}
        <div className="visualizer_heading_container">
          <h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            3D Visualizer
          </h2>
          <h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            Enables Perpetual Sales Across All Channels Ensuring Seamless
            <br /> Access To Your Products Or Services At All Times
          </h3>
        </div>
        <div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="marquee_container"
        >
          <Marquee
            autoFill
            pauseOnHover
            speed={"30"}
            gradient
            gradientColor="rgba(0,0,0,0.7)"
          >
            {/*  TODO: the next step i..e it has to open marquee model in a  new page */}
            {marquee1.map((item) => (
              <div className="marquee_item" key={item.id}>
                <Image src={item.logo} alt={item.title} title={item.title} />
              </div>
            ))}
          </Marquee>
          <Marquee
            autoFill
            pauseOnHover
            direction="right"
            speed={"30"}
            gradient
            gradientColor="rgba(0,0,0,0.7)"
          >
            {/*  TODO: the next step i..e it has to open marquee model in a  new page */}
            {marquee2.map((item) => (
              <div className="marquee_item" key={item.id}>
                <Image src={item.logo} alt={item.title} title={item.title} />
              </div>
            ))}
          </Marquee>
          <div className="text_content">
            <p>
              {" "}
              Transform your ideas into stunning 3D visuals effortlessly.
              Whether you're designing, selling, or training, our all-in-one 3D
              viewer brings your vision to life.{" "}
            </p>
          </div>
        </div>
      </section>
      <section id="immersive">
        <h2>
          <span id="heading_span">Immersive Experience</span> Leads To <br />
          Tangible Outcomes
        </h2>
        <div className="immersive_image_container">
          <div className="immersive_card">
            <div className="immersive_img">
              <Image
                src={headphone}
                alt="headphone"
                title="heaphone"
                priority
              />
            </div>
            <button className="immersive_explore">Explore</button>
          </div>
          <div className="immersive_card">
            <div className="immersive_img">
              <Image src={dress} alt="headphone" title="dress" priority />
            </div>
            <button className="immersive_explore">Explore</button>
          </div>
          <div className="immersive_card">
            <div className="immersive_img">
              <Image src={car} alt="headphone" title="car" priority />
            </div>
            <button className="immersive_explore">Explore</button>
          </div>
        </div>
        <div className="text_content">
          <p>
            {" "}
            Experience the power of real-time visualization and elevate your
            projects to new heights. Don't just imagine it-see it, configure it,
            and make it a reality.{" "}
          </p>
        </div>
      </section>
      <section id="capabilities">
        <h2>
          <span id="heading_span">ZD </span>Viewer Capabilities
        </h2>
        <RadialBackground
          style={{
            width: "60%",
            height: "40rem",
            top: "10%",
            left: "0rem",
            background: "radial-gradient(#D1D1FF,#6C43F9,#426A9E00,#426A9E00)",
          }}
        />
        <div className="capabilities_container">
          <div className="capabilities_card">
            <div
              className="capabilities_header_container"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Image src={fingers} alt="tv" title="tv" />
              <h3>Easy Integration</h3>
            </div>
            <p
              style={{
                textAlign: "left",
              }}
            >
              Easily integrate the ZD viewer by copying the embed code, pasting
              it into your website's HTML, and publishing
            </p>
            <p
              style={{
                textAlign: "left",
              }}
            >
              Easily integrate the ZD viewer by copying the iframe link, pasting
              it into your website's HTML, adjusting attributes, and publishing
              your page.
            </p>
          </div>
          <div className="capabilities_card" style={{}}>
            <div
              className="capabilities_header_container"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Image src={tv} alt="tv" title="tv" />
              <h3>Omni-Channel Adoption</h3>
            </div>
            <p>
              Embed product configurators on your website to allow potential
              buyers to interact with and customize products, boosting
              engagement and conversion rates.
            </p>
          </div>
          <div className="capabilities_card">
            <div
              className="capabilities_header_container"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Image src={aim} alt="tv" title="tv" />
              <h3>Personalisation</h3>
            </div>
            <p>
              Tailoring your product, content, or services based on your and
              your customer's preference
            </p>
          </div>
        </div>
      </section>
      <section id="journey">
        <h3>
          We&apos;ve Got You Covered Throughout
          <span
            id="heading_span"
            style={{
              fontWeight: "500",
            }}
          >
            &nbsp;Your Journey
          </span>
        </h3>
        <div className="journey_container">
          {journeyArr.map((card) => (
            <div className="journey_card">
              <div className="journey_image_container">
                <Image src={card.logo} alt="tv" title="tv" />
                <p>{card.step}</p>
              </div>
              <div className="text_container">
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
          {/* <div className="journey_card">
            <div className="journey_image_container">
              <Image src={laptopSettings} alt="tv" title="laptopSettings" />
              <p>STEP-1</p>
            </div>
            <div className="text_container">
              <h4>Generate 3D Model</h4>
              <p>
                Bring your 3D models to life with our dynamic visualization
                feature, complete with stunning animations and the ability to
                swap colors in real-time.
              </p>
            </div>
          </div> */}
        </div>
      </section>

      <section id="transform">
        <video
          // TODO: Change the video
          width={240}
          autoPlay
          playsInline
          loop
          muted
          style={{
            zIndex: "-1",
          }}
        >
          <source src="/CarVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h4>
          Transform Your Vision Into Reality And Explore The World Of 3D With
          The Easy-To-Use ZD Viewer. Comprehensive Content Management System
          (CMS) With The Platform Offers Powerful Analytics, 3D Model Preview,
          And Easy Editing Capabilities All In One Place. Organize And Showcase
          Your Products With Ease Using The Sophisticated Catalog Platform.
          Analysing Views And Hotspot Clicks For Actionable Analytics.
        </h4>
      </section>
      <section id="threed_made_simple">
        <h3>
          <span id="heading_span">3D </span>Made Simple
        </h3>
        <div className="triangle"></div>
        <div className="threed_made_simple_container">
          <div className="threed_card">
            <div className="threed_card_heading_box">
              <h4>
                Without <span id="heading_span">Zd Viewer</span>
              </h4>
            </div>
            <div className="threed_text_container">
              {withoutZdViewer.map((item) => {
                return (
                  <div className="threed_text">
                    <div className="threed_dot" />
                    <p>{item.descprition}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="threed_card">
            <div className="threed_card_heading_box">
              <h4>
                With <span id="heading_span">Zd Viewer</span>
              </h4>
            </div>
            <div className="threed_text_container">
              {withZdViewer.map((item) => {
                return (
                  <div className="threed_text">
                    <div className="threed_dot" />
                    <p>{item.descprition}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="benefits">
        <h2>
          Benefits Of <span id="heading_span">Zd Viewer</span>
        </h2>
        <div className="benefits_container">
          <div className="benefits_card">
            <div className="top_benefits_line">
              <div className="circle"></div>
              <div className="circle2"></div>
            </div>
            <h3>
              USER <span id="heading_span">CENTERED DESIGN</span>
            </h3>
            <div className="benefits_text_container">
              {userCenteredDesign.map((item, index) => {
                return (
                  <div className="benefits_text">
                    <div className="benefits_dot" />
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="benefits_card">
            <div className="second_top_benefits_line">
              <div className="circle3"></div>
              <div className="circle4"></div>
            </div>
            <h3>
              PRODUCT <span id="heading_span">DIFFERENTIATOR</span>
            </h3>
            <div className="benefits_text_container">
              {productDifferentiator.map((item, index) => {
                return (
                  <div className="benefits_text">
                    <div className="benefits_dot" />
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="benefits_card">
            <div className="third_top_benefits_line">
              <div className="circle5"></div>
              <div className="circle6"></div>
            </div>
            <h3>
              CUSTOMER <span id="heading_span">SATISFACTION</span>
            </h3>
            <div className="benefits_text_container">
              {customerSatisfaction.map((item, index) => {
                return (
                  <div className="benefits_text">
                    <div className="benefits_dot" />
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="explore">
        {/* <RadialBackground
          style={{
            width: "50rem",
            height: "20rem",
            top: "4rem",
          }}
        /> */}
        <h2>Are There Any Specific Use Cases You&apos;re Considering ?</h2>
        <h3>Let's Explore Them Together !</h3>
        <h4>
          Try it today and revolutionize the way you create and present your
          work!
        </h4>
        <div className="explore_contact_container">
          {/* <div className="animation_block">
            <Image src={rightIcon} alt="right" />
          </div> */}
          <Link href="/contactus">
            <PrimaryButton
              label={"Get Started"}
              color={"white"}
              backgroundColor={"transparent"}
              borderColor={"#8676e9"}
              background={"linear-gradient(180deg,#8676E9 0%,#433B75 100%)"}
            />
          </Link>
        </div>
      </section>

      {/* Footer section */}
      <Footer />
    </main>
  );
}
