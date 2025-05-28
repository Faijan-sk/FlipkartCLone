import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function LoginForm() {
  const [otpSendCount, setOtpSendCount] = useState(0)
  const [btnValue, setBtnValue] = useState('Request OTP')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  async function onsubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setOtpSendCount((prevCopount) => prevCopount + 1)

    if (otpSendCount >= 3) {
      alert('Please try again later')
      return
    }

    if (otpSendCount >= 1) {
      setBtnValue('Send Again')
    }
    console.table(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="mx-3">
          <input
            placeholder="Enter Mobile/Enter Email"
            type="text"
            {...register('username', {
              required: true,
            })}
            style={{
              width: '100%',
              padding: '10px',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              fontSize: '16px',
            }}
          />
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '2px',
              background: '#bcbcbc',
              marginTop: '5px',
            }}
          >
            <div
              style={{
                position: 'absolute',
                height: '2px',
                top: '0px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#2874f0',
                transition: 'width ease 0.6s',
              }}
            ></div>
          </div>
          {errors.username && (
            <p className="text-danger">{errors.username.message}</p>
          )}
        </div>
        <div className="mt-5">
          <p
            className="opacity-20 ms-4 text-start"
            style={{ fontSize: '12px' }}
          >
            By continuing, you agree to Flipkart's{' '}
            <span style={{ color: '#2874f0' }}>Terms of Use</span> and{' '}
            <span style={{ color: '#2874f0' }}>Privacy Policy</span>.
          </p>

          <button
            className="submit-btn border-none"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending OTP...' : btnValue}
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
