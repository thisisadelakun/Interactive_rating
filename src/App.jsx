import react, { useState } from 'react'
import './App.css';
import Card from './Components/Card';
import Success from './Components/Success';


function App() {
  const [showCard2, setShowCard2] = useState();
  const [showCard1, setShowCard1] = useState();

  return (
    <div className="card-box">
      {showCard2
        ? (<Success showCard1={showCard1} />)
        : (<Card showCard1={showCard1}
          setShowCard1={setShowCard1}
          setShowCard2={setShowCard2} />
        )}
    </div>
  )
}

export default App
