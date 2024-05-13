"use client";
import Image from "next/image";
import React from "react";
import "./AboutSection.scss";
import "../../../src/app/Global.css";
import "../home/HomeHeroSection.scss";
import { useRouter } from "next/navigation";
const AboutSection = () => {
  const router = useRouter();
  return (
    <div className="pf-main-container display-flex flex-direction-column">
      <section className="heroContainer about-container display-flex">
        <div className="pf-about display-flex">
          <div className="pf-about-pic-box">
            {/* <div className="profilePicContainer"> */}
            <Image
              src="/assets/photo.jpg"
              className="pf-about-profilePic"
              width={300}
              height={300}
              alt="Profile Pic"
              quality={100}
            />
            {/* </div> */}
          </div>
        </div>
        <div className="pf-about-description-container display-flex flex-direction-column ">
          <div className="display-flex align-items  self-summary-box">
            <div>
              <Image
                src="/assets/star-2.png"
                className="pf-star-icon"
                width={50}
                height={50}
                alt="star"
                quality={100}
              />
            </div>
            <div>
              <p className="pf-about-self-summary-text">SELF-SUMMARY</p>
            </div>
            <div>
              <Image
                src="/assets/star-2.png"
                className="pf-star-icon"
                width={50}
                height={50}
                alt="star"
                quality={100}
              />
            </div>
          </div>

          <div className="pf-about-main-description-container display-flex flex-direction-column linear-bg default-border-radius ">
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
            <div className="default-padding">
              <p className="pf-about-my-name blue-color">Sunny Kumar</p>
              <p className="pf-about-description-text">
                I&apos;m a frontend developer from Patna, dedicated to crafting
                compelling web experiences through design and code. With a
                diverse background across various industries, I bring
                adaptability and innovation to every project.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </section>
      <section className="display-flex pf-about-expereince-section heroContainer">
        <div className="pf-about-experience-container linear-bg ">
          <div className="default-padding">
            <div>
              <p className="pf-about-experience-text">EXPERIENCE</p>
            </div>
            <div>
              <p className="pf-about-duration-text">2024 - PRESENT</p>
              <p className="pf-about-position-text">Front-End Developer</p>
              <p className="pf-about-company">Hexanova Media Tech</p>
            </div>
            <div className="pf-about-company-container">
              <p className="pf-about-duration-text">2023 - 2024</p>
              <p className="pf-about-position-text">
                Front-End Developer (Intern)
              </p>
              <p className="pf-about-company">Hexanova Media Tech</p>
            </div>
          </div>
        </div>
        <div className="pf-about-experience-container linear-bg ">
          <div className="default-padding">
            <div>
              <p className="pf-about-experience-text">EDUCATION</p>
            </div>
            <div>
              <p className="pf-about-duration-text">2020 - 2023</p>
              <p className="pf-about-position-text">
                Bachelor Degree in Physics honours
              </p>
              <p className="pf-about-company">P.N.K College</p>
            </div>
            <div className="pf-about-company-container">
              <p className="pf-about-duration-text">2018 - 2020</p>
              <p className="pf-about-position-text">
                Intermediate in Science Stream
              </p>
              <p className="pf-about-company">P.N.K College</p>
            </div>
          </div>
        </div>
      </section>
      <section className="display-flex pf-about-cred-prof-container heroContainer">
        <div className="display-flex pf-about-prof-toge-box">
          <div className="projectContainer pf-aout-profile-container">
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
          <div
            className="pf-together-container pf-about-together-cont display-flex flex-direction-column linear-bg default-border-radius "
            onClick={() => router.push("/contact")}
          >
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
        </div>
        <div
          className="signConatiner pf-about-sign-cont"
          onClick={() => router.push("/credential")}
        >
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
      </section>
    </div>
  );
};

export default AboutSection;
