import React from "react";
import "./ContactSection.scss";
import "../../../src/app/Global.css";
import "../home/HomeHeroSection.scss";
import Image from "next/image";
const ContactSection = () => {
  return (
    <div className="pf-main-container">
      <section className="heroContainer  display-flex pf-contact-main-cont">
        <div className="pf-contact-detail-cont">
          <div className="pf-contact-ci-text">
            <p>CONTACT INFO</p>
          </div>
          <div className="display-flex flex-direction-column pf-contact-detail-list">
            <div className="display-flex pf-contact-mai-id-cont ">
              <div className="pf-contact-mail-box ">
                <i class="bi bi-envelope"></i>
              </div>
              <div className="pf-contact-mail-deatil-box">
                <p className="pf-contact-mail-text">MAIL US</p>
                <p className="pf-contact-mail-id-text">
                  sunnyadityaa@gmail.com
                </p>
              </div>
            </div>
            <div className="display-flex pf-contact-mai-id-cont ">
              <div className="pf-contact-mail-box ">
                <i class="bi bi-telephone"></i>
              </div>
              <div className="pf-contact-mail-deatil-box">
                <p className="pf-contact-mail-text">CONTACT US</p>
                <p className="pf-contact-mail-id-text">+91 0000000000</p>
              </div>
            </div>
            <div className="display-flex pf-contact-mai-id-cont ">
              <div className="pf-contact-mail-box ">
                <i class="bi bi-geo-alt-fill"></i>
              </div>
              <div className="pf-contact-mail-deatil-box">
                <p className="pf-contact-mail-text">LOCATION</p>
                <p className="pf-contact-mail-id-text">Patna, Bihar</p>
              </div>
            </div>
          </div>
          <div className="pf-contact-social-cont">
            <div className="pf-contact-ci-text">
              <p>SOCIAL INFO</p>
            </div>
            <div className="display-flex pf-contact-social-icon-cont">
              <div className="pf-contact-icon-con">
                <i class="bi bi-github"></i>
              </div>
              <div className="pf-contact-icon-con">
                <i class="bi bi-linkedin"></i>
              </div>
              <div className="pf-contact-icon-con">
                <i class="bi bi-twitter-x"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="pf-contact-mail-cont linear-bg">
          <div className="pf-contact-pendulum ">
            <Image
              className="projectCursor"
              src="/assets/pendulum.png"
              alt="cursor"
              width={40}
              height={80}
              quality={100}
            />
          </div>
          <div className="pf-contact-mail-box-div">
            <div className="pf-contact-toget-text">
              <p>
                Let&apos;s work <span className="blue-color">together.</span>
              </p>
            </div>
            <div className="pf-contact-input-cont display-flex flex-direction-column">
              <input className="pf-contact-input" placeholder="Name *" />
              <input className="pf-contact-input" placeholder="Email *" />
              <input
                className="pf-contact-input"
                placeholder="Your Subject *"
              />
              <textarea
                className="pf-contact-input pf-contact-textarea"
                placeholder="Your Message *"
              />
              <button className="pf-contact-send-btn">Send Message</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
