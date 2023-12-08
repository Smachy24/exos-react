import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [compt, setCompt] = useState(0);
  

  const message = <p>Compteur : {compt}</p>

  useEffect(() => {
    if(compt===10){
      alert("Vous avez cliquer 10 fois")
    }
  });

  return (
    <div>
      {message}
      <button onClick={() => setCompt(compt+1)}>Add 1</button>
    </div>
   
  );
}

export default App;
