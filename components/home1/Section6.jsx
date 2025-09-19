"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react'

const Section6 = () => {
      useEffect(() => {
    const form = document.querySelector(".bringer-contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const responseElement = form.querySelector(
        ".bringer-contact-form__response"
      );
      responseElement.textContent = "Sending...";

      fetch(form.action, { method: "POST", body: formData })
        .then((response) => response.text())
        .then((data) => {
          responseElement.textContent = data;
          responseElement.style.color = "#FFFFFF";
        })
        .catch((error) => {
          console.error("Error:", error);
          responseElement.textContent = "An error occurred. Please try again.";
          responseElement.style.color = "#FFFFFF";
        });
    });
  }, []);
  return (
    <>
        <section id="page06" data-unload="fade-down">
            <div className="bringer-hero-block bringer-hero-type06">
              <div className="bringer-bento-grid stg-bottom-gap">
                <div
                  className="is-large bringer-masked-block"
                  data-appear="fade-right"
                  data-unload="fade-left"
                >
                  <div
                    className="bringer-bento-hero-media bringer-masked-media"
                    data-bg-src="/img/box2.svg"
                  >
                    <h1
                      className="bringer-page-title"
                      data-appear="fade-up"
                      data-unload="fade-down"
                    >
                      Unleash your Creativity
                    </h1>
                    <p
                      className="bringer-highlight"
                      data-appear="fade-up"
                      data-unload="fade-down"
                    >
                      We help businesses and professionals showcase their work
                      through innovative digital solutions.
                    </p>
                  </div>
                  <div className="bringer-masked-content at-bottom-right">
                    <Link
                      href="#page06"
                      className="bringer-square-button"
                      data-appear="zoom-in"
                      data-unload="zoom-out"
                      data-delay="100"
                      aria-label="Go to page 06"
                    >
                      <span className="bringer-icon bringer-icon-arrow-down"></span>
                    </Link>
                  </div>
                </div>
                <div
                  className="is-small"
                  data-appear="zoom-out"
                  data-unload="zoom-out"
                  data-delay="100"
                >
                  <Image
                    className="bringer-lazy"
                    src="/img/about-scaleus1.svg"
                    data-src="/img/about-scaleus1.svg"
                    alt="Product 04"
                    width="1200"
                    height="1200"
                  />
                </div>
                <div
                  className="is-small"
                  data-appear="zoom-out"
                  data-unload="zoom-out"
                  data-delay="200"
                >
                  <Image
                    className="bringer-lazy"
                    src="/img/about-scaleus2.svg"
                    data-src="/img/about-scaleus2.svg"
                    alt="Product 08"
                    width="1200"
                    height="1200"
                  />
                </div>
                <div
                  className="is-medium bringer-block stg-vertical-space-between"
                  data-appear="fade-left"
                  data-unload="fade-right"
                  data-delay="300"
                >
                  <h3>Your Partner in Digital Innovation</h3>
                  <p>
                    We are a team of passionate and experienced tech experts at
                    ScaleUs, dedicated to helping businesses.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="bringer-masked-cta bringer-masked-block"
              data-unload="fade-down"
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const email = e.target.subscribe_email.value;
                  import("@emailjs/browser").then((emailjs) => {
                    emailjs
                      .send(
                        "service_2e4hyrc", // Replace with your EmailJS Service ID
                        "template_jaeacbm", // Replace with your EmailJS Template ID
                        { from_email: email },
                        "V9VHZjA9wdyskYcS8" // Replace with your EmailJS User ID
                      )
                      .then(() => {
                        const responseElement = e.target.querySelector(
                          ".bringer-contact-form__response"
                        );
                        responseElement.textContent =
                          "Subscribed successfully!";
                        responseElement.style.color = "#FFFFFF";
                        e.target.reset();
                      })
                      .catch((error) => {
                        const responseElement = e.target.querySelector(
                          ".bringer-contact-form__response"
                        );
                        responseElement.textContent =
                          "Failed to subscribe. Try again.";
                        responseElement.style.color = "#FF0000";
                        console.error("EmailJS error:", error);
                      });
                  });
                }}
                data-fill-error="Please enter a valid email address"
                className="bringer-contact-form is-short bringer-masked-media"
                data-appear="fade-up"
                data-unload="fade-down"
              >
                <div className="bringer-form-content bringer-cta-form">
                  <div
                    className="bringer-cta-form-content"
                    data-appear="fade-up"
                    data-unload="fade-down"
                    data-delay="100"
                  >
                    <div className="bringer-cta-title">
                      Ready to set your brand ablaze?
                    </div>
                    <input
                      type="email"
                      id="subscribe_email"
                      name="subscribe_email"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <div
                    className="bringer-cta-form-button"
                    data-appear="fade-up"
                    data-unload="fade-down"
                    data-delay="200"
                  >
                    <button type="submit" aria-label="Submit Form">
                      <span className="bringer-icon bringer-icon-arrow-submit"></span>
                    </button>
                  </div>
                  <div className="bringer-contact-form__response"></div>
                </div>
                <span className="bringer-form-spinner"></span>
              </form>
              <div className="bringer-masked-cta-content bringer-masked-content at-top-right">
                <p
                  className="bringer-large-text"
                  data-appear="fade-down"
                  data-unload="fade-up"
                >
                  Let's craft a visual identity that ignites passion and
                  loyalty. ✨
                </p>
              </div>
            </div>
          </section>
    </>
  )
}

export default Section6