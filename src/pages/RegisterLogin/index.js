import React, { useState } from 'react';
import Link from "next/link";
const SignUpForm = () => {
  

  const [payload, setPayload] = useState({
    name: '',
    email: '',
    password: '',
    repeatpassword: ''
  });

  const onChange = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();

   const firePayload = async() => {
    const response = await fetch(`/api/index`,{
    method: 'POST',
    body: JSON.stringify({payload}),
    headers: {'Content-Type': 'application/json'}
   })
    
   }

   alert(payload.email);

    
  };

 
  

  return (
    <section className='h-full gradient-form bg-gray-200 md:h-screen' style={{backgroundImage:`url(https://images.unsplash.com/photo-1667808933015-045a3730c854?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)`,backgroundRepeat:'no-repeat', backgroundSize:'cover',backgroundPosition: 'center',height: '1560px'}}>
      <div className='container py-12 px-6 h-full'>
        <div className=' flex justify-center items-center flex-wrap h-full g-6 text-gray-800'>
          <div className=''>
            <div className='block bg-white shadow-lg rounded-lg'>
              <div className='lg:flex lg:flex-wrap g-0'>
                <div className='px-4 md:px-0' style={{backgroundColor:'black'}}>
                  <div className='md:p-12 md:mx-6'>
                    <div className='text-center'>
                      <h4 className='text-xl font-semibold mt-1 mb-12 pb-1' style={{color:'white'}}>
                       Signup
                      </h4>
                    </div>
                    <form>
                      <p className='mb-4' style={{color:'white'}}>
                        Already have an account
                      </p>
                      <div className='mb-4'>
                      <input
                          type='text'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Name'
                          name='name'
                          defaultValue={payload.name}
                          onChange={onChange}
                        />
                        <br/>
                        <input
                          type='email'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Your Email'
                          name='email'
                          defaultValue={payload.email}
                          onChange={onChange}
                        />
                      </div>
                      <div className='mb-4'>
                        <input
                          type='password'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Password'
                          name='password'
                          defaultValue={payload.password}
                          onChange={onChange}
                        />
                        <br/>
                         <input
                          type='password'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='repeatpassword'
                          name='repeatpassword'
                          defaultValue={payload.repeatpassword}
                          onChange={onChange}
                        />
                      </div>
                      <div className='text-center pt-1 mb-12 pb-1'>
                        <button
                        style={{backgroundColor:'red'}}
                          className='bg-green inline-block px-6 py-2.5 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
                          type='button'
                          onClick={handleSubmit}
                        >
                          Sign Up
                        </button>
                      </div>
                      <div className='flex items-center justify-between pb-6'>
                        <p className='mb-0 mr-2' style={{color:'white'}}>Do you have an account?</p>
                        
                        
                        <Link href={'/RegisterLogin/Login'}>
                        <button
                          type='button'
                          className='inline-block px-6 py-2 border-2 border-green-600 text-green-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
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