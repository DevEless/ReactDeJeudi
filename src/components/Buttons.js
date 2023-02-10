import React from 'react'
import { useState } from 'react'

export const Button = () => {

    let [count, setCount] = useState(0);

    const Incrementation = () => {
        count = count + 1;
        setCount(count);
    }
    return (
        <section>
            <h1>Grrrr Baw ! oh non ils ont fumé pop simoké</h1>
            <span>{count}</span>
            <button onClick={Incrementation}>Cliquez ici</button>
        </section>
    )
}

export default Button