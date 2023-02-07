import React from 'react';
import styles from './styles.scss';
import Card from "./components/ScrollCard/Card";



localStorage.setItem("count", 0);

const App = () => {
    return (
      <Card/>
    )
}

export default App;