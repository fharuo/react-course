const TemplateExpressions = () => {
    const name = "fabrício";
    const data = {
        age: 27,
        job: "programador"
    }
    return(
        <div>
            <p>ola, {name}. tudo bem?</p>
            <p>voce atua como {data.job} e tem {data.age} anos.</p>
        </div>
    );
}

export default TemplateExpressions;