import logo from "../assets/images/logo.png"
import React from "react"
import { useState } from "react"
import Validation from "../components/validation"

const Signin = () => {
    const [values, setValues] = useState({
      email:'',
      password:''
    })
    const [errors, setErrors] = useState({})
      

function handleInput(event){
    const newObject = {...values, [event.target.email]: event.target.value}
    setValues(newObject)
}

function handleValidation(event){
  event.preventDefault();
  setErrors(Validation(values));
}

  return (
    <div>

<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"  >

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mt-10 mx-auto h-20 w-auto"
            src={logo}
            alt="LEGOFRUIT"
          />
          <h1 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              LEGOFRUIT
          </h1>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="auth-form space-y-6" action="#" method="POST" onSubmit={handleValidation}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleInput}
                  autoComplete="email"
                  required
                  className="block w-full t-1 px-3 rounded-md border-0 py-1.5
                     text-gray-900 shadow-sm ring-1 ring-inset
                     ring-gray-300
                     placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-violet-600 sm:text-sm sm:leading-6"
                  placeholder="example@gmail.com"
                />
                {errors.email && <p style={{color: "red"}}>{errors.email}</p>}

              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold
                    text-violet-600
                    hover:text-violet-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleInput}
                  autoComplete="current-password"
                  required
                  className="block w-full t-1 px-3 rounded-md border-0 py-1.5
                    text-gray-900 shadow-sm ring-1 ring-inset 
                    ring-gray-300 
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                    focus:ring-violet-600 sm:text-sm sm:leading-6"
                />
                {errors.password && <p style={{color: "red"}}>{errors.password}</p>}

              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md
                  bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6
                  text-white shadow-sm
                  hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                  focus-visible:outline-violet-600"
              >
                Sign in
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Signin