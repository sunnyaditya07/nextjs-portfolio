import React from "react";
// import styles from "./HomeHeroSection.module.css";
import Image from "next/image";
import Link from "next/link";
import "./HomeHeroSection.scss";
import Footer from "../../header/Footer";
const HomeHeroSection = () => {
  return (
    <div className="pf-main-container display-flex flex-direction-column">
      <section className="heroContainer">
        <div className="hero">
          <div className="description">
            <div className="profilePicContainer">
              <Image
                src="/assets/photo.jpg"
                className="profilePic"
                width={224}
                height={224}
                alt="Profile Pic"
              />
            </div>
            <div className="profileBioContainer">
              <h4 className="title">A Frontend Developer</h4>
              <h1 className="name">Sunny Kumar.</h1>
              <p className="place">
                Crafting digital experiences with code and design.
              </p>

              <button className="resume">
                <a
                  // href="/assets/Sunny_Kumar_Resume.pdf"
                  // download="Resume"
                  className="cv"
                >
                  Download CV
                </a>
              </button>
              <Image
                className="cursor"
                src="/assets/cursor.svg"
                alt="cursor"
                width={40}
                height={40}
              />
            </div>
          </div>
          <div className="workAndFeatureContainer">
            <div className="marqueeContainer">
              <div className="marquee">
                <p className="scrollingText">
                  latest work and
                  <span className="featuredText"> featured</span>
                  <Image
                    src="/assets/star1.svg"
                    alt="star"
                    width={10}
                    height={10}
                  />
                </p>
                <p className="scrollingText">
                  latest work and{" "}
                  <span className="featuredText"> featured</span>
                  <Image
                    src="/assets/star1.svg"
                    alt="star"
                    width={10}
                    height={10}
                  />
                </p>
                <p className="scrollingText">
                  latest work and
                  <span className="featuredText"> featured</span>
                </p>
              </div>
            </div>
            <div className="signAndProjectConatiner">
              <div className="signConatiner">
                <div className="signImgConatiner">
                  <Image
                    src="/assets/sign.png"
                    alt="Signature"
                    width={200}
                    height={50}
                    quality={100}
                    className="signImage"
                  />
                </div>
                <div className="aboutConatiner">
                  <p className="moreAboutMe">More About Me</p>
                  <p className="credentials">Credentials</p>
                  <Image
                    className="aboutCursor"
                    src="/assets/cursor.svg"
                    alt="cursor"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="projectContainer">
                <div className="myWorksImg">
                  <Image
                    src="/assets/my-works.png"
                    width={203}
                    height={114}
                    alt="My Works"
                    className="myWork"
                    quality={100}
                  />
                </div>
                <div className="projectsTextContainer">
                  <p className="showcase">Showcase</p>
                  <p className="projects">Projects</p>
                  <Image
                    className="projectCursor"
                    src="/assets/cursor.svg"
                    alt="cursor"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pf-profile-wt-container display-flex">
        <div className="pf-profile-container ">
          <div className="pf-profile-box display-flex align-items">
            <div className="projectContainer">
              <div className=" pf-profile-icon-container">
                <div className="pf-profile-icon-box">
                  <i class="bi bi-github"></i>
                </div>
                <div className="pf-profile-icon-box">
                  <i class="bi bi-linkedin"></i>
                </div>
              </div>
              <div className="projectsTextContainer">
                <p className="showcase">Stay With me</p>
                <p className="projects">Profiles</p>
                <Image
                  className="projectCursor"
                  src="/assets/cursor.svg"
                  alt="cursor"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className="projectContainer">
              <div className="myWorksImg">
                <Image
                  src="/assets/gfonts.png"
                  width={203}
                  height={114}
                  alt="My Works"
                  className="myWork gfonts-image"
                  quality={100}
                />
              </div>
              <div className="projectsTextContainer">
                <p className="showcase">Blog</p>
                <p className="projects">GFonts</p>
                <Image
                  className="projectCursor"
                  src="/assets/cursor.svg"
                  alt="cursor"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pf-together-container display-flex flex-direction-column linear-bg default-border-radius ">
          <div className="pf-pendulum ">
            <Image
              className="projectCursor"
              src="/assets/pendulum.png"
              alt="cursor"
              width={40}
              height={80}
              quality={100}
            />
          </div>
          <div className="pf-lets-container">
            <p>Let&apos;s </p>
            <p>
              work <span className="blue-color">together.</span>
            </p>
          </div>
          <div className="position-absolute pf-lets-cursor">
            <Image
              className="projectCursor"
              src="/assets/cursor.svg"
              alt="cursor"
              width={40}
              height={40}
            />
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default HomeHeroSection;
