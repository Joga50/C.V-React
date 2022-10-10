import React from "react";
import "./styles/contact.css";

function Contact(props) {
  const { theme } = props;
  return (
    <>
      <div className={theme ? "contactContainer" : "contactContainerDark"}>
        <div className="contactMeContainer">
          <div>
            <h1>Contact Me!</h1>
            <h5>I´m always glad to answer any question.</h5>
          </div>
          <figure className="directContactContainer">
            <div>
              <p>
                <iconify-icon icon="bytesize:mobile"></iconify-icon>
              </p>
              <p>Mobile</p>
            </div>
            <div>
              <p>
                <iconify-icon icon="carbon:email"></iconify-icon>
              </p>
              <p>EMAIL</p>
            </div>
            <div>
              <p>
                <iconify-icon icon="la:linkedin"></iconify-icon>
              </p>
              <p>Linkedin</p>
            </div>
          </figure>
          <figure className="contactsInfo">
            <span>(+57) 3114229427</span>

            <span>jose.gabriel.a12@gmail.com</span>

            <span>
              <a
                href="https://www.linkedin.com/in/jose-gabriel-alvarez-b7973723a/"
                target="blank"
              >
                Direct Link
              </a>
            </span>
          </figure>
          <div className="city">
            <p>Medellin, Colombia.</p>
          </div>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                title="gps"
                width="600"
                height="200"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=medellin,%20Colombia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
              <a href="https://www.embedgooglemap.net">embeded google map</a>
            </div>
          </div>
        </div>
        <div className="contactMeForm">
          <form
            className="form"
            method="post"
            action="mailto:jose.gabriel.a12@gmail.com"
          >
            <h3>Send me a message!</h3>
            <input type="text" placeholder="Name"></input>
            <input type="email" placeholder="Email"></input>
            <input type="text" placeholder="Type of project you need"></input>
            <textarea placeholder="Message/Description"></textarea>
            <input id="submit" type="submit" value="Send Email" />
          </form>
        </div>
      </div>
      <div className="insivibleFooter"></div>
    </>
  );
}

export default Contact;
