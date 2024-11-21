"use client";

import React, { useState } from "react";
import "./contact.css";
import Footer from "@/components/Footer/Footer";
import mail from "@/public/mail.webp";
import phone from "@/public/phone.webp";
import Image from "next/image";
import { mappls, mappls_plugin } from "mappls-web-maps";
import { useEffect, useRef } from "react";

const Contact = () => {
  const mapplsClassObject = new mappls();
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

  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    Phone: "",
    Cname: "",
    Cemail: "",
    Cmessage: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let validationErrors = {};

    if (!formData.Fname.trim()) {
      validationErrors.Fname = "First Name is required";
    }
    if (!formData.Lname.trim()) {
      validationErrors.Lname = "Last Name is required";
    }
    if (!formData.Phone.trim()) {
      validationErrors.Phone = "Phone Number is required";
    } else if (!/^[0-9]{10}$/.test(formData.Phone)) {
      validationErrors.Phone = "Phone Number must be 10 digits";
    }
    if (!formData.Cname.trim()) {
      validationErrors.Cname = "Company Name is required";
    }
    if (!formData.Cemail.trim()) {
      validationErrors.Cemail = "Company Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Cemail)) {
      validationErrors.Cemail = "Invalid email format";
    }
    if (!formData.Cmessage.trim()) {
      validationErrors.Cmessage = "Message is required";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      const bodyData = {
        name: formData.Fname + " " + formData.Lname,
        company: formData.Cname,
        mobile: formData.Phone,
        email: formData.Cemail,
        requirements: formData.Cmessage,
      };
      const recipient = "info@zdviewer.com";
      const subject = "ZDViewer - Request for Demo";
      const url = "https://zdvservice.azurewebsites.net/api/landing/email";
      let body = JSON.stringify(bodyData);
      try {
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
          Fname: "",
          Lname: "",
          Phone: "",
          Cname: "",
          Cemail: "",
          Cmessage: "",
        });
        setErrors({});
      } catch (error) {
        console.log("RESPONSE>>>>>>", "Failed to send email");
      }
    }
  };

  const contactarr = [
    {
      id: 1,
      title: "Send Enquiry",
      logo: mail,
      description: "Info@Zdviewer.com",
    },
    {
      id: 2,
      title: "Give Us A Call",
      logo: phone,
      description: "+91 9591810823",
    },
  ];

  return (
    <>
      <section id="contact">
        <h2>
          Contact <span id="heading_span">Us</span>
        </h2>
        <div className="contact_container">
          <div className="text_container">
            {contactarr.map((contact) => (
              <div className="message_box" key={contact.id}>
                <Image src={contact.logo} alt="mail" />
                <div className="messge_container">
                  <h3>{contact.title}</h3>
                  <p>{contact.description}</p>
                </div>
              </div>
            ))}
            <div className="map_container" id="map">
              {isMapLoaded}
            </div>
          </div>
          <div className="contactform_container">
            <h3>
              How Can We <span id="heading_span">Help</span> You?
            </h3>
            <form className="form_container" onSubmit={handleSubmit}>
              <div className="input_container">
                <div className="input_field_container">
                  <label htmlFor="Fname">First Name</label>
                  <input
                    type="text"
                    name="Fname"
                    id="Fname"
                    placeholder="Enter your name"
                    value={formData.Fname}
                    onChange={handleChange}
                  />
                  {errors.Fname && (
                    <div className="error_message">{errors.Fname}</div>
                  )}
                </div>
                <div className="input_field_container">
                  <label htmlFor="Lname">Last Name</label>
                  <input
                    type="text"
                    name="Lname"
                    id="Lname"
                    placeholder="Enter your name"
                    value={formData.Lname}
                    onChange={handleChange}
                  />
                  {errors.Lname && (
                    <div className="error_message">{errors.Lname}</div>
                  )}
                </div>
              </div>
              <div className="input_container">
                <div className="input_field_container">
                  <label htmlFor="Phone">Phone Number</label>
                  <input
                    type="text"
                    name="Phone"
                    id="Phone"
                    placeholder="Enter your phone number"
                    value={formData.Phone}
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
                  {errors.Phone && (
                    <div className="error_message">{errors.Phone}</div>
                  )}
                </div>
                <div className="input_field_container">
                  <label htmlFor="Cname">Company Name</label>
                  <input
                    type="text"
                    name="Cname"
                    id="Cname"
                    placeholder="Enter company name"
                    value={formData.Cname}
                    onChange={handleChange}
                  />
                  {errors.Cname && (
                    <div className="error_message">{errors.Cname}</div>
                  )}
                </div>
              </div>
              <div className="input_container">
                <div
                  className="input_field_container"
                  style={{ width: "100%" }}
                >
                  <label htmlFor="Cemail">Company Email</label>
                  <input
                    type="email"
                    name="Cemail"
                    id="Cemail"
                    placeholder="Enter your company email"
                    value={formData.Cemail}
                    onChange={handleChange}
                  />
                  {errors.Cemail && (
                    <div className="error_message">{errors.Cemail}</div>
                  )}
                </div>
              </div>
              <div className="input_container">
                <div
                  className="input_field_container"
                  style={{ width: "100%" }}
                >
                  <label htmlFor="Cmessage">Message</label>
                  <textarea
                    name="Cmessage"
                    id="Cmessage"
                    placeholder="Enter your message"
                    rows={3}
                    value={formData.Cmessage}
                    onChange={handleChange}
                  />
                  {errors.Cmessage && (
                    <div className="error_message">{errors.Cmessage}</div>
                  )}
                </div>
              </div>
              <input type="submit" value="Send Message" />
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
