"use client";

import React, { useState } from "react";
import "./contact.css";
import Footer from "@/components/Footer/Footer";
import mail from "@/public/mail.webp";
import phone from "@/public/phone.webp";
import Image from "next/image";

import { ToastContainer, toast } from "react-toastify";
import { mappls, mappls_plugin } from "mappls-web-maps";
import { useEffect, useRef } from "react";

const mapplsClassObject = new mappls();
const mapplsPluginObject = new mappls_plugin();

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    companyName: "",
    mobileNumber: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    message: "",
    companyName: "",
    mobileNumber: "",
  });

  const mapRef = useRef(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const loadObject = {
    map: true,
    layer: "raster", // Optional Default Vector
    version: "3.0", // // Optional, other version 3.5 also available with CSP headers
    libraries: ["polydraw"], //Optional for Polydraw and airspaceLayers
    plugins: ["direction"], // Optional for All the plugins
  };
  useEffect(() => {
    mapplsClassObject.initialize(
      "edc7c88bda0c5b0183b05a65471aca42",
      loadObject,
      () => {
        const newMap = mapplsClassObject.Map({
          id: "map",
          properties: {
            center: [12.9735, 77.6094],
            zoom: 17,
            boxZoom: false,
          },
        });

        newMap.on("load", () => {
          setIsMapLoaded(true);

          // Add a marker at the specified coordinates
          const marker = new mapplsClassObject.Marker({
            map: newMap,
            position: [12.9735, 77.6094], // Your coordinates
            draggable: false, // Set to true if you want a draggable marker
          });

          marker.addTo(newMap); // Add marker to the map
        });

        mapRef.current = newMap;
      }
    );

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  const validate = () => {
    let valid = true;
    let errors = {};

    // Full name validation
    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required";
      valid = false;
    } else if (/\d/.test(formData.fullName)) {
      errors.fullName = "Full name cannot contain numbers";
      valid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
      valid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = "Message is required";
      valid = false;
    }

    // Company Name validation
    if (!formData.companyName.trim()) {
      errors.companyName = "Company name is required";
      valid = false;
    }

    // Mobile Number validation
    if (!formData.mobileNumber.trim()) {
      errors.mobileNumber = "Mobile number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      errors.mobileNumber = "Mobile number must be 10 digits";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear the error for the specific field when typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit the form data
      console.log("Form data:", formData);
      const bodyData = {
        name: formData.fullName,
        company: formData.companyName,
        mobile: formData.mobileNumber,
        email: formData.email,
        requirements: formData.message,
      };
      const recipient = "info@zdviewer.com";
      // const recipient = "amboji.a@ziniosedge.com";
      const subject = "ZDViewer - Request for Demo";
      const url = "https://zdvservice.azurewebsites.net/api/landing/email";

      let body = JSON.stringify(bodyData);
      try {
        toast.success("Your request has been submitted successfully");
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ recipient, subject, body }),
        });
        const data = await response.json();
        console.log("RESPONSE>>>>>>", data.message);
        setFormData({
          fullName: "",
          email: "",
          message: "",
          companyName: "",
          mobileNumber: "",
        });
        setErrors({});
      } catch (error) {
        toast.error("Failed to send email");
        console.log("RESPONSE>>>>>>", "Failed to send email");
      }
    }
  };

  return (
    <>
      <section id="contact">
        <h2>Contact Us</h2>
        <div className="contact_container">
          <div className="form_section">
            <h4>
              How can we <span id="heading_span">help</span> you?
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="form_element">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && (
                  <div className="error_line">{errors.fullName}</div>
                )}
              </div>
              <div className="form_element">
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input
                  type="text"
                  name="mobileNumber"
                  id="mobileNumber"
                  placeholder="1234567890"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  onKeyDown={(e) => {
                    if (
                      !/^[0-9]$/.test(e.key) &&
                      e.key !== "Backspace" &&
                      e.key !== "Tab"
                    ) {
                      e.preventDefault();
                    }
                  }}
                />
                {errors.mobileNumber && (
                  <div className="error_line">{errors.mobileNumber}</div>
                )}
              </div>

              <div className="form_element">
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  placeholder="Your Company"
                  value={formData.companyName}
                  onChange={handleChange}
                />
                {errors.companyName && (
                  <div className="error_line">{errors.companyName}</div>
                )}
              </div>
              <div className="form_element">
                <label htmlFor="email">Company Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="someone@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="error_line">{errors.email}</div>
                )}
              </div>

              <div className="form_element">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="I want a Demo..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <div className="error_line">{errors.message}</div>
                )}
              </div>

              <input type="submit" value="Send message" />
            </form>
          </div>
          <div className="map_section">
            <div className="message_section">
              <Image src={mail} alt="mail" />
              <div className="mesage_container">
                <p>Send Us An Email</p>
                <p>info@Zdviewer.com</p>
              </div>
            </div>
            <div className="message_section">
              <Image src={phone} alt="phone" />
              <div className="mesage_container">
                <p>Give Us A Call</p>
                <p>+91 9591810823</p>
              </div>
            </div>
            <div
              className="phone_section"
              id="map"
              style={{ display: "inline-block" }}
            >
              {isMapLoaded}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
