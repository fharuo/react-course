const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
    };

    const renderSomething = (x) => {
        if (x) {
            return <h1>renderizou true</h1>;
        } else {
            return <h1>renderizou false</h1>;
        }
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>events</button>        
            </div>
            <div>
                <button onClick={() => console.log("clicou")}>onLine events</button>
            </div>
            <div>
                <button onClick={() => {
                    if(true) {
                        console.log("má pratica")
                    }
                }}>Má Pratica de eventos</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default Events;