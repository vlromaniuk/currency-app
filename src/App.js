import React from 'react';
import classes from './App.module.css'
import CurrencyInput from "./components/Currency/Currency";

function App() {
  return (
        <div className={classes.App}>
            <div className={classes.Card}>
                <CurrencyInput/>
            </div>
        </div>
  );
}

export default App;
