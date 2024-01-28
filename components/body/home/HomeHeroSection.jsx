import React from "react";
import styles from "./HomeHeroSection.module.css";
import Image from "next/image";
import Link from "next/link";
import { Autour_One } from "next/font/google";
const HomeHeroSection = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.hero}>
        <div className={styles.description}>
          <div className={styles.profilePicContainer}>
            <Image
              src="/assets/photo.jpg"
              className={styles.profilePic}
              width={224}
              height={224}
              alt="Profile Pic"
            />
          </div>
          <div className={styles.profileBioContainer}>
            <h4 className={styles.title}>A Frontend Developer</h4>
            <h1 className={styles.name}>Sunny Kumar.</h1>
            <p className={styles.place}>
              I am Frontend Developer based in Patna.
            </p>

            <button className={styles.resume}>
              <a
                href="/assets/Sunny_Kumar_Resume.pdf"
                download="Resume"
                className={styles.cv}
              >
                Download CV
              </a>
            </button>
            <Image
              className={styles.cursor}
              src="/assets/cursor.svg"
              alt="cursor"
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className={styles.workAndFeatureContainer}>
          <div className={styles.marqueeContainer}>
            <div className={styles.marquee}>
              <p className={styles.scrollingText}>
                latest work and
                <span className={styles.featuredText}> featured</span>
                <Image
                  src="/assets/star1.svg"
                  alt="star"
                  width={10}
                  height={10}
                />
              </p>
              <p className={styles.scrollingText}>
                latest work and{" "}
                <span className={styles.featuredText}> featured</span>
                <Image
                  src="/assets/star1.svg"
                  alt="star"
                  width={10}
                  height={10}
                />
              </p>
              <p className={styles.scrollingText}>
                latest work and
                <span className={styles.featuredText}> featured</span>
              </p>
            </div>
          </div>
          <div className={styles.signAndProjectConatiner}>
            <div className={styles.signConatiner}>
              <div className={styles.signImgConatiner}>
                <Image
                  src="/assets/sign.png"
                  alt="Signature"
                  width={200}
                  height={50}
                  quality={100}
                  className={styles.signImage}
                />
              </div>
              <div className={styles.aboutConatiner}>
                <p className={styles.moreAboutMe}>More About Me</p>
                <p className={styles.credentials}>Credentials</p>
                <Image
                  className={styles.aboutCursor}
                  src="/assets/cursor.svg"
                  alt="cursor"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className={styles.projectContainer}>
              <div className={styles.myWorksImg}>
                <Image
                  src="/assets/my-works.png"
                  width={203}
                  height={114}
                  alt="My Works"
                  className={styles.myWork}
                />
              </div>
              <div className={styles.projectsTextContainer}>
                <p className={styles.showcase}>Showcase</p>
                <p className={styles.projects}>Projects</p>
                <Image
                  className={styles.projectCursor}
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
  );
};

export default HomeHeroSection;
