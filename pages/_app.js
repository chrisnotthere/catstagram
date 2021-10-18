//import 'tailwindcss/tailwind.css'
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react'
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (
  // authentication state
  <SessionProvider session={session}>   
    {/* // recoil global state store */}
    <RecoilRoot>           
      {/* // the app              */}
      <Component {...pageProps} />      
    </RecoilRoot>
  </SessionProvider>
  
  )
}

export default MyApp
