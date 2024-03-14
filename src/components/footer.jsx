import React from 'react'
import '../style/footer.css'

const Footer = () => {
    return (
        <div>
            <div>
                <div className="footer">
                    <div className='item'>
                        <img src="./images/Logo KiranaWorld.png" alt="" />
                        <p>KiranaWorld- Online Grocery, Vegetables & Meat delivery in Jamshedpur</p>
                        <p>care@kiranaworld.in</p>
                    </div>
                    <div className='item'>
                        <h3>My Account</h3>

                        <p>Profile and Details</p>
                        <p>Order History</p>
                        <p>Address Message</p>

                    </div>
                    <div className='item'>
                        <h3>Information</h3>

                        <p>Returns</p>
                        <p>FAQ</p>
                        <p>Privacy Popcy</p>
                        <p>Terms and Condition</p>

                    </div>
                    <div className='item'>
                        <h3>Who Are We?</h3>

                        <p>About Us</p>
                        <p>Contact Us</p>

                    </div>
                    <div className='item' id='contact-us'>
                        <h3>Contact Us</h3>
                        <div>

                            <p className='mobile-num'>(+91) 88 77 77 9770</p>
                            <p className='mobile-num'>(+91) 88 77 77 8770</p>

                            <hr />
                            <div>
                                <p>Email Address :</p>
                                <p>care@kiranaworld.in</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-footer">
                    <div>
                        <span className='bi bi-house'></span>
                        <p>Home</p>
                    </div>
                    <div className=''>
                    <span class="fa-solid fa-list"></span>
                        <p>Category</p>
                    </div>
                    <div className=''>
                        <span className='bi bi-search'></span>
                        <p>Search</p>
                    </div>
                    <div className=''>
                        <div className='bi bi-cart'><span>0</span></div>
                        <p>Home</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
