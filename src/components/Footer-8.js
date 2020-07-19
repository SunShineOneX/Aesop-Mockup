import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div class="container-fluid" id="container-footer">
                <hr class="footer-begin" />
                <div class="row" id="footer-row">
                    <div class="col-lg-3">
                        <p>I would like to receive communication about Aesop products, services, stores, events and matters of cultural interest.</p>
                        <br></br>
                        <p>Email Address</p>
                        <input type="email"></input>
                    </div>
                    <div class="col-lg-3" id="footer-contact-us">
                        <p>Contact Us</p>
                        <div class="contact-options">
                            <p class="contact-links"><a href="">Contact Us</a></p>
                            <p class="contact-links"><a href="">FAQS</a></p>
                            <p class="contact-links"><a href="">Delivery and Returns</a></p>
                            <p class="contact-links"><a href="">Track your order</a></p>
                            <p class="contact-links"><a href="">Check Gift Card balance</a></p>
                            <p class="contact-links"><a href="">Terms and conditions</a></p>
                            <p class="contact-links"><a href="">Accessibility</a></p>
                        </div>
                    </div>
                    <div class="col-lg-3" id="footer-contact-us">
                    <p>About</p>
                    <div class="contact-options">
                            <p class="contact-links"><a href="">Our Story</a></p>
                            <p class="contact-links"><a href="">Careers</a></p>
                            <p class="contact-links"><a href="">Press</a></p>
                            <p class="contact-links"><a href="">Corporate gifts</a></p>
                            <p class="contact-links"><a href="">Facial appointments</a></p>
                        </div>
                    </div>
                    <div class="col-lg-3" id="footer-contact-us">
                    <p>Social</p>
                    <div class="contact-options">
                            <p class="contact-links"><a href="">Instagram</a></p>
                            <p class="contact-links"><a href="">Twitter</a></p>
                            <p class="contact-links"><a href="">LinkedIn</a></p>
                        </div>
                    </div>                   
                </div>
                
                    <div id="very-bottom-footer">
                    <p class="footer-aesop">©Aesop</p>
                    <p class="footer-country">United States</p>
                </div>
                
                
            </div>
        )
    }
}


export default Footer