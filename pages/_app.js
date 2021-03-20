import App from 'next/app';
import auth0 from '../services/auth0';
import NavHeaderLayout from '../components/layouts/NavHeaderLayout';
//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/mains.scss';

function MyApp({ Component, pageProps, auth }) {
    return (
      <>
        <NavHeaderLayout />
        <Component {...pageProps} auth={auth} />
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