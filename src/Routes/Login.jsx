import React from 'react'
import LoginForm from '../component/LoginForm'

export default function Login() {
  return (
    <main className="container mx-auto px-10">
      <section className="">
        <h2 className="text-3xl font-bold">Login</h2>
        <div className="mx-auto flex justify-center items-center">
          <LoginForm/>
        </div>
      </section>
    </main>
  )
}
