import React, { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(true);
    
    const [name, setName] = useState("pedro");

    return (
        <div>
            <h1>isso será exibido?</h1>
            {x && <p>se x for true, sim!</p>}
            {!x && <p>se x for false, não!</p>}
            {name === "Joao" ? (
                <div>
                    <p>o nome é Joao</p>
                </div>
            ) : (
                <div>
                    <p>o nome não é Joao</p>
                </div>
            )}
            <button onClick={() => {setName("Joao")}}>mudar nome para Joao</button>
        </div>
    )
}

export default ConditionalRender;