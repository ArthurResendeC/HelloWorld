// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Profile } from "./components/Profile"

function App() {

  return (
    <>
      <div className='flex flex-col h-screen w-full gap-20 items-center justify-center bg-blue-500'>
        <Profile
          avatar={viteLogo}
          bio='Lorem ipsum dolor sit amet cosecteneur ameli katen'
          email='email@email.com'
          githubUrl='https://github.com'
          linkedinUrl='https://linkedin.com.br'
          twitterUrl='https://x.com'
          name='John Doe'
          phone='+55 22 99232-9458'>
        </Profile>
      </div>
    </>
  )
}

export default App
