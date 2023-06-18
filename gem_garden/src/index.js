import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const container = document.getElementById("root")
// if (!container) throw new Error('Failed to find the root element');
// const root = ReactDOM.createRoot(container)

root.render(
  <BrowserRouter>
<ChakraProvider >
  <Provider store={store}>
  <ColorModeScript />
  <App />
  </Provider>
</ChakraProvider>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
