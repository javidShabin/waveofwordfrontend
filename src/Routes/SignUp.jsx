import React from 'react'
import SignupForm from '../component/SignUpForm'

export default function SignUp() {
  return (
    <div className='container mx-auto px-10'>
      <section>
        <h1 className='text-[25px] font-bold'>Sign Up</h1>
        <SignupForm/>
      </section>
    </div>
  )
}
