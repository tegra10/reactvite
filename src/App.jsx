import { useState } from "react";
import Use from "./components/Use.jsx";
import Controle from "./components/Controle.jsx";
import DataFlux from "./components/DataFlux.jsx";
import Effect from './components/Effect.jsx'
let showTitle = true;
const todos = ["apprendre react", "developper en react", "s'exercer en react"];
function App() {
    const [name, setName] = useState("");
    const handleShow = () => {
        alert("je declenche un evenement!!");
    };
    return (
        <>
            <Use />
            <Controle />
            <DataFlux onHandle={setName} value={name} children>
                {name}
            </DataFlux>
            <Title
                couleur={"red"}
                children
                id="titre"
                className="titre"
                data-demo="demo"
            >
                <p>je suis l'enfant de Title</p>
            </Title>
            <button onClick={handleShow}>click</button>
            {showTitle && <h1>je suis du jsx</h1>}
            <Effect/>
        </>
    );
}

const Title = ({ couleur, children, ...props }) => {
    //console.log(props);
    return (
        <>
            <p style={{ color: couleur }} {...props}>
                bonjour{children}
            </p>
            <ul>
                {todos.map(todo => (
                    <li key={todo}>{todo}</li>
                ))}
            </ul>
        </>
    );
};

export default App;
