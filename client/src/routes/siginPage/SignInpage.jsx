import { SignIn } from '@clerk/clerk-react'
import React from 'react'
import './signInpage.css'

const SignInpage = () => {
    return (
        <div className="signInpage">
        <SignIn
          path="/sign-in"
          signUpUrl="/sign-up"
          forceRedirectUrl="/dashboard"
        />
      </div>
    )
}

export default SignInpage