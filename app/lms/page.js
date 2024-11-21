import React from "react";
import "./lms.css";
import laptop from "@/public/big_laptop.webp";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import line from "@/public/line.webp";
import line_1 from "@/public/line_1.webp";
import line_3 from "@/public/line_3.webp";
import create from "@/public/create.webp";
import searchbar from "@/public/works-searchbar.webp";
import matrix from "@/public/matrix.webp";
import bigQues from "@/public/question.webp";
import message from "@/public/message.webp";
import bigPuzzle from "@/public/big-puzzle.webp";
import cube from "@/public/cube.webp";
import triangle from "@/public/threed-triangle.webp";
import box from "@/public/box-settings.webp";
import Link from "next/link";

const Lms = () => {
  const threedDIntegration = [
    {
      id: 1,
      title: "Elevating Interactivity And Engagement",
      logo: line,
    },
    {
      id: 2,
      title: "Improving Information Retention",
      logo: line_1,
    },
    {
      id: 3,
      title: "Interactive 3D Content",
      logo: line_3,
    },
  ];

  const worksArr = [
    {
      id: 1,
      title: "Create An Account & Log In To Access Your Dashboard",
      logo: create,
    },
    {
      id: 2,
      title: "Browse And Search For Your Enrolled Courses",
      logo: searchbar,
    },
    {
      id: 3,
      title:
        "Access And Engage With 3D Model & VR/AR Materials Within Your Courses.",
      logo: matrix,
    },
    {
      id: 4,
      title:
        "Take Quizzes, Submit Assignments & Track Your Progress Through The LMS",
      logo: bigQues,
    },
    {
      id: 5,
      title: "Get Assessment Feedback & Stats",
      logo: message,
    },
  ];

  const benfitsData = [
    {
      id: 1,
      title: "All-In-One 3D Learning & Assessment, No External LMS Needed.",
    },
    {
      id: 2,
      title: "Immersive Content Enhances Understanding ",
    },
    {
      id: 3,
      title: "Built-In Quizzes & Progress Tracking",
    },
    {
      id: 4,
      title: "Adaptive Learning Tailored To Students",
    },
    {
      id: 5,
      title: "Cost-Effective & Accessible Anytime",
    },
    {
      id: 6,
      title: "No Extra Software Required",
    },
    {
      id: 7,
      title: "Centralized Resource Management",
    },
  ];

  const howItWorks = [
    {
      id: 1,
      title:
        "Easily Incorporate 3D Content Into Your Existing LMS Without Needing To Switch Platforms. Our 3D Learning Modules Can Be Easily Integrated Into Your Current LMS, Enhancing Your Existing Educational Resources Without The Need For A New Platform, Simply Upload Our 3D Content Files To Your LMS And Embed Them Within Your Courses To Provide An Interactive Learning Experience.",
      logo: cube,
    },
    {
      id: 2,
      title:
        "Get Access 3D Models And VR/AR Content Directly Through Your LMS, Offering An Immersive And Engaging Way To Understand Complex Concept.",
      logo: triangle,
    },
    {
      id: 3,
      title:
        "Integrate 3D Content Into Your Quizzes And Assignments In Your LMS, Ensuring Continuous Assessment And Progress Tracking.",
      logo: box,
    },
  ];
  return (
    <>
      <section id="limitless">
        <div className="limitless_text_container">
          <div className="limitless_text">
            <h2>
              Discover The Limitless
              <br />
              <span id="heading_span">Power Of Learning</span>
            </h2>
            <p>
              with our LMS, you get more than just 3d learning. Benefit from a
              full suite of learning and assessment and management tools
              designed to support and streamline your entire learning process.
              Our platform is Crafted for ease of use ensuring that you spend
              more time learning and less time navigating
            </p>
          </div>
        </div>
        <div className="limitless_image_container">
          <Image src={laptop} alt="laptop" />
        </div>
      </section>
      <section id="embed">
        <h3>
          Embed Fully Interactive 3D Models Into Your Courses To Enhance Visual
          Learning Improving Information Retention. Our 3D Content Is Compatible
          With Any Lms And Can Be Scaled To Fit The Needs Of Your Institution
        </h3>
      </section>
      <section id="role">
        <h2>
          Role Of <span id="heading_span">3D Integration</span> Helps In
          Learning
        </h2>
        <div className="role_container">
          {threedDIntegration.map((item) => (
            <div className="role_card" key={item.id}>
              <Image src={item.logo} alt="line" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="works">
        <h2>
          How Does It <span id="heading_span">Work?</span>
        </h2>
        <div className="works_container">
          {worksArr.map((item) => (
            <div className="works_card" key={item.id}>
              <div className="image_container">
                <Image src={item.logo} alt="create" />
              </div>
              <div className="text_container">
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="training_benefits">
        <div className="training_benefits_container">
          <div className="training_benefits_text_container">
            <h2>Benefits Of 3D Training With LMS</h2>
            <div className="ul_container">
              {benfitsData.map((item) => (
                <div className="ul_item" key={item.id}>
                  <div className="lms_circle"></div>
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="training_benefits_image_container">
            <Image src={bigPuzzle} alt="big_puzzle" />
          </div>
        </div>
      </section>
      <section id="already">
        <div className="heading_container">
          <h2>
            Already Have <span id="heading_span">LMS?</span>
          </h2>
          <h3>Want To Just Use Our 3D Content?</h3>
        </div>
        <div className="already_container">
          {howItWorks.map((item) => {
            return (
              <div className="already_card">
                <div className="already_image_container">
                  <Image src={item.logo} alt={item.title} />
                  <div className="left_curve"></div>
                  <div className="right_curve"></div>
                </div>
                <div className="already_card_text_container">
                  <p>{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <div id="interested_virtual">
        <h2>Interested In Exploring Our 3D Training?</h2>
        <Link href="/contactus">Schedule a Demo</Link>
      </div>
      <Footer />
    </>
  );
};

export default Lms;
