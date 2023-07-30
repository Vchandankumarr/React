import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemecontextProvider from "./components/contexts/ThemecontextProvider"
// import { useState } from 'react';

// export it to get in example.jsx
// export const Appcontext=React.createContext()


// console.log(Appcontext.Provider)

const root = ReactDOM.createRoot(document.getElementById('root'));


// const ContextProvider=(prop)=>{
//   const [theme,setTheme]=useState("Light")

//   const toggletheme=()=>{
//     setTheme(theme==="Light"?"Dark":"Light")
//   }
//   return (
//  <Appcontext.Provider value={{theme:theme}} >
//     {prop.children}
//  </Appcontext.Provider>
//   )
// };


root.render(
  
  // <Appcontext.Provider value={{theme:"light"}}>  <App /> </Appcontext.Provider>
  <ThemecontextProvider>
    <App />
    </ThemecontextProvider>
   
    
   
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
