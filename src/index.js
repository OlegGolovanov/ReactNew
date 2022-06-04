/* импорт библиотеки React */
import React from 'react'; 
/* Дополнение к React, через него создается
виртуальное дом дерево */ 
import ReactDOM from 'react-dom/client'; 
/* стили */
import './index.css';   
import App from './components/app/app'; 
// Библиотека, которая измеряет скорость библиотеки



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App/>               
  </React.StrictMode>  
);


