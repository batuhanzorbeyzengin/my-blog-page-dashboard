import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import '../styles/sb-admin-2.min.css'
import '../styles/fontawesome-free/css/all.min.css'
import { useState, createContext } from 'react'
import AppContext from '../components/AppContext'

export default function App({ Component, pageProps }) {

  const [userDetail, setUserDetail] = useState({})

  return (
    <AppContext.Provider value={{ userDetail, setUserDetail }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}
