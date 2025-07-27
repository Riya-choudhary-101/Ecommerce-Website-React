import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className='footer'>

            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOPLET</p>
            </div>

            <div className="footer-links-grid">
                <ul>
                    <li><b>Company</b></li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>Press</li>
                    <li>Affiliates</li>
                </ul>
                <ul>
                    <li><b>Help</b></li>
                    <li>FAQs</li>
                    <li>Shipping</li>
                    <li>Returns</li>
                    <li>Track Order</li>
                    <li>Support</li>
                </ul>
                <ul>
                    <li><b>Legal</b></li>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                    <li>Refund Policy</li>
                    <li>Cookies</li>
                    <li>Accessibility</li>
                </ul>
                <ul>
                    <li><b>Quick Links</b></li>
                    <li>Shop Men</li>
                    <li>Shop Women</li>
                    <li>Shop Kids</li>
                    <li>Gift Cards</li>
                    <li>Coupons</li>
                </ul>
                <ul>
                    <li><b>Connect</b></li>
                    <li>Contact Us</li>
                    <li>Store Locator</li>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Pinterest</li>
                </ul>
            </div>

            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <i className="fa-brands fa-instagram"></i>
                </div>
                <div className="footer-icons-container">
                    <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div className="footer-icons-container">
                    <i className="fa-brands fa-x-twitter"></i>
                </div>
                <div className="footer-icons-container">
                    <i className="fa-brands fa-pinterest-p"></i>
                </div>
                <div className="footer-icons-container">
                    <i className="fa-brands fa-whatsapp"></i>
                </div>
            </div>

            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Right Reserved</p>
            </div>

        </div>
    )
}

export default Footer
