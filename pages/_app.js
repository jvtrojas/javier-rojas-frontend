import App from 'next/app';
import auth0 from '../services/auth0';
import NavHeaderLayout from '../components/layouts/NavHeaderLayout';
import BlackSquareShuffler from '../components/layouts/BlackSquareShuffler';
import { useState } from 'react';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/mains.scss';


function MyApp({ Component, pageProps, auth }) {

  let [ blackSquareTrigger, setBlackSquareTrigger] = useState(0);

    const handleBlackSquareClick= () => {
      setBlackSquareTrigger(prevState => prevState + 1)
    }

    return (
      <>
        <NavHeaderLayout setBlackSquareTrigger={setBlackSquareTrigger} />
        <BlackSquareShuffler handleBlackSquareShuffler={handleBlackSquareClick} />
        <Component {...pageProps} blackSquareTrigger={blackSquareTrigger} auth={auth} />
      </>
      )
  }

  MyApp.getInitialProps = async (appContext) => {
    let appProps = await App.getInitialProps(appContext);
    const user = process.browser ? await auth0.clientAuth() : await  auth0.serverAuth(appContext.ctx.req);
    const auth = {user, isAuthenticated: !!user};
    return {...appProps, auth};
  }

  export default MyApp;