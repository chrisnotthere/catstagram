//import 'tailwindcss/tailwind.css'
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react'
import { RecoilRoot } from 'recoil';
import { AuthUserProvider } from './auth/authUserContext';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (
    //for dark mode
    <ThemeProvider enableSystem={true} attribute='class' >
      {/* authentication state for google signin */}
      <SessionProvider session={session}>  
        {/* custom provider for signin a guest */}
        <AuthUserProvider> 
          {/* recoil global state store */}
          <RecoilRoot>           
            {/* the app itself             */}
            <Component {...pageProps} />      
          </RecoilRoot>
        </AuthUserProvider>
      </SessionProvider>
    </ThemeProvider>
  
  )
}

export default MyApp
