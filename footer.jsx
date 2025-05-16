import React from "react";
import './footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="links">
                    <div>
                        <h5>About</h5>
                        <h5>Privacy Policy</h5>
                    </div>
                    <div>
                        <h5>Get Help</h5>
                        <h5>Contact Us</h5>
                    </div>
                </div>

                <div className="copyright">
                    <div className="c-left">
                        <h6>Copyright © Corporation 2024 All rights reserved</h6>
                    </div>
                    <div className="c-right">
                        <img src="https://images.ctfassets.net/wtodlh47qxpt/4ZHyPA2EeaoP3aqtNDriBA/463462a9c27b0aa585e12b21ce3766e0/Social_Insta_White.svg" alt="instagram" />
                        <img src="https://images.ctfassets.net/wtodlh47qxpt/dKiu2meLcfz2DNwsg7nZw/7194830b1ba6f25b158a23d6b2c4752c/Social_Facebook_White.svg" alt="facebook" />
                        <img src="https://images.ctfassets.net/wtodlh47qxpt/78z9x0WwdkdXwGVK726EKX/6599ca34ec88e2a6f46d7d94ed85a8ad/Social_Twitter_White.svg" alt="twitter" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
