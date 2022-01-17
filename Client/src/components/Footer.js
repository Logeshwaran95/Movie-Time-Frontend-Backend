import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <div style={{ background: "#0C111B", color: "white" }} id="foot">
            <div class="footer-dark">
                <footer>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 col-md-3 item">
                                <h3>Partnerships</h3>
                                <ul>
                                    <li><a href="#">Rotten Tomatoes</a></li>
                                    <li><a href="#">IMBD</a></li>
                                    <li><a href="#">World Review</a></li>
                                </ul>
                            </div>
                            <div class="col-sm-6 col-md-3 item">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </div>
                            <div class="col-md-6 item text">
                                <h3>Movie Mania</h3>
                                <p>Movie Time is a Movie streaming site that shows all latest movies and series . subscribe and watch movies anytime ! anywhere !</p>
                            </div>
                            <div class="col item social"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-google"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>

                        </div>

                        <p class="copyright">Copyright © 2021</p>
                    </div>
                </footer>
            </div>

        </div>
    );
}

export default Footer;