import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import Header from '../../components/Header';
import Image from 'next/image'
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { app } from '../../firebase';
import { useRouter } from 'next/dist/client/router';

function signIn({ providers }) {

  console.log(providers);
  const router = useRouter();

  const signInAnon = () => {
    
    console.log('signing in as anon...');
    const auth = getAuth();

    signInAnonymously(auth)
      .then(() => {
        // Signed in..
        console.log('signed in')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        user.username = 'Test User';
        user.image = '../public/anon.png';
        console.log('anon user is signed in', user);
        router.push('/');
      } else {
        // User is signed out
        // ...
      }
    });

  }

  return (
    <>
    <Header />

    <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center'>

        <Image 
              src='/../public/logo.png'
              width="300" 
              height="100"
              objectFit='contain'
            />

      <p className='font-xs italic'>
        This is not a REAL app, it is for educational purposes only.
      </p>

      <div className='mt-40'>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button 
            className='p-3 bg-blue-500 rounded-lg text-white my-2 signinBtn'
            onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/'})}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}

        <button 
          className='p-3 bg-blue-500 rounded-lg text-white signinBtn'
          onClick={signInAnon}
        >
            Sign in Anonymously
          </button>

      </div>
    </div>
    </>
  )
}

// server side render
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers
    }
  }
}

export default signIn;
