import {signIn, useSession} from 'next-auth/react'

function Home() {
  const { 
    data
   } = useSession()

  console.log(
    '🚀 ~ file: index.tsx ~ line 6 ~ Home ~ data ---> ',
    data
  )
  return (
    <>
      Hello
      <button onClick={() => signIn('google')}>Sign in with Google</button>
    </>
  )
}

export default Home