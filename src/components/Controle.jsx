import { useState } from "react";
const Controle = () => {
    const [name, setName] = useState("tegra");
    const [check, setCheck] = useState(false);
    const handleChange = e => {
        
        setName(e.target.value);
    };
    const handleCheck = () =>{
      setCheck(!check)
    }
    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <input type="text" value={name} onInput={handleChange} />
                <p>{name}</p>
                <input type="checkbox" checked={check} onInput={handleCheck}/>
                <input type="submit" />
            </form>
        </>
    );
};

export default Controle;
