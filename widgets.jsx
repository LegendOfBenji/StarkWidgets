import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import Root from './frontend/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root)
})
