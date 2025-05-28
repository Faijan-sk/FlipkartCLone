import React from 'react'
// image import
import BannerPng from './../../assets/images/logo/login_img_c4a81e.png'
import LoginForm from './LoginForm'

function Login() {
  return (
    <div className="login-container">
      <div
        className="login-block mt-2 row col-12"
        style={{ maxWidth: '960px' }}
      >
        <div className="left-child col-12 col-md-5 col-lg-5 d-flex flex-column justify-content-between">
          <div className="text-start ps-3 pt-2">
            <h3 className="text-light text-start mt-5 mb-3 ms-3">Login</h3>
            <h6 style={{ opacity: 0.6 }}>Get access to your Orders,</h6>
            <h6 style={{ opacity: 0.6 }}> Wishlist and Recommendations</h6>
          </div>
          <div className="mb-5">
            <img
              src={BannerPng}
              style={{ objectFit: 'contain' }}
              alt="login-logo"
            />
          </div>
        </div>

        <div className="col-12 col-md-7 col-lg-7 bg-light d-flex flex-column justify-content-between">
          <div className="mt-5">
            <LoginForm />
          </div>
          <div className="mb-3">
            <p style={{ color: '#2874f0', fontWeight: '500' }}>
              New to Flipkart? Create an account
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
