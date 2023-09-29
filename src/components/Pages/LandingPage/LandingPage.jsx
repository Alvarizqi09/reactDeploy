import './LandingPage.css'
import LandingPagE from '/src/assets/Landing-Page.png'
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate()
  return (
    <div>
        <header>
            <nav>
                <h1>Simple Header</h1>
                    <ul>
                        <li><a href="#Home" className="Active">Home</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#About">About</a></li>
                    </ul>
            </nav>
        </header>
        <main id="Home">
            <section className="Hero-Section">
            <div>
                <div>
                    <h1>Better Solution For Your Business</h1>
                    <p>
                    We are a team of talented designers making websites with Bootstrap
                    </p>
                </div>
                <div>
                    <button 
                        className="get-started"
                        onClick={() => navigate('/Main')}>Go To Create Product</button>
                    <button className="watch">Watch Video</button>
                </div>
                </div>
                <img src={LandingPagE} alt="image" />
            </section>
            <section className="Newsletter-Section">
                <div>
                    <h2>Join Our Newsletter</h2>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    <form action="#" method="post">
                        <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        />
                        <a
                        href=""
                        className="NewsletterButton"
                        >
                        Subscribe
                        </a>
                    </form>
                </div>
            </section>
        </main>
        <footer>
            <section className="arsha">
            <h1>ARSHA</h1>
            <p>
                A108 Adam Street
                <br />
                New York NY,535002
                <br />
                United States
            </p>
            <br />
            <p>
                <span style={{ fontWeight: "bold" }}>Phone :</span> +1 5589 55488 55
            </p>
            <p>
                <span style={{ fontWeight: "bold" }}>Email :</span> info@example.com
            </p>
            </section>
            <section className="usefull">
            <h4>Usefull Link</h4>
            <ul>
                <li>
                <a href="">Home</a>
                </li>
                <li>
                <a href="">About Us</a>
                </li>
                <li>
                <a href="">Services</a>
                </li>
                <li>
                <a href="">Terms Of Services</a>
                </li>
                <li>
                <a href=""> Policy</a>
                </li>
            </ul>
            </section>
            <section className="our">
            <h4>Our Services</h4>
            <ul>
                <li>
                <a href="">Web Design</a>
                </li>
                <li>
                <a href="">Web Development</a>
                </li>
                <li>
                <a href="">Product Management</a>
                </li>
                <li>
                <a href="">Marketing</a>
                </li>
                <li>
                <a href="">Graphic Design</a>
                </li>
            </ul>
            </section>
            <section className="social">
            <h4>Our Social Network</h4>
            <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna derita
                valies
            </p>
            <ul>
                <li className="circle">
                <a href="" />
                </li>
                <li className="circle2">
                <a href="" />
                </li>
                <li className="circle3">
                <a href="" />
                </li>
                <li className="circle4">
                <a href="" />
                </li>
                <li className="circle5">
                <a href="" />
                </li>
            </ul>
            </section>
        </footer>
        <section className="bottom">
            <div className="copy">
            <p>
                © Copyright <span style={{ fontWeight: "bold" }}> Arsha. </span>All
                Right Reserved
            </p>
            </div>
            <div className="bootstrap">
            <p>
                Designed by <a href="">BootstrapMade</a>
            </p>
            </div>
        </section>
    </div>
  )
}

export default LandingPage