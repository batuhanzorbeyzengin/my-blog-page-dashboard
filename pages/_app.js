import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import '../styles/sb-admin-2.min.css'
import '../styles/fontawesome-free/css/all.min.css'
import { Provider } from 'react-redux'
import store from '../stores'

export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
