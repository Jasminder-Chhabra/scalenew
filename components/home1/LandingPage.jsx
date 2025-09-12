"use client"
import Link from "next/link";
import Script from "next/script";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../app/globals.css";
import "../../public/css/config.css";
import "../../public/css/libs.css";
import "../../public/css/style.css";
import "../../public/css/responsive.css";
import Achievement from "@/components/ui/Achivement";
import { Herooo } from "@/components/home1/Hero6";
import Footer from "@/components/Footer";
import Image from "next/image";
import Section6 from "@/components/home1/Section6";

export default function LandingPage() {
  




  return (
    <>



      <Herooo/>
      
      <main
        id="bringer-main"
        className="custom-proud-css"
        data-unload="fade-down"
      >
        <div className="stg-container">
          <section className="backlight-bottom pt-0">
            <div
              className="bringer-partners partner-section"
              data-unload="fade-up"
            >
              <span
                className="bringer-label"
                data-appear="fade-up"
                data-unload="fade-up"
              >
                Proud of our work with
              </span>
              <div
                className="bringer-grid-6cols bringer-tp-grid-3cols bringer-m-grid-2cols stg-top-gap-s"
                data-stagger-appear="fade-up"
                data-stagger-unload="fade-up"
                data-stagger-delay="100"
                data-delay="100"
              >
                <div className="bringer-block bringer-center">
                  <Image
                    src="/img/partners/Scale-Us-Client-Government-of-India.svg"
                    alt="Partner Logo"
                    width="200"
                    height="100"
                  />
                </div>
                <div className="bringer-block bringer-center">
                  <Image
                    src="/img/partners/Scale-Us-Client-Seven-Eleven.svg"
                    alt="Partner Logo"
                    width="200"
                    height="100"
                  />
                </div>
                <div className="bringer-block bringer-center">
                  <Image
                    src="/img/partners/Scale-Us-Client-Amazon.svg"
                    alt="Partner Logo"
                    width="200"
                    height="100"
                  />
                </div>
                <div className="bringer-block bringer-center">
                  <Image
                    src="/img/partners/Scale-Us-Client-Daily-Hunt.svg"
                    alt="Partner Logo"
                    width="200"
                    height="100"
                  />
                </div>
                <div className="bringer-block bringer-center">
                  <Image
                    src="/img/partners/Scale-Us-Client-Saliah-Foods.svg"
                    alt="Partner Logo"
                    width="200"
                    height="100"
                  />
                </div>
                <div className="bringer-block bringer-center">
                  <Image
                    src="/img/partners/Scale-Us-Client-OZI.svg"
                    alt="Partner Logo"
                    width="200"
                    height="100"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="backlight-top" data-unload="fade-down">
            <div className="stg-row stg-large-gap stg-m-normal-gap">
              <div
                className="stg-col-6 stg-tp-bottom-gap-l stg-m-bottom-gap"
                data-unload="fade-left"
              >
                <div className="bringer-parallax-media">
                 
                  <Image
                    className="bringer-lazy"
                    src="/img/home/about02.webp"
                    data-src="/img/home/about02.webp"
                    alt=""
                    width="600"
                    height="600"
                  />
                </div>
              </div>
              <div
                className="stg-col-6 stg-vertical-space-between"
                data-unload="fade-right"
              >
                <div>
                  <h3 data-appear="fade-up" data-unload="fade-down">
                    Welcome to Scale Us, where creativity meets expertise.
                  </h3>
                  <p
                    className="bringer-large-text"
                    data-appear="fade-up"
                    data-unload="fade-down"
                  >
                    Your Trusted Technology Partner
                  </p>
                  <p data-appear="fade-up" data-unload="fade-down">
                    Scale Us Technologies is an Indian web-based company Technology
                    dedicated to empowering businesses through cutting-edge
                    technology.
                  </p>
                  <p data-appear="fade-up" data-unload="fade-down">
                    From web development and eCommerce solutions to mobile app
                    development and UI/UX designing, our range of services
                    ensures a robust and visible digital presence.
                  </p>
                </div>
                <Link
                  href="/about-us"
                  className="bringer-icon-link"
                  data-appear="fade-up"
                  data-unload="fade-down"
                >
                  <div className="bringer-icon-wrap">
                    <i className="bringer-icon bringer-icon-explore"></i>
                  </div>
                  <div className="bringer-icon-link-content">
                    <h6>
                      We are <br /> Passionate Team
                    </h6>
                    <span className="bringer-label">Learn More About Us</span>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          <section
            className="is-fullwidth is-stretched"
            data-padding="none"
            data-unload="fade-down"
          >
            <div className="bringer-marquee is-init">
              <div className="bringer-marquee-inner">
                <ul className="bringer-marquee-list">
                  <li>
                    <h2>Mobile Application Development</h2>
                  </li>
                  <li>
                    <h2>Website Development</h2>
                  </li>
                  <li>
                    <h2>SEO and Email Marketing</h2>
                  </li>
                  <li>
                    <h2>Customer Software Development</h2>
                  </li>
                  <li>
                    <h2>UX/UI</h2>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="backlight-top" data-unload="fade-down">
            <div className="stg-row bringer-section-title">
              <div className="stg-col-8 stg-offset-2">
                <div className="align-center">
                  <h2 data-appear="fade-up" data-unload="fade-down">
                    4 Steps to Brand Brilliance
                  </h2>
                  <p
                    className="bringer-large-text is-short"
                    data-appear="fade-up"
                    data-unload="fade-down"
                    data-delay="100"
                  >
                   We are a passionate team of innovators who believe in the
 power of creativity
                  </p>
                </div>
              </div>
            </div>
            <div className="stg-row stg-valign-middle stg-large-gap">
              <div
                className="stg-col-6 stg-tp-bottom-gap-l"
                data-appear="fade-right"
                data-unload="fade-left"
              >
                <div className="bringer-parallax-media">
                  <Image
                    className="bringer-lazy"
                    src="/img/home/steps.webp"
                    data-src="/img/home/steps.webp"
                    alt="Brand Brilliance"
                    width="560"
                    height="560"
                  
                  />
                 
                </div>
              </div>
              <div
                className="stg-col-6"
                data-unload="fade-right"
                data-delay="100"
              >
                <div
                  className="bringer-grid-2cols stg-normal-gap"
                  data-stagger-appear="fade-left"
                  data-stagger-unload="fade-right"
                >
                  <div className="bringer-subgrid-item stg-bottom-gap stg-m-bottom-gap-s">
                    <div className="bringer-title-with-meta">
                      <span className="bringer-label">Step 01</span>
                      <h5>Spark Ignition</h5>
                    </div>
                    <div>
                      Share your vision, dreams, and challenges. We listen
                      deeply.
                    </div>
                  </div>
                  <div className="bringer-subgrid-item stg-bottom-gap stg-m-bottom-gap-s">
                    <div className="bringer-title-with-meta">
                      <span className="bringer-label">Step 02</span>
                      <h5>Concept Couture</h5>
                    </div>
                    <div>Explore bespoke concepts tailored just for you.</div>
                  </div>
                  <div className="bringer-subgrid-item stg-m-bottom-gap-s">
                    <div className="bringer-title-with-meta">
                      <span className="bringer-label">Step 03</span>
                      <h5>Masterful Crafting</h5>
                    </div>
                    <div>Watch your vision transform into reality.</div>
                  </div>
                  <div className="bringer-subgrid-item">
                    <div className="bringer-title-with-meta">
                      <span className="bringer-label">Step 04</span>
                      <h5>Launch & Beyond</h5>
                    </div>
                    <div>Unleash your brand masterpiece into the world.</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="is-fullwidth is-stretched1"
            data-unload="fade-down"
          >
            <div className="stg-row bringer-section-title is-boxed">
              <div className="stg-col-8 stg-offset-2">
                <div className="align-center">
                  <h2 data-appear="fade-up" data-unload="fade-down">
                    Our Work
                  </h2>
                  <p
                    className="bringer-large-text"
                    data-appear="fade-up"
                    data-unload="fade-down"
                    data-delay="100"
                  >
                    We are proud of our work, and we are always looking for new
                    challenges.
                  </p>
                </div>
              </div>
            </div>
            <Swiper
              className="bringer-carousel stg-bottom-gap-l"
              spaceBetween={30}
              slidesPerView={4}
              loop={false}
              modules={[Pagination]} // Updated for modern Swiper
              pagination={{ clickable: true, el: ".swiper-pagination" }}
              breakpoints={{
                0: { slidesPerView: 1.5 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              <SwiperSlide
                className="bringer-block bringer-portfolio-card"
                data-appear="fade-up"
                data-unload="fade-down"
              >
                <div className="bringer-portfolio-card-image">
                  <Image
                    className="bringer-lazy"
                    src="/img/null.png"
                    data-src="/img/portfolio/portfolio01.jpg"
                    alt=""
                    width="1200"
                    height="1200"
                  />
                </div>
                <div className="bringer-portfolio-card-footer">
                  <div className="bringer-portfolio-card-title">
                    <span className="bringer-meta">Mobile Application</span>
                    <h6>Seven Eleven</h6>
                  </div>
                  <span className="bringer-icon bringer-icon-explore"></span>
                </div>
                <Link
                  href="/portfolio-post/7eleven"
                  aria-label="View details of Portfolio Post 01"
                ></Link>
              </SwiperSlide>
              <SwiperSlide
                className="bringer-block bringer-portfolio-card"
                data-appear="fade-up"
                data-unload="fade-down"
              >
                <div className="bringer-portfolio-card-image">
                  <Image
                    className="bringer-lazy"
                    src="/img/null.png"
                    data-src="/img/portfolio-single-img/natrax.png"
                    alt=""
                    width="1200"
                    height="1200"
                  />
                </div>
                <div className="bringer-portfolio-card-footer">
                  <div className="bringer-portfolio-card-title">
                    <span className="bringer-meta">Ticket Management Portal</span>
                    <h6>Natrax</h6>
                  </div>
                  <span className="bringer-icon bringer-icon-explore"></span>
                </div>
                <Link
                  href="/portfolio-post/natrax"
                  aria-label="View details of Portfolio Post 02"
                ></Link>
              </SwiperSlide>
              <SwiperSlide
                className="bringer-block bringer-portfolio-card"
                data-appear="fade-up"
                data-unload="fade-down"
              >
                <div className="bringer-portfolio-card-image">
                  <Image
                    className="bringer-lazy"
                    src="/img/null.png"
                    data-src="/img/portfolio-single-img/salah.png"
                    alt=""
                    width="1200"
                    height="1200"
                  />
                </div>
                <div className="bringer-portfolio-card-footer">
                  <div className="bringer-portfolio-card-title">
                    <span className="bringer-meta">Website Development</span>
                    <h6>Saliah Foods</h6>
                  </div>
                  <span className="bringer-icon bringer-icon-explore"></span>
                </div>
                <Link
                  href="/portfolio-post/saliah-foods"
                  aria-label="View details of Portfolio Post 03"
                ></Link>
              </SwiperSlide>
              <SwiperSlide
                className="bringer-block bringer-portfolio-card"
                data-appear="fade-up"
                data-unload="fade-down"
              >
                <div className="bringer-portfolio-card-image">
                  <Image
                    className="bringer-lazy"
                    src="/img/null.png"
                    data-src="/img/portfolio-single-img/simpletap.png"
                    alt=""
                    width="1200"
                    height="1200"
                  />
                </div>
                <div className="bringer-portfolio-card-footer">
                  <div className="bringer-portfolio-card-title">
                    <span className="bringer-meta">SAAS Products</span>
                    <h6>Simply Tap it</h6>
                  </div>
                  <span className="bringer-icon bringer-icon-explore"></span>
                </div>
                <Link
                  href="/portfolio-post/simplyTap"
                  aria-label="View details of Portfolio Post 04"
                ></Link>
              </SwiperSlide>
              <div
                className="swiper-pagination bringer-dots"
                slot="pagination"
              ></div>
            </Swiper>
            <div
              className="align-center"
              data-appear="fade-up"
              data-unload="fade-down"
              data-delay="100"
            >
              <Link href="/portfolio" className="bringer-button">
                Discover Full Portfolio
              </Link>
            </div>
          </section>

          <section className="backlight-bottom" data-unload="fade-down">
            <div className="stg-row bringer-section-title">
              <div className="stg-col-8 stg-offset-2">
                <div className="align-center">
                  <h2 data-appear="fade-up" data-unload="fade-down">
                    Our Services
                  </h2>
                  <p
                    className="bringer-large-text"
                    data-appear="fade-up"
                    data-unload="fade-down"
                    data-delay="100"
                  >
                    We offer a wide range of creative services to help
                    businesses of all sizes achieve their goals.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="bringer-list-with-preview"
              data-preview-position="left"
              data-unload="fade-down"
              data-delay="200"
            >
              <div className="bringer-lwp-roster">
                <div
                  className="bringer-lwp-item bringer-block"
                  data-appear="fade-left"
                  data-unload="fade-right"
                >
                  <Image
                    src="/img/home/service01.webp"
                    alt="Mobile-App-Developer"
                    width="584"
                    height="907"
                    loading="lazy"
                  />
                  <div className="bringer-lwp-item-content">
                    <h5>
                      Mobile Application Development
                      <span className="bringer-accent">.</span>
                    </h5>
                    <p>
                      We specialize in expert mobile application development,
                      creating powerful, user-friendly apps.
                    </p>
                  </div>
                </div>
                <div
                  className="bringer-lwp-item bringer-block"
                  data-appear="fade-left"
                  data-unload="fade-right"
                >
                  <Image
                    src="/img/home/service02.webp"
                    alt="Website Developer"
                    width="584"
                    height="907"
                    loading="lazy"
                  />
                  <div className="bringer-lwp-item-content">
                    <h5>
                      Website Development
                      <span className="bringer-accent">.</span>
                    </h5>
                    <p>
                      We create responsive and dynamic platforms that amplify
                      your online presence.
                    </p>
                  </div>
                </div>
                <div
                  className="bringer-lwp-item bringer-block"
                  data-appear="fade-left"
                  data-unload="fade-right"
                >
                  <Image
                    src="/img/home/service003.webp"
                    alt="Web Designer"
                    width="584"
                    height="907"
                    loading="lazy"
                  />
                  <div className="bringer-lwp-item-content">
                    <h5>
                      UI/UX Design<span className="bringer-accent">.</span>
                    </h5>
                    <p>
                      Our UI/UX design services enhance user experience and
                      elevate visual appeal.
                    </p>
                  </div>
                </div>
                <div
                  className="bringer-lwp-item bringer-block"
                  data-appear="fade-left"
                  data-unload="fade-right"
                >
                  <Image
                    src="/img/home/service004.webp"
                    alt="Software Developer"
                    width="584"
                    height="907"
                    loading="lazy"
                  />
                  <div className="bringer-lwp-item-content">
                    <h5>
                      Customer Software Development
                      <span className="bringer-accent">.</span>
                    </h5>
                    <p>
                      Our custom software development services are tailored to
                      meet your unique needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="align-right">
              <Link
                href="/services"
                className="bringer-arrow-link"
                data-appear="fade-up"
                data-unload="fade-down"
              >
                Discover all services
              </Link>
            </div>
          </section>

          <section data-unload="fade-down">
            <div className="stg-row stg-large-gap">
              <div
                className="stg-col-6 stg-tp-bottom-gap-l"
                data-unload="fade-left"
              >
                <div className="bringer-sticky-block">
                  <h2 data-appear="fade-up" data-unload="fade-down">
                    Why Choose Us
                  </h2>
                  <p
                    className="bringer-large-text"
                    data-appear="fade-up"
                    data-unload="fade-down"
                  >
                    We are a passionate team of developers who believe in the
                    power of creativity.
                  </p>
                  <div className="align-right">
                    <Link
                      href="/about-us"
                      className="bringer-arrow-link"
                      data-appear="fade-up"
                      data-unload="fade-down"
                    >
                      Learn More About Us
                    </Link>
                  </div>
                </div>
              </div>
              <div className="stg-col-6">
                <div
                  className="bringer-grid-1col stg-normal-gap"
                  data-stagger-appear="zoom-in"
                  data-stagger-unload="zoom-out"
                  data-threshold="0.5"
                  data-stagger-delay="150"
                >
                  <div className="bringer-block">
                    <h4>
                      We don't just deliver, we{" "}
                      <span className="bringer-accent">ignite innovation</span>
                      <span className="bringer-accent">.</span>
                    </h4>
                    <p>
                      At Scale Us, we infuse your brand with bold ideas and
                      strategic brilliance.
                    </p>
                  </div>
                  <div className="bringer-block">
                    <h4>
                      We <span className="bringer-accent">fuel creativity</span>{" "}
                      with data<span className="bringer-accent">.</span>
                    </h4>
                    <p>
                      We blend data-driven insights with passion, ensuring
                      measurable results.
                    </p>
                  </div>
                  <div className="bringer-block">
                    <h4>
                      We craft{" "}
                      <span className="bringer-accent">
                        emotional connections
                      </span>
                      <span className="bringer-accent">.</span>
                    </h4>
                    <p>
                      We weave stories that resonate, visuals that linger, and
                      content that sparks.
                    </p>
                  </div>
                  <div className="bringer-block">
                    <h4>
                      We become your{" "}
                      <span className="bringer-accent">
                        technology champions
                      </span>
                      <span className="bringer-accent">.</span>
                    </h4>
                    <p>
                    We build partnerships by understanding your
 vision and working as an extension of your team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section data-padding="none" className="py-6" data-unload="fade-down">
            <Achievement />
          </section>

          <section className="hide-on-mobile-tab" data-unload="fade-down">
            <div className="stg-row stg-large-gap">
              <div
                className="stg-col-6 stg-tp-bottom-gap-l"
                data-unload="fade-left"
              >
                <div className="bringer-sticky-block">
                  <h2 data-appear="fade-up" data-unload="fade-down">
                    Our Portfolio
                  </h2>
                  <p
                    className="bringer-large-text"
                    data-appear="fade-up"
                    data-unload="fade-down"
                  >
                    We are proud of our work, and we are always looking for new
                    challenges.
                  </p>
                  <div className="align-right">
                    <Link
                      href="/portfolio"
                      className="bringer-arrow-link"
                      data-appear="fade-up"
                      data-unload="fade-down"
                    >
                      Explore full Portfolio
                    </Link>
                  </div>
                </div>
              </div>
              <div className="stg-col-6">
                <div
                  className="bringer-grid-1col bringer-tp-grid-2cols stg-normal-gap bringer-parallax-media"
                  data-stagger-appear="fade-left"
                  data-stagger-unload="fade-right"
                  data-threshold="0.25"
                  data-stagger-delay="100"
                >
                  <div className="bringer-block bringer-portfolio-card">
                    <div className="bringer-portfolio-card-image">
                      <Image
                        className="bringer-lazy"
                        src="/img/null.png"
                        data-src="/img/portfolio/portfolio01.jpg"
                        alt=""
                        width="1200"
                        height="1200"
                      />
                    </div>
                    <div className="bringer-portfolio-card-footer">
                      <div className="bringer-portfolio-card-title">
                        <span className="bringer-meta">Consulting Website</span>
                        <h6 className="text-md">OZI CORP</h6>
                      </div>
                      <span className="bringer-icon bringer-icon-explore"></span>
                    </div>
                    <Link
                      href="/portfolio-post/ozicorp"
                      aria-label="View details of Portfolio Post 01"
                    ></Link>
                  </div>
                  <div className="bringer-block bringer-portfolio-card">
                    <div className="bringer-portfolio-card-image">
                      <Image
                        className="bringer-lazy"
                        src="/img/null.png"
                        data-src="/img/portfolio-img/7eleven/img1.jpg"
                        alt=""
                        width="1200"
                        height="1200"
                      />
                    </div>
                    <div className="bringer-portfolio-card-footer">
                      <div className="bringer-portfolio-card-title">
                        <span className="bringer-meta">Mobile Application</span>
                        <h6  className="text-md" >Seven Eleven</h6>
                      </div>
                      <span className="bringer-icon bringer-icon-explore"></span>
                    </div>
                    <Link
                      href="/portfolio-post/7eleven"
                      aria-label="View details of Portfolio Post 02"
                    ></Link>
                  </div>

                     <div className="bringer-block bringer-portfolio-card">
                    <div className="bringer-portfolio-card-image">
                      <Image
                        className="bringer-lazy"
                        src="/img/null.png"
                        data-src="/img/portfolio-single-img/simpletap.png"
                        alt=""
                        width="1200"
                        height="1200"
                      />
                    </div>
                    <div className="bringer-portfolio-card-footer">
                      <div className="bringer-portfolio-card-title">
                        <span className="bringer-meta">SAAS Product</span>
                        <h6  className="text-md" >Simply Tap It</h6>
                      </div>
                      <span className="bringer-icon bringer-icon-explore"></span>
                    </div>
                    <Link
                      href="/portfolio-post/simplyTap"
                      aria-label="View details of Portfolio Post 02"
                    ></Link>
                  </div>

                     <div className="bringer-block bringer-portfolio-card">
                    <div className="bringer-portfolio-card-image">
                      <Image
                        className="bringer-lazy"
                        src="/img/null.png"
                        data-src="/img/portfolio-single-img/natrax.png"
                        alt=""
                        width="1200"
                        height="1200"
                      />
                    </div>
                    <div className="bringer-portfolio-card-footer">
                      <div className="bringer-portfolio-card-title">
                        <span className="bringer-meta">Ticket Management Portal</span>
                        <h6  className="text-md" >Natrax</h6>
                      </div>
                      <span className="bringer-icon bringer-icon-explore"></span>
                    </div>
                    <Link
                      href="/portfolio-post/natrax"
                      aria-label="View details of Portfolio Post 02"
                    ></Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="testimonials-section"
            className="backlight-top"
            data-unload="fade-down"
          >
            <div className="bringer-expand-on-scroll">
              <Image
                src="/img/pixel-profile-images/movebg.svg"
                alt="Testimonials"
                data-appear="fade-up"
                data-unload="fade-down"
                loading="lazy"
                width="800"
                height="600"
              />
            </div>
            <div className="stg-row stg-large-gap stg-top-gap-l">
              <div
                className="stg-col-6 stg-tp-bottom-gap-l"
                data-unload="fade-left"
              >
                <div className="bringer-sticky-block">
                  <h2 data-appear="fade-up" data-unload="fade-down">
                    What Clients Say
                  </h2>
                  <p
                    className="bringer-large-text"
                    data-appear="fade-up"
                    data-unload="fade-down"
                  >
                    Here are some of the most inspiring reviews from our
                    clients.
                  </p>
                  <div className="align-right">
                    <Link
                      href="/contact-us"
                      className="bringer-arrow-link"
                      data-appear="fade-up"
                      data-unload="fade-down"
                    >
                      Get a FREE Quote
                    </Link>
                  </div>
                </div>
              </div>
              <div className="stg-col-6">
                <div
                  className="bringer-grid-1col stg-normal-gap"
                  data-stagger-appear="zoom-out"
                  data-stagger-unload="fade-right"
                >
                  <div
                    className="bringer-block bringer-tetimonials-card"
                    data-appear="zoom-out"
                    data-unload="fade-right"
                    data-threshold="0.75"
                  >
                    <div className="bringer-tetimonials-card-descr">
                      "Working with Scale Us has been transformative for our
                      digital strategy."
                    </div>
                    <div className="bringer-tetimonials-card-footer">
                      <div className="bringer-tetimonials-card-name">
                        <h6>Ravi Sharma</h6>
                        <span className="bringer-meta">
                          Chief Marketing Officer, Tech Innovators India
                        </span>
                      </div>
                      <div className="bringer-tetimonials-card-rate">
                        <span className="bringer-tetimonials-stars5"></span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bringer-block bringer-tetimonials-card"
                    data-appear="zoom-out"
                    data-unload="fade-right"
                    data-threshold="0.75"
                  >
                    <div className="bringer-tetimonials-card-descr">
                      "Scale Us exceeded our expectations with their mobile app
                      development services."
                    </div>
                    <div className="bringer-tetimonials-card-footer">
                      <div className="bringer-tetimonials-card-name">
                        <h6>Neha Patel</h6>
                        <span className="bringer-meta">
                          CEO, Digital Solutions India
                        </span>
                      </div>
                      <div className="bringer-tetimonials-card-rate">
                        <span className="bringer-tetimonials-stars5"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div
              className="bringer-partners partner-section"
              data-unload="fade-up"
            >
              <span
                className="bringer-label"
                data-appear="fade-up"
                data-unload="fade-up"
              >
                Certifications
              </span>
              <div
                className="bringer-grid-6cols bringer-tp-grid-3cols bringer-m-grid-2cols stg-top-gap-s"
                data-stagger-appear="fade-up"
                data-stagger-unload="fade-up"
                data-stagger-delay="100"
                data-delay="100"
              >
                <div className="bringer-block bringer-center">
                  <img
                    src="/img/partners/Scale-Us-Startup-India.svg"
                    alt="Certification"
                    loading="lazy"
                  />
                  
                </div>
                <div className="bringer-block bringer-center">
                  <img
                    src="/img/partners/Scale-Us-Digital-India.svg"
                    alt="Certification"
                    loading="lazy"
                  />
                </div>
                <div className="bringer-block bringer-center">
                  <img
                    src="/img/partners/Scale-Us-Swacch-Bharat.svg"
                    alt="Certification"
                    loading="lazy"
                  />
                </div>
                <div className="bringer-block bringer-center">
                  <img
                    src="/img/partners/TB-Logo.svg"
                    alt="Certification"
                    loading="lazy"
                  />
                </div>
                <div className="bringer-block bringer-center">
                  <img
                    src="/img/partners/Make In India.svg"
                    alt="Certification"
                    loading="lazy"
                  />
                </div>
                <div className="bringer-block bringer-center">
                  <img
                    src="/img/partners/Great-Place-To-Work.svg"
                    alt="Certification"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>
<Section6/>
        </div>{" "}
        {/* Closes stg-container */}
      </main>

     <Footer/>

      <div className="bringer-rcp-wrap">
        <div className="bringer-rcp-overlay"></div>
        <div className="bringer-rcp-container">
          <h2>Content Protected</h2>
        </div>
      </div>
      <div className="bringer-backlight"></div>

      <Script src="/js/lib/jquery.min.js" strategy="beforeInteractive" />
      <Script id="patch-main-js" strategy="afterInteractive">{`
        (function() {
          if (typeof i !== 'undefined' && i.checkURL) {
            i.checkURL = function(t) {
              let e = t instanceof jQuery ? t : jQuery(t);
              let n = e.attr("href"), r = !0;
              if (e.hasClass('bringer-socials-list') || (e.attr("target") === "_blank" && n.match(/^(https?:\\/\\/)?([\\w-]+\.)+[\\w-]{2,6}/))) {
                return false;
              }
              return 0 === n.indexOf("javascript") || "#" === n || e.attr("target") && "_blank" === e.attr("target") || n.indexOf("elementor-action") > -1 || e.is("[download]") || n.indexOf("tel:") > -1 || n.indexOf("mailto:") > -1 || "yes" === e.attr("data-elementor-open-lightbox") || e.is("#cancel-comment-reply-link") || i.checkImageURL(n) ? r = !1 : jQuery(bringer_config.linksException).each((function() { e.is(this) && (r = !1) })), r;
            };
          }
        })();
      `}</Script>
   
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js"
        strategy="lazyOnload"
      />
    </>
  );
}
