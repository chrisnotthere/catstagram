import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import Header from '../../components/Header';
import Image from 'next/image'
import { getAuth, signInAnonymously, onAuthStateChanged,  } from "firebase/auth";
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import { useAuth } from '../auth/authUserContext';

function signIn({ providers }) {
  const router = useRouter();
  const { signInWithEmailAndPassword } = useAuth();
  const [error, setError] = useState(null);


  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/firebase.User
  //       const uid = user.uid;
  //       user.username = 'Test User';
  //       user.image = '../public/anon.png';
  //       console.log('anon user is signed in', user);
  //       console.log(user.providerId);
  //       //router.push('/');

  // const signInGuestUser = () => {

  //   const auth = getAuth();
  //   signInWithEmailAndPassword(auth, 'guestaccount@mail.com', 'guestaccount')
  //     .then((userCredential) => {
  //       // Signed in 
  //       const user = userCredential.user;
  //       console.log('signed in')
  //       user.username = 'Guest Account';
  //       user.image = '../public/anon.png';
  //       console.log(user);
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode, errorMessage);
  //     });
  // }

  const signInGuestUser = () => {

    setError(null)
    signInWithEmailAndPassword('guestaccount@mail.com', 'guestaccount')
      .then(authUser => {
        console.log({authUser});
        authUser.user.username = 'Guest User';
        console.log(authUser.user);
        router.push('/');
      })
      .catch(error => {
        setError(error.message)
      });

  }


  return (
    <>
    <Header />

    <div className='dark:bg-gray-600 h-auto flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center'>

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
          onClick={signInGuestUser}
        >
            Sign in as Guest
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
