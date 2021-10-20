//import 'tailwindcss/tailwind.css'
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react'
import { RecoilRoot } from 'recoil';
import { AuthUserProvider } from './auth/authUserContext';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (
  // authentication state for google signin
  <SessionProvider session={session}>  
    {/* // custom provider for signin a guest */}
    <AuthUserProvider> 
      {/* // recoil global state store */}
      <RecoilRoot>           
        {/* // the app              */}
        <Component {...pageProps} />      
      </RecoilRoot>
    </AuthUserProvider>
  </SessionProvider>
  
  )
}

export default MyApp
