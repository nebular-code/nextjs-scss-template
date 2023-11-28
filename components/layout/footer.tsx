import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const socials = [
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com",
      className: "socials-facebook",
    },
    {
      icon: <FaYoutube />,
      link: "https://www.youtube.com",
      className: "socials-youtube",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com",
      className: "socials-instagram",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="row mb-4">
          <div className="col-lg-3">
            <img
              src="https://dieselpunkcore.com/wp-content/uploads/2014/06/logo-placeholder.png"
              alt="logo"
              width={100}
              className="mb-5 mb-lg-0"
            />
          </div>
          <div className="col-lg-3">
            <h4>Company</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h4>Pages</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h4>Support</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <p className="text-center text-sm-start">
              {new Date().getFullYear()} ©️ All Rights Reserved
            </p>
          </div>

          <div className="col-sm-6">
            <p className="text-center text-sm-end">
              Created by{" "}
              <a
                className="footer-nebularint"
                href="https://nebularinteractive.com"
              >
                nebularinteractive.com
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="footer-socials">
        <ul>
          {socials.map((item, i) => (
            <li key={i}>
              <a className={item.className} href={`${item.link}`}>
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
