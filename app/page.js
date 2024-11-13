// import { useState, useEffect } from "react";
import hourGlass from "@/public/hourglass.webp";
import flowerPot from "@/public/flower_pot.webp";
import woodenSofa from "@/public/wooden_Sofa.webp";
import woodenChair from "@/public/woodenChair.webp";
import fingers from "@/public/fingers.webp";
import aim from "@/public/aim.webp";
import tv from "@/public/tv.webp";
import Marquee from "react-fast-marquee";
import rightIcon from "@/public/image.webp";
import potIcon from "@/public/pot.webp";
import rockingChair from "@/public/rockingchair2.webp";
import visualize from "@/public/visualize.webp";
import upload from "@/public/Upload.webp";
import generate from "@/public/generate.webp";
import headphone from "@/public/headphone.webp";
import dress from "@/public/beautiful_dress.webp";
import laptopSettings from "@/public/GIFF1.webp";
import upArrow from "@/public/GIFF2.webp";
import thrredDBox from "@/public/GIFF3.webp";
import car from "@/public/car.webp";
import Image from "next/image";
import "@/public/home.css";
import RadialBackground from "@/components/RadialBackground/RadialBackground";
import Footer from "@/components/Footer/Footer";
// import PrimaryButton from "../components/PrimaryButton/PrimaryButton";
import Link from "next/link";

export default function Home() {
  const marquee1 = [
    {
      id: 1,
      title: "Hourglass",
      logo: hourGlass,
    },
    {
      id: 2,
      title: "FlowerPot",
      logo: flowerPot,
    },
    {
      id: 3,
      title: "Wooden Sofa",
      logo: woodenSofa,
    },
    {
      id: 4,
      title: "Wooden Chair",
      logo: woodenChair,
    },
  ];

  const capabiltiesArr = [
    {
      id: 1,
      number: "01",
      title: "Omni-Channel Adoption",
      descprition:
        "Embed product configurators on your website to allow potential buyers to interact with and customize products, boosting engagement and conversion rates. Embed interactive configurators on social media platforms, Partnerships and Third-Party Websites and share links via Email Campaigns to reach potential buyers and leverage high engagement rates Integrate product configurators into mobile apps to provide a seamless and personalized user experience, enhancing customer satisfaction and loyalty.",
      image: hourGlass,
    },
    {
      id: 2,
      number: "02",
      title: "Easy Integration",
      descprition:
        "Easily integrate the ZD viewer by copying the embed code, pasting it into your website's HTML, and publishing Easily integrate the ZD viewer by copying the iframe link, pasting it into your website's HTML, adjusting attributes, and publishing your page.",
      image: rockingChair,
    },

    {
      id: 3,
      number: "03",
      title: "Personalisation",
      descprition:
        "Tailoring your product, content, or services based on your and your customer's preference",
      image: potIcon,
    },
  ];

  const journeyArr = [
    {
      id: 1,
      title: "Visualize The 3D Model",
      descprition:
        "Bring your 3D models to life with our dynamic visualization feature, complete with stunning animations and the ability to swap colors in real-time.",
      image: visualize,
    },
    {
      id: 2,
      title: "Upload 3D Model",
      descprition:
        "Seamlessly upload your 3D models into our system with our platform’s easy upload, preview, and editing capabilities for hassle-free management and deployment.",
      image: upload,
    },
    {
      id: 3,
      title: "Generate 3D Model",
      descprition:
        "If you do not have 3D models, let our skilled ZE team create your 3D model in .GLB format, based on your CAD file or high-resolution images with a tech pack. If you already have 3D models, you can skip this step entirely.",
      image: generate,
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

  return (
    <main>
      <section id="home">
        <video
          width={240}
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
          {/* <PrimaryButton
            label={"Get Started"}
            color={"white"}
            backgroundColor={"#191a1d"}
            borderColor={"#8676e9"}
          /> */}
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
            speed={"20"}
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
            speed={"20"}
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

        {/* <RadialBackground
          style={{
            width: "55rem",
            height: "20rem",
            top: "-3rem",
          }}
        /> */}
        <div className="immersive_image_container">
          <div className="immersive_card">
            <div className="immersive_img">
              <Image src={headphone} alt="headphone" title="heaphone" />
            </div>
            <button className="immersive_explore">Explore</button>
          </div>
          <div className="immersive_card">
            <div className="immersive_img">
              <Image src={dress} alt="headphone" title="dress" />
            </div>
            <button className="immersive_explore">Explore</button>
          </div>
          <div className="immersive_card">
            <div className="immersive_img">
              <Image src={car} alt="headphone" title="car" />
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

      <section id="journey_container">
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
        {/* <RadialBackground
          style={{
            width: "45rem",
            height: "20rem",
            top: "-4rem",
          }}
        /> */}

        <div className="journey_card_container">
          <div className="eclipse1"></div>
          <div className="eclipse1"></div>
          <div className="eclipse1"></div>
          <div className="journey_card">
            <Image src={laptopSettings} alt="laptop" title="laptop" />
            <h3>Visualize The 3D model</h3>
            <p>
              Bring your 3D models to life with our dynamic visualization
              feature, complete with stunning animations and the ability to swap
              colors in real-time.
            </p>
          </div>
          <div className="journey_card">
            <Image src={upArrow} alt="upArrow" title="upArrow" />
            <h3>Upload 3D Model</h3>
            <p>
              Seamlessly upload your 3D models into our system with our
              platform&apos;s easy upload, preview, and editing capabilities for
              hassle-free management and deployment.
            </p>
          </div>
          <div className="journey_card">
            <Image src={thrredDBox} alt="thrredDBox" title="thrredDBox" />
            <h3>Generate 3D model</h3>
            <p>
              If you do not have 3D models, let our skilled ZE team create your
              3D model in .GLB format, based on your CAD file or high-resolution
              images with a tech pack. If you already have 3D models, you can
              skip this step entirely.
            </p>
          </div>
        </div>
      </section>
      <section id="transform">
        <video
          // TODO: Change the video
          width={240}
          autoPlay
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
            {/* <PrimaryButton
              label={"Get Started"}
              color={"white"}
              backgroundColor={"transparent"}
              borderColor={"#8676e9"}
              background={"linear-gradient(180deg,#8676E9 0%,#433B75 100%)"}
            /> */}
          </Link>
        </div>
      </section>

      {/* Footer section */}
      <Footer />
    </main>
  );
}
