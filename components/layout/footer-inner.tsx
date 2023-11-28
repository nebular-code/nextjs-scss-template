import Image from "next/image";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

export default function FooterInner() {
  const socials = [
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/profile.php?id=61552300967956",
    },
    { icon: <FaYoutube />, link: "https://www.youtube.com/@CoachIanTapaoan" },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/eliteacesathletics",
    },
  ];

  return (
    <div className="footer-wrapper">
      <div className="row align-items-center justify-content-between">
        <div className="footer-title col-lg-4 col-md-6 col-sm-6 col-12">
          <a href="/">
            <p>Elite Aces Athletics | Est. 2023</p>
          </a>
          <Image
            width={40}
            height={30}
            className="footer-title-flag"
            src="/assets/images/canada.png"
            alt="Canada"
          />
        </div>
        <div className="footer-socials col-lg-4 col-md-6 col-sm-6 col-12">
          <ul className="social-share rn-lg-size">
            {socials.map((val, i) => (
              <li key={i}>
                <a className="" href={`${val.link}`}>{val.icon}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-nebular col-lg-4 col-md-12 col-sm-12 col-12">
          <p>
            Created by{" "}
            <a href="https://nebularinteractive.com">
              nebularinteractive.com
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
