import MyCompoment from "./MyComponent";

const FirstComponent = () => {
    return (
        <div>
            {/*comentário teste*/}
            <h1>Meu primeiro componente</h1>
            <p className="test">meu texto</p>
            <MyCompoment />
        </div>
    );
}

export default FirstComponent;