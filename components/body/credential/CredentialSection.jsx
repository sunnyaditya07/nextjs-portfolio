"use client";
import React, { useEffect, useRef } from "react";
import "./CredentialSection.scss";
import "../../../src/app/Global.css";
import "../home/HomeHeroSection.scss";
import Image from "next/image";
const CredentialSection = () => {
  return (
    <div className="pf-main-container">
      <section className="heroContainer pf-credential-main-cont display-flex">
        <div className="linear-bg pf-credential-pic-detail-cont">
          <div className="pf-credential-box">
            <div className="pf-credential-pic-box">
              <Image
                src="/assets/photo.jpg"
                className="pf-about-profilePic"
                width={300}
                height={300}
                alt="Profile Pic"
                quality={100}
              />
            </div>
            <div className="pf-credential-detail-cont">
              <div className="pf-credential-userid-box">
                <p className="pf-credential-name blue-color">Sunny Kumar</p>
                <p className="pf-credential-userid">@sunny_adityaa</p>
              </div>
              <div className="display-flex pf-credential-social-cont">
                <div className="pf-profile-icon-box">
                  <i class="bi bi-github"></i>
                </div>
                <div className="pf-profile-icon-box">
                  <i class="bi bi-linkedin"></i>
                </div>
                <div className="pf-profile-icon-box">
                  <i class="bi bi-instagram"></i>
                </div>
                <div className="pf-profile-icon-box">
                  <i class="bi bi-twitter-x"></i>
                </div>
              </div>
              <div>
                <button className="pf-credential-send-btn">Contact Me</button>
              </div>
            </div>
          </div>
        </div>
        <div className="pf-credentail-detail-main-cont">
          <div className="pf-credential-detail-box">
            <p className="pf-credent-title-text">About Me</p>
            <p className="pf-credent-detail-text">
              Sit amet luctussd fav venenatis, lectus magna fringilla inis urna,
              porttitor rhoncus dolor purus non enim praesent in elementum sahas
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etisam dignissim diam quis enim lobortis viverra orci sagittis eu
              volutpat odio facilisis mauris sit. Scelerisque fermentum duisi
              faucibus in ornare quam sisd sit amet luctussd fav venenatis,
              lectus magna fringilla zac urna, porttitor rhoncus dolor purus non
              enim praesent cuz elementum sahas facilisis leot.
            </p>
          </div>
          <div className="pf-credential-detail-box">
            <p className="pf-credent-title-text-2">EXPERIENCE</p>
            <div>
              <p className="pf-credent-date-text">2023-Present</p>
              <p className="pf-cred-work-title">Front-End Developer</p>
              <p className="pf-cred-company-title">Hexanova Media Tech</p>
            </div>
            <p className="pf-credent-detail-text">
              Sit amet luctussd fav venenatis, lectus magna fringilla inis urna,
              porttitor rhoncus dolor purus non enim praesent in elementum sahas
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etisam dignissim diam quis enim lobortis viverra orci sagittis eu
              volutpat odio facilisis mauris sit. Scelerisque fermentum duisi
              faucibus in ornare quam sisd sit amet luctussd fav venenatis,
              lectus magna fringilla zac urna, porttitor rhoncus dolor purus non
              enim praesent cuz elementum sahas facilisis leot.
            </p>
          </div>
          <div className="pf-credential-detail-box">
            <p className="pf-credent-title-text-2">EDUCATION</p>
            <div>
              <p className="pf-credent-date-text">2023-Present</p>
              <p className="pf-cred-work-title">Front-End Developer</p>
              <p className="pf-cred-company-title">Hexanova Media Tech</p>
            </div>
            <p className="pf-credent-detail-text">
              Sit amet luctussd fav venenatis, lectus magna fringilla inis urna,
              porttitor rhoncus dolor purus non enim praesent in elementum sahas
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etisam dignissim diam quis enim lobortis viverra orci sagittis eu
              volutpat odio facilisis mauris sit. Scelerisque fermentum duisi
              faucibus in ornare quam sisd sit amet luctussd fav venenatis,
              lectus magna fringilla zac urna, porttitor rhoncus dolor purus non
              enim praesent cuz elementum sahas facilisis leot.
            </p>
          </div>
          <div className="pf-credential-detail-box">
            <p className="pf-credent-title-text-2 ">SKILLS</p>
            <div className="pf-cred-skill-cont">
              <div>
                <p className="pf-cred-skill-percent">76%</p>
                <p className="pf-cred-skill-text">JavaScript</p>
              </div>
              <div>
                <p className="pf-cred-skill-percent">76%</p>
                <p className="pf-cred-skill-text">JavaScript</p>
              </div>
              <div>
                <p className="pf-cred-skill-percent">76%</p>
                <p className="pf-cred-skill-text">JavaScript</p>
              </div>
              <div>
                <p className="pf-cred-skill-percent">76%</p>
                <p className="pf-cred-skill-text">JavaScript</p>
              </div>
              <div>
                <p className="pf-cred-skill-percent">76%</p>
                <p className="pf-cred-skill-text">JavaScript</p>
              </div>
              <div>
                <p className="pf-cred-skill-percent">76%</p>
                <p className="pf-cred-skill-text">JavaScript</p>
              </div>
              <div>
                <p className="pf-cred-skill-percent">76%</p>
                <p className="pf-cred-skill-text">JavaScript</p>
              </div>
              <div>
                <p className="pf-cred-skill-percent">76%</p>
                <p className="pf-cred-skill-text">JavaScript</p>
              </div>
              <div>
                <p className="pf-cred-skill-percent">76%</p>
                <p className="pf-cred-skill-text">JavaScript</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CredentialSection;
