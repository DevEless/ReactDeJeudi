import React from 'react'

const Enigme = () => {
    function GetRandomNumber() {
    let number = Math.floor(Math.random() * 100)  
    let valueInput = document.getElementById('number');
    let valueInput2 = valueInput.value 
        return number ;
        
        
    }
  return (
    <div>
    <h1>Devines le nombre entre 1 et 100</h1>
    <input type="number" id="number" value={number} />
    <p>{valueInput2 ? "oui bien joué" : "non"}</p>
    
    </div>
  )
}

export default Enigme