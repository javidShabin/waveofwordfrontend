import React from "react";
import SignupForm from "../component/SignUpForm";

export default function SignUp() {
  return (
    <main className="container mx-auto px-10">
      <section className="">
        <h2 className="text-3xl font-bold">SignUp</h2>
        <div className="mx-auto flex justify-center items-center">
          <SignupForm />
        </div>
      </section>
    </main>
  );
}
