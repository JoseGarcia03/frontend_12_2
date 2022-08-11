import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './Routes/AppRouter'

import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/Store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
)
