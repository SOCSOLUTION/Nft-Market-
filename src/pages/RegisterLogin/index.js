import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
const SignUpForm = () => {
  const [payload, setPayload] = useState({
    name: '',
    email: '',
    password: '',
    repeatpassword: '',
  });

  const onChange = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {

  //   e.preventDefault();

  //  const firePayload = async() => {
  //  axios.post('/api/signup', payload)
  //   alert(response.status);
  //  }
  function firePayload() {
    axios.post('http://localhost:3000/api/Signupdata', payload);
  }

  return (
    <section
      className="gradient-form h-full bg-gray-200 md:h-screen"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1667808933015-045a3730c854?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '1560px',
      }}
    >
      <div className="container h-full py-12 px-6">
        <div className=" g-6 flex h-full flex-wrap items-center justify-center text-gray-800">
          <div className="">
            <div className="block rounded-lg bg-white shadow-lg">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div
                  className="px-4 md:px-0"
                  style={{ backgroundColor: 'black' }}
                >
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <h4
                        className="mt-1 mb-12 pb-1 text-xl font-semibold"
                        style={{ color: 'white' }}
                      >
                        Signup
                      </h4>
                    </div>
                    <form>
                      <p className="mb-4" style={{ color: 'white' }}>
                        Already have an account
                      </p>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                          placeholder="Name"
                          name="name"
                          defaultValue={payload.name}
                          onChange={onChange}
                        />
                        <br />
                        <input
                          type="email"
                          className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                          placeholder="Your Email"
                          name="email"
                          defaultValue={payload.email}
                          onChange={onChange}
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                          placeholder="Password"
                          name="password"
                          defaultValue={payload.password}
                          onChange={onChange}
                        />
                        <br />
                        <input
                          type="password"
                          className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                          placeholder="repeatpassword"
                          name="repeatpassword"
                          defaultValue={payload.repeatpassword}
                          onChange={onChange}
                        />
                      </div>
                      <div className="mb-12 pt-1 pb-1 text-center">
                        <button
                          style={{ backgroundColor: 'red' }}
                          className="bg-green mb-3 inline-block w-full rounded px-6 py-2.5 text-xs font-medium uppercase leading-tight text-black shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                          type="button"
                          onClick={firePayload}
                        >
                          Sign Up
                        </button>
                      </div>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2" style={{ color: 'white' }}>
                          Do you have an account?
                        </p>

                        <Link href={'/RegisterLogin/Login'}>
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-green-600 px-6 py-2 text-xs font-medium uppercase leading-tight text-green-600 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                          >
                            Log In
                          </button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
