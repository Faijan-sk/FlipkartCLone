import React from 'react'
// image import
import LoginLogo from './../../assets/images/logo/login_img_c4a81e.png'

function Login() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        className="login-block mt-2 row col-12"
        style={{ maxWidth: '960px' }}
      >
        <div className="left-child col-12 col-md-5 col-lg-5">
          <h3 className="text-light text-start mt-5 mb-3 ms-3">Login</h3>
          <div className="text-start ps-3 pt-2">
            <h6 style={{ opacity: 0.6 }}>Get access to your Orders,</h6>
            <h6 style={{ opacity: 0.6 }}> Wishlist and Recommendations</h6>
          </div>
          <div>
            <img src={LoginLogo} alt="login-logo" />
          </div>
        </div>

        <div className="col-12 col-md-7 col-lg-7 bg-light">B</div>
      </div>
    </div>
  )
}

export default Login
