import React, { useEffect } from "react";
import "./Contact.scss";

const Contact = () => {
  useEffect(() => {
    const loadScript = (src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.head.appendChild(script);
      return script;
    };
    const web3FormsScript = loadScript(
      "https://web3forms.com/client/script.js"
    );
    return () => {
      document.head.removeChild(web3FormsScript);
    };
  }, []);

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p className="justify">
          If you have any questions, suggestions, or want to contact, feel free
          to reach out!
        </p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p className="justify">
                    Vadodara, Gujarat
                  </p>
                </div>
              </div>
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i className="bi bi-globe flex-shrink-0"></i>
                <div>
                  <h3>Website</h3>
                </div>
              </div>
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email</h3>
                  <p>jaypatel91202@gmail.com</p>
                </div>
              </div>
              <iframe
                title="Jay's Point"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.401258904646!2d73.18121817458194!3d22.30715834309127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8f2d2f24aab%3A0x8c5f3ecf1c27b0ce!2sVadodara%2C%20Gujarat!5e1!3m2!1sen!2sin!4v1743928690762!5m2!1sen!2sin"
                className="map-iframe"
                allowFullScreen
                loading="lazy"
              ></iframe>
              
            </div>
          </div>
          <div className="col-lg-7">
            <form
              action="https://api.web3forms.com/submit"
              method="post"
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <input
                type="hidden"
                name="access_key"
                value="05b33b8a-c5c5-4865-9c19-0f1cb5c5146b"
              />
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name-field"
                    className="form-control"
                    required
                    placeholder="Enter your name"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email-field"
                    required
                    placeholder="Enter your email"
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject-field"
                    required
                    placeholder="Enter the subject"
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    id="message-field"
                    required
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div className="col-md-12 captcha-container">
                  <label htmlFor="captcha" className="pb-2"></label>
                  <div
                    id="captcha"
                    className="h-captcha"
                    data-captcha="true"
                    aria-label="Captcha verification"
                  ></div>
                </div>
                <div className="col-md-12 text-center">
                  <button type="submit" aria-label="Send Message">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
