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

  //Hover ID para cada link
  let [ anchorIsHovered, setAnchorIsHovered ] = useState('');

  //Array con clases
  let headerAnchorClassArray = ['color-1', 'color-2', 'color-3', 'color-4','color-5','color-6','color-7'];

  //Clase por default
  let [ classToggle, setClassToggle ] = useState('color-0');

  let handleMouseOverAnchor = id => {
    setAnchorIsHovered(id)
    setBlackSquareTrigger(0)
    let number = Math.floor(Math.random() * headerAnchorClassArray.length)
    setClassToggle(headerAnchorClassArray[number]);
  }

    return (
      <>
        <NavHeaderLayout handleMouseOverAnchor={handleMouseOverAnchor} isHovered={anchorIsHovered} classToggle={classToggle} setClassToggle={setClassToggle} setBlackSquareTrigger={setBlackSquareTrigger} />
        {/* { blackSquareTrigger.toString()} */}
        <BlackSquareShuffler handleBlackSquareShuffler={handleBlackSquareClick} anchorIsHovered={anchorIsHovered} classToggle={classToggle} />
        <Component {...pageProps} anchorIsHovered={anchorIsHovered} classToggle={classToggle} blackSquareTrigger={blackSquareTrigger} auth={auth} />
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