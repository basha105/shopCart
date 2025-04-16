function Greeting() {
    const ballers = ["cris", "messi", "zidane"];
    
    return (
        <div>
            <h1>ballers: </h1>
            <ul>
                {ballers.map((baller) => {
                    return baller.startsWith("c") ? <li key={baller}>{baller}</li> : null;
                })}
            </ul>
        </div>
    );
}

export default Greeting;