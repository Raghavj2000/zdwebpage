import React from "react";
import "./walkthrough.css";
import Image from "next/image";
import bricks from "../../public/Group 1219.webp";
import Footer from "@/components/Footer/Footer";
import puzzles from "@/public/bricks.webp";
import cloud from "@/public/cloud.webp";
import cpu from "@/public/cpu.webp";
import upload from "@/public/upload_walkthrough.webp";
import clock from "@/public/clock.webp";
import specs from "@/public/specs.webp";
import team from "@/public/team.webp";
import collect from "@/public/correct.webp";
import bulb from "@/public/bulb.webp";

import Link from "next/link";

const Walkthrough = () => {
  return (
    <>
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
          <span id="heading_span">Walkthrough </span> Video
        </h1>
      </section>
      <section id="step">
        <div className="step_container">
          <div className="step_text_container">
            <h3>
              Step Into A World Where Your{" "}
              <span id="heading_span">Project Come Alive</span>
            </h3>
            <h4>
              Dive Into Immersive Environments Thats Transcend Traditional
              Boundaries <br />
              Whether Its Architecural Designs Or Virtual Tours, Unlock A New
              Dimension Of Engagement And Understanding
            </h4>
          </div>
          <Image src={bricks} alt="bricks" />
        </div>
      </section>

      {/* Common challenges */}
      <section id="common_challenge">
        <div className="common_challenge_container">
          <div className="common_bottom_box">
            <div className="inner_bottom_box"></div>
          </div>
          <h3>
            Common Challeneges in <span id="heading_span">Real-Time</span>
            <br /> Production Moniroting
          </h3>
          <div className="common_challenge_block">
            <div className="common_challenge_card">
              <div className="third_circle">
                <div className="inside_circle">1</div>
              </div>
              <div className="left_line"></div>
              <div className="center_line"></div>

              <div className="common_challenge_text_box">
                <p>
                  Inefficient Coordination Plagues Large Manufacturing Sites,
                  Hindering Real-Time Assessment Of Production, Logistics,
                  Safety, Quality, And Maintenance Processes. This Results In
                  Prolonged Breakdowns And Heightened Production Idle Time,
                  Stemming From The Need For Extensive Walks And Phone Calls
                  Together Information.
                </p>
              </div>
              <div className="common_challenge_image_box">
                <Image src={puzzles} alt="puzzles" title="puzzles" />
              </div>
            </div>
            <div className="common_challenge_card">
              <div className="center_line"></div>
              <div className="third_circle">
                <div className="inside_circle">2</div>
              </div>
              <div className="left_line"></div>
              <div className="common_challenge_text_box">
                <p>
                  Unstructured Material Retrieval And Uneven Operator
                  Utlilization In Logistics Operations Lead To Frequent
                  Production Downtime And Inefficiencies , Highlighting The Need
                  For Optimized Material Handling Strategies
                </p>
              </div>
              <div className="common_challenge_image_box">
                <Image src={cloud} alt="cloud" title="cloud" />
              </div>
            </div>
            <div className="common_challenge_card">
              <div className="final_circle">
                <div className="inside_circle"></div>
              </div>
              <div className="third_circle">
                <div className="inside_circle">3</div>
              </div>
              <div className="left_line"></div>
              <div className="center_line"></div>
              <div className="bottom_line"></div>
              <div className="common_challenge_text_box">
                <p>
                  Lack Of Data On Internal Logistics Inefficiencies Leads To
                  Delays In Deliveries,Prompting Consideration Of Purchasing
                  Additional Forklifts As A Solution
                </p>
              </div>
              <div className="common_challenge_image_box">
                <Image src={cpu} alt="cpu" title="cpu" />
              </div>
            </div>
          </div>
          <div className="solution_container">
            <h3>
              <span id="heading_span">SOLUTION</span>
            </h3>
            <p>
              Transform manufacturing operations with our web-based solution,
              seamlessly integrating any 3rd party software. Access critical
              data via our intuitive 3D digital twin app on any device,
              empowering shop floor employees with real-time insights and
              enhancing data transparency to optimize decision-making and
              operational efficiency.
            </p>
          </div>
        </div>
      </section>
      <section id="virtual_walkthrough">
        <h2>
          Get Started With <span id="heading_span">Virtual Walkthrough</span>
        </h2>
        <div className="virtual_walkthrough_container">
          <div className="virtual_one">
            <div className="virtual_image_container">
              <Image src={upload} alt="upload" title="upload" />
            </div>
            <p>
              Upload Your CAD File And Images Of The Area For Achieving Realism
            </p>
          </div>
          <div className="virtual_two">
            <div className="virtual_image_container">
              <Image src={clock} alt="clock" title="clock" />
            </div>
            <p>We Will Provide The Perfect Experience Within Hours</p>
          </div>
          <div className="virtual_three">
            <div className="virtual_image_container">
              <Image src={specs} alt="specs" title="specs" />
            </div>
            <p>Get Ready To Make The Virtual Walkthrough Live</p>
          </div>
        </div>
      </section>
      <section id="imaginary">
        <h2>
          Looking to Create a Virtual Walkthrough of An
          <span id="heading_span"> Imaginary Area ?</span>
        </h2>
        <div className="imaginary_container">
          <div className="left_imaginary">
            <div className="left_top_imaginary">
              <div className="virtual_image_container">
                <Image src={team} alt="team" title="team" />
              </div>
              <p>Connect With Zd Viewer Team</p>
            </div>
            <div className="left_bottom_imaginary">
              <div className="virtual_image_container">
                <Image src={collect} alt="collect" title="collect" />
              </div>
              <p>We Will Provide The Perfect Experience Within Hours</p>
            </div>
          </div>
          <div className="right_imaginary">
            <div className="right_top_imaginary">
              <div className="virtual_image_container">
                <Image src={bulb} alt="bulb" title="bulb" />
              </div>
              <p>
                We Have Got You Covered, Sketch Up Or Just Share Your Idea, We
                Will Bring Your Imagination To Life
              </p>
            </div>
            <div className="right_bottom_imaginary">
              <div className="virtual_image_container">
                <Image src={specs} alt="specs" title="upload" />
              </div>
              <p>Get Ready To Make The Virtual Walkthrough Live</p>
            </div>
          </div>
        </div>
      </section>
      <div id="interested_virtual">
        <h2>
          Interested In <span id="heading_span">Virtual Walkthrough?</span>
        </h2>
        <Link href="/contactus">Schedule a Demo</Link>
      </div>
      <Footer />
    </>
  );
};

export default Walkthrough;
