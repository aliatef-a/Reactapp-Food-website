import React from 'react'
import './footer.css'
function Footer() {
  return (
    <footer>
        <div className="footer-container">
            <div className="footer-section about">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula dolor et purus feugiat, vel aliquet turpis dictum.</p>
            </div>
            <div className="footer-section contact">
                <h2>Contact Us</h2>
                <p>Email: @aliatef.a612@gmail.com</p>
                <p>Phone: +201019860797</p>
            </div>
        </div>
        <div className="footer-bottom">
            &copy; 2024 Your FrontEnd Developer | Designed by ALi Atef
        </div>
    </footer>
  )
}

export default Footer
