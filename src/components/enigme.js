import React from 'react'

const Enigme = () => {
    let number = 0
    function GetRandomNumber() {
     number = Math.floor(Math.random() * 100)  
    let valueInput = document.getElementById('number');
    let valueInput2 = valueInput.value 
    const boole = false
    if (valueInput2 === number) {
    boole = true
    }

        
        
    }
  return (
    <div>
        {GetRandomNumber()}
    <h1>Devines le nombre entre 1 et 100</h1>
    <input type="number" id="number" value={`${number}`} />
    <p>{boole ? "oui bien joué" : "non"}</p>
    
    </div>
  )
}

export default Enigme