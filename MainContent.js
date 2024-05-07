import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import leftImage from '../leftImage.png';
import topImage from '../topImage.png';
import sideDishes from '../sideDishes.png';
import Card from 'react-bootstrap/Card';
import storeFront from '../storeFront.jpeg';
import storiesImage from '../storiesImage.jpeg';
import Accordion from 'react-bootstrap/Accordion';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function MainContent(props) {
  return (
    <main>
        <Container fluid>
            {/* Fixed left content */}
            <Row>
                <Col lg={5} className="fixed-column">
                    <img src={leftImage}  alt='Effortless Elegance - Enjoy the full blonde roast experience at home with our 80% recycled Aluminium coffee capsules. Perchase them at your local starbucks today.'/>
                </Col>
            {/* Scroolable content on the right */}
                <Col lg={7} className="scrollable-column">
                    <img src={topImage} alt='Liquid Luxury - Starbucks Blonde Espresso Roast, a coffe that is both smooth and creamy with a luxuriously citrus flourish'/>
                    <div className='content'>
                        <section id='latest'>
                            <h2>Take a Sip of liquid Luxury</h2>
                            <p>
                            It took 8 months and more than 80 different roast iterations before we landed on the exact flavour profile our customers wanted. This unique blend brings together the sweet citrus flavours of East African beans and the smooth body of Latin American beans, all roasted to the peak of their flavour. Try the softly balanced Blonde Roast for the smoothest expression of your favourite espresso beverage or take a bag of whole bean luxury home with you to brew the perfect cup. Also available via Starbucks Delivers on UberEats &amp; MrD.
                            </p>
                            <a href='#order' id='orderButton'>Order now</a>
                        </section>
                        <section id='sides'>
                            <h6>Your daily routine, the starbucks way</h6>
                            <Row>
                                <Col md={6}>
                                    <div className="columnOne">
                                        <img src={sideDishes} alt='Our coffees are best paired with our side dishes.'/>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="column">
                                        <h3>To Go With Your Coffee</h3>
                                        <p>
                                        We&apos;re fast becoming known for fabulous food &amp; beverage pairing options, developed by expert chefs, with both savoury and sweet menu items.
                                        </p>
                                        <p>
                                        Pairings include breakfast or lunchtime options. Have you tried our baked ciabatta filled with sliced chicken breast tossed in a herb-infused mayo mix with baby spinach and fresh avocado paired with an icy Cold Brew?
                                        </p>
                                        <a href='#order' id='orderButton'>Order now</a>
                                    </div>
                                </Col>
                            </Row>
                        </section>
                        <section id='cards'>
                            <Row>
                                <Col md={6}>
                                    <Card className='cardShadow' style={{ width: '100%' }}>
                                        <Card.Img variant="top" src={storeFront} alt='Our first store'/>
                                        <Card.Body>
                                            <Card.Title>About Us</Card.Title>
                                            <Card.Text>
                                              Find out more about our company and heritage.
                                            </Card.Text>
                                            <a href='#aboutUs' id='orderButton'>Find Out More</a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card className='cardShadow' style={{ width: '100%' }}>
                                        <Card.Img variant="top" src={storiesImage} alt='Our latest stories'/>
                                        <Card.Body>
                                            <Card.Title>Starbucks Stories</Card.Title>
                                            <Card.Text>
                                                Keep up to date with our latest stories and news.
                                            </Card.Text>
                                            <a href='#stories' id='orderButton'>Find Out More</a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </section>
                    </div>
                        <footer>
                            <Accordion className='accordion-container'>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <h2>About Us</h2>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>
                                                <a href='#aboutUs'>About Us</a>
                                            </li>
                                            <li>
                                                <a href='#ourCoffees'>Our Coffees</a>
                                            </li>
                                            <li>
                                                <a href='#impact'>Social Impact &amp; Sustainability</a>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <h2>Contact Us</h2>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>
                                                <a href='#contact'>Contact Us</a>
                                            </li>
                                            <li>
                                                <a href='#carreers'>Carreers at Starbucks SA</a>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        <h2>Starbucks Card</h2>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>
                                                <a href='starbucksCard'>Starbucks Card</a>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            {/* Social Media Links */}
                            <div id='socials'>
                                <a href='https://www.facebook.com/StarbucksSA/'>
                                    <FaFacebookF />
                                </a>
                                <a href='https://www.instagram.com/starbucks_sa/?hl=en'>
                                    <FaInstagram />
                                </a>
                                <a href='https://twitter.com/starbucks_sa?lang=en'>
                                    <FaTwitter />
                                </a>
                            </div>
                            {/* Privacy Policy, Terms of Use and Cookies */}
                            <div className='footer-nav'>
                                <ul>
                                    <li>
                                        <a href='#privacyPolicy'>Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href='#termsofUse'>Terms of Use</a>
                                    </li>
                                    <li>
                                        <a href='#cookieNotice'>Cookie Notice</a>
                                    </li>
                                    <li>
                                        <a href='#cookiePolicy'>Cookie Policy</a>
                                    </li>
                                </ul>
                            </div>
                            {/* Link to inspiration website */}
                            <p id='disclaimer'>
                                {props.disclaimer} 
                                <a href='https://www.starbucks.co.za/'>starbucks.co.za</a>
                            </p>
                            
                        </footer>
                </Col>
            </Row>
        </Container>
    </main>
  );
}

export default MainContent;