import { Provider } from 'react-redux';
import store from '../redux/store';
import Navbar from '../components/navbar/NavBar';
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
