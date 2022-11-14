import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import ReactWhatsapp from "react-whatsapp";
import FloatingWhatsApp from "react-floating-whatsapp";
import logo from "../../img/footer_logo.png";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      <section className="wrapper">
        {isVisible && (
          <div className="top-btn" onClick={goToBtn}>
            <FaArrowUp className="top-btn--icon" />
          </div>
        )}
      </section>
      <ReactWhatsapp number="+2348152966334" message="Hello World!!!" />
      <FloatingWhatsApp
        phoneNumber="2348152966334"
        accountName="MasterwaveTech"
        avatar={logo}
        statusMessage="Connect with me, Let's work together."
        allowClickAway
        notification
        styles={{
          left: "20px",
          width: "50px",
          height: "50px",
          bottom: "20px",
          zIndex: "999",
        }}
      />
    </>
  );
};

export default GoToTop;
