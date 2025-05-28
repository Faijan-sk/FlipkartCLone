import React from 'react'

// // importing logo
import FaceBook from './../../assets/images/logo/faceBook_white.png'
import Twitter from './../../assets/images/logo/twitter_white.png'
import Youtube from './../../assets/images/logo/youtube_white.png'
import Instagram from './../../assets/images/logo/instagram_white.png'
import Seller from './../../assets/images/footer/Seller.png'
import Advertisment from './../../assets/images/footer/Advirtisement.png'
import GiftCards from './../../assets/images/footer/giftbox.png'
import Help from './../../assets/images/footer/help.png'
import CopyWrite from './../../assets/images/footer/copyright_yellow.png'

function index() {
  return (
    <div className="footer row">
      <div className="col-12 col-lg-12 col-md-12 d-flex">
        <div className="col-lg-2 col-md-2">
          <div className="footer-block">
            <h6 className="footer-heading">ABOUT</h6>
            <ul className="ul-design">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Career</li>
              <li>Flipkart Stories</li>
              <li>Press</li>
              <li>Corporate Information</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-2">
          <div className="footer-block">
            <h6 className="footer-heading">GROUP COMPANIES</h6>
            <ul className="ul-design">
              <li>Myntra</li>
              <li>Cleatrip</li>
              <li>Shopsy</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-2">
          <div className="footer-block">
            <h6 className="footer-heading">help</h6>
            <ul className="ul-design">
              <li>Payment</li>
              <li>Shipping</li>
              <li>Cancellation & return</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-2">
          <div className="footer-block">
            <h6 className="footer-heading">Consumer policy</h6>
            <ul className="ul-design">
              <li>Cancellation & return</li>
              <li>Turms of Use</li>
              <li>Security</li>
              <li>Privacy</li>
              <li>Sitemap</li>
              <li>Grievance Redressal</li>
              <li>EPR Compliance </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-2">
          <div className="footer-block">
            <h6 className="footer-heading">mail us </h6>
            <div className="footer-p">
              <p>Flipkart Internet Private Limited,</p>
              <p>Buildings Alyssa, Begonia &</p>
              <p>Clove Embassy Tech Village</p>
              <p> Outer Ring Road, Devarabeesanahalli, </p>
              <p> Bengaluru, 560103, </p>
              <p> Karnataka, India</p>
            </div>
          </div>
          <h6 className="footer-heading mt-4 text-secondary">Social :</h6>
          <div className="d-flex justify-content-start gap-3 text-start">
            <img style={{ height: '25px' }} src={FaceBook} alt="FaceBook" />
            <img style={{ height: '25px' }} src={Twitter} alt="Twitter" />{' '}
            <img style={{ height: '25px' }} src={Instagram} alt="Instagram" />{' '}
            <img style={{ height: '25px' }} src={Youtube} alt="Youtube" />
          </div>
        </div>

        <div className="col-lg-2 col-md-2">
          <div className="footer-block">
            <h6 className="footer-heading">Registered Office Address </h6>
            <div className="footer-p">
              <p>Flipkart Internet Private Limited, </p>
              <p> Buildings Alyssa, Begonia & </p>
              <p> Clove Embassy Tech Village, </p>
              <p> Outer Ring Road, Devarabeesanahalli, </p>
              <p> Bengaluru, 560103, </p>
              <p> Karnataka, India </p>
              <p> CIN : U51109KA2012PTC066107 </p>
              <p>
                Telephone:
                <a href="tel:044-45614700" className="mx-1">
                  044-45614700
                </a>{' '}
                /
                <a href="tel:044-67415800" className="ms-1">
                  044-67415800
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="me-5 ms-5">
        <ul className="footer-last gap-5 px-5">
          <li>
            <img
              src={Seller}
              style={{ height: '15px', marginRight: '8px' }}
              alt="Become a Seller"
            />
            Bacome a Seller
          </li>
          <li>
            <img
              src={Advertisment}
              style={{ height: '15px', marginRight: '8px' }}
              alt="Become a Seller"
            />
            Advirtise
          </li>
          <li>
            <img
              src={GiftCards}
              style={{ height: '15px', marginRight: '8px' }}
              alt="Become a Seller"
            />
            Gift Cards{' '}
          </li>
          <li>
            {' '}
            <img
              src={Help}
              style={{ height: '15px', marginRight: '8px' }}
              alt="Become a Seller"
            />
            Help Center
          </li>
          <li>
            {' '}
            <img
              src={CopyWrite}
              style={{ height: '15px', marginRight: '8px' }}
              alt="Become a Seller"
            />
            2007-2025 Flipkart.com
          </li>
          <li>card logo</li>
        </ul>
      </div>
    </div>
  )
}

export default index
