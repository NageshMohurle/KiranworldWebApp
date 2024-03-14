import React from 'react'
import "../style/home.css"
import Products from './products'
import Footer from './footer'
const home = () => {
    return (
        <div className='container'>
            <div className='home'>
                <nav>
                    <div><img src='./images/Logo KiranaWorld.png' alt='' /></div>
                    <div className='search-and-location'>
                        <div className="location-box">
                            <span className="bi bi-geo-alt location-sign"></span>
                            <p className='location-text'>Your Location</p>
                            <span className="fa-solid fa-chevron-down"></span>
                        </div>
                        <div className='search-box'>
                            <input type="text" placeholder='I am searching for...' />
                            <span className='bi bi-search'></span>
                        </div>
                    </div>
                    <div className='contact'>
                        <span className='bi bi-telephone'></span>|
                        <span className='bi bi-cart'></span>|
                        <div className='login-person'>
                            <span className='bi bi-person'></span>
                            <span>Login</span>
                        </div>
                    </div>
                </nav>

                <marquee direction="left" style={{ color: '#0a976e' }}>Order of Grocery is made on whatsapp for some time due to site upgradation, However Fruits, Vegetables & Nonveg delivery will be done in 90 minutes.</marquee>
            </div>
            <div className="carousel">
                <img src="./images/carousel1.jpg" alt="" />
            </div>
            <section>
                <Products />
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default home
