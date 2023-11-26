import "./footer.css";
import facebookSrc from "./footerImg/facebook.svg";
import twitterSrc from "./footerImg/twitter.svg";
import youtubeSrc from "./footerImg/youtube.svg";
import instagramSrc from "./footerImg/instagram.svg";

export function Footer() {
  return (
    <footer>
      <div className="footer-box">
        <span className="copyright">©codeit - 2023</span>
        <div className="footer-links">
          <a className="footer-link" href="privacy.html">
            Privacy Policy
          </a>
          <a className="footer-link" href="faq.html">
            FAQ
          </a>
        </div>
        <div className="sns">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={facebookSrc} alt="facebook 홈페이지로 연결된 facebook 로고" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src={twitterSrc} alt="twitter 홈페이지로 연결된 twitter 로고" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <img src={youtubeSrc} alt="youtube 홈페이지로 연결된 youtube 로고" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={instagramSrc} alt="instagram 홈페이지로 연결된 instagram 로고" />
          </a>
        </div>
      </div>
    </footer>
  );
}
