const Challenge = () => {

    const a = 1;
    const b = 2;

    const handleEvent = () => {
        console.log(a + b);
    }

    return (
        <div>
            <h1>valor a = {a}</h1><br/>
            <h1>valor b = {b}</h1>
            <button onClick={handleEvent} >click aqui</button>
        </div>
    );
}

export default Challenge;