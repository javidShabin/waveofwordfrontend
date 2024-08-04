import axios from 'axios'
import React from 'react'

import { useForm } from "react-hook-form"


export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // console.log(data)

  const onSubmit = (data) => {
    axios.post(`http://localhost:5000/auth/login`, data)
    .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}
     className="flex flex-col gap-2 mt-4 w-[1000px]">

        <label htmlFor="email">Email</label>
        <input
        className="mb-2 border border-indigo-600 py-2 rounded-md" 
         type="email" id="email" {...register("email", {required: true} )} />
        {errors.email && <span className='text-red-500'>email field is required</span>}

        <label htmlFor="password">Password</label>
        <input
        className="mb-2 border border-indigo-600 py-2 rounded-md"
         type="password" id="password" {...register("password", {required: true})} />
        {errors.password && <span className='text-red-500'>password field is required</span>}

      <input 
      className="mt-6 p-2 bg-indigo-800 text-white rounded-md"
      type="submit" />
    </form>
  )
}
